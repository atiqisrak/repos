# **RePOS Technical Architecture: Deep Dive**

## **1\. System Overview: The Hybrid Edge-Cloud Pattern**

RePOS is architected as a **Distributed Edge System**. Unlike traditional SaaS POS systems that rely entirely on the cloud, RePOS utilizes a local "Edge Node" within the restaurant's LAN to manage high-frequency, mission-critical operations.

### **High-Level Topology**

1. **Clients:** Handheld tablets and stationary terminals (React/TS).  
2. **Edge Node (Local Server):** A Dockerized Node.js/Go instance running on-premise. It manages the local database and hardware communication.  
3. **Cloud Registry:** The central hub for global reporting, multi-unit management, and configuration backups.

## **2\. Frontend Architecture**

The frontend is built to be resilient, performant, and highly reactive to state changes (like a table being marked "Ready" by the kitchen).

### **2.1 State Management (Redux \+ WebSockets)**

* **Store Structure:** The Redux store is partitioned into floorState, activeCart, inventoryBuffer, and systemAlerts.  
* **WebSocket Sync:** When a KDS marks an item as cooked, a message is broadcasted via Socket.io. The floorState reducer updates the specific table's status property, triggering a re-render of the table component with the "Pulse" animation.  
* **Optimistic UI:** When a server adds an item, it appears in the cart immediately. If the Edge Node fails to acknowledge the addition within 200ms, a "Syncing..." indicator appears.

### **2.2 Table Map Rendering**

* **Implementation:** The Dining Floor uses **SVG rendering** for the table map to allow for infinite scaling without pixelation and to simplify hit-area detection for touch inputs.  
* **Dynamic Styling:** Table colors are bound to a CSS variable system (--status-occupied, \--status-available) defined in the design\_system.md.

## **3\. Backend & Data Modeling**

The backend utilizes a microservices approach to separate concerns between Transactional processing and Administrative reporting.

### **3.1 Primary Data Entities (PostgreSQL Schema)**

* **Orders Table:** UUID, table\_id, server\_id, status (open, partially\_paid, closed), timestamp\_opened, total\_amount.  
* **Order\_Items Table:** UUID, order\_id, menu\_item\_id, modifiers (JSONB), seat\_number, kds\_status (pending, cooking, ready, served).  
* **Transactions Table:** UUID, order\_id, payment\_type, amount, processor\_reference\_id, status (success, failed, reversed).

### **3.2 Performance Optimization (Redis)**

* **Live State Cache:** Redis stores the "Active Sessions" for the entire restaurant. This allows a server to switch from a stationary terminal to a handheld device and see their cart instantly without hitting the primary Postgres DB.

## **4\. Hardware & Peripheral Integration**

Communication with hardware happens at the Edge Node layer to minimize latency.

* **Printing (ESC/POS):** The system uses the node-escpos protocol to send raw byte commands to thermal printers over the network (TCP). This allows for custom formatting, logo printing, and "Buzzer" triggers without driver overhead.  
* **Payment (NFC/EMV):** Integration with Stripe Terminal via the **Stripe JS SDK** or **Java SDK**. The system uses "Point-to-Point Encryption" (P2PE), ensuring that clear-text credit card data never touches the RePOS server.  
* **Barcode Scanning:** Implemented via HID (Human Interface Device) keyboard emulation for inventory intake.

## **5\. Offline Resiliency & Conflict Resolution**

This is the most critical part of the architecture for a "Mission Critical" environment.

### **5.1 Local Persistence**

* Terminal devices utilize **IndexedDB** to store a local mirror of the Menu and Inventory data.  
* If the Wi-Fi drops, the handheld stores orders locally. Once the connection to the Edge Node is restored, it pushes the queued orders.

### **5.2 Conflict Resolution (The "Last Write Wins" vs "Semantic Merge")**

* **Tables:** If two servers try to seat guests at the same table simultaneously, the Edge Node uses **Atomic Transactions** at the DB level to ensure only the first request succeeds.  
* **Inventory:** Inventory depletion uses a **Decrement** operation rather than a "Set" operation to prevent over-counting stock during high-volume syncs.

## **6\. Security & Infrastructure**

### **6.1 Authentication (OAuth2/OpenID)**

* Servers use a 4-digit PIN for rapid login (Session stored in local storage with a short 12-hour TTL).  
* Managers and Admin users use full OAuth2 (Single Sign-On) for access to the Analytics and Staff Management modules.

### **6.2 Deployment (DevOps)**

* **CI/CD:** GitHub Actions for automated testing and deployment to AWS (Cloud) and automated image pushes to the on-premise Edge Nodes.  
* **Monitoring:** **Sentry** for frontend error tracking and **Prometheus/Grafana** for monitoring the health of the local hardware (CPU, RAM, and Disk space of the Edge Node).  
* **Security:** AES-256 encryption for all data at rest. TLS 1.3 for all data in transit.