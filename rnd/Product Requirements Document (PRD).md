# **Product Requirements Document (PRD): RePOS v1.0**

**Status:** Draft / For Review **Project Lead:** Product Owner **Last Updated:** December 25, 2025

## **1\. Executive Summary**

RePOS is a specialized Restaurant Operations System focused on three core pillars: **Dynamic Table Tracking**, **High-Velocity Order Entry**, and **Flexible Bill Settlement**. The goal is to reduce order-to-table latency, eliminate billing errors in high-volume dining environments, and provide management with real-time actionable data.

## **2\. Product Goals & Success Metrics**

* **Efficiency:** Reduce the average time to open a table and send an order to under 45 seconds. This includes reducing the number of "taps" required for the 10 most popular menu items.  
* **Accuracy:** Decrease order void rates by 15% through mandatory modifier guardrails and real-time stock-out synchronization.  
* **Flexibility:** Enable complex split-billing (by item, seat, or amount) to be completed in under 60 seconds, even for parties larger than 8 guests.  
* **Reliability:** Maintain 99.9% uptime for the KDS (Kitchen Display System) sync using a local-mesh network to prevent cloud-dependency failures.  
* **Insights:** Achieve a 100% data capture rate for guest preferences and peak-hour performance metrics.

## **3\. Functional Requirements**

### **3.1 Module: Table Tracking & Floor Management**

The system must provide a real-time, interactive visual representation of the restaurant floor that reflects the physical reality of the dining room.

| ID | Feature | Description | Priority |
| ----- | ----- | ----- | ----- |
| **FR-1.1** | **Dynamic States** | Tables must cycle through 4 primary states: Available (Green), Occupied (Rose), Ordered (Yellow), and Cleaning (Slate). Transitions must trigger UI animations. | P0 |
| **FR-1.2** | **Table Metadata** | Display Table ID, Guest Count, and a "Session Timer." The timer should change color (e.g., turn Red) if the table exceeds the target turnover time (e.g., 90 mins). | P0 |
| **FR-1.3** | **Table Merging** | Ability to "join" two or more tables into a single billing entity for large parties while maintaining their physical location on the map. | P1 |
| **FR-1.4** | **Reservation Sync** | Integration with external booking APIs to mark tables as "Reserved" (Amber) 30 minutes prior to a booking. | P2 |

### **3.2 Module: Order Entry & Management**

The interface must facilitate rapid entry, ensuring that servers spend more time with guests and less time at the terminal.

| ID | Feature | Description | Priority |
| ----- | ----- | ----- | ----- |
| **FR-2.1** | **Grid-Based Menu** | Categorized view with 1:1 thumbnails. Must support "Smart Sorting" where frequently ordered items move to the top during specific dayparts (e.g., Breakfast vs. Dinner). | P0 |
| **FR-2.2** | **Forced Modifiers** | Mandatory prompts for "Doneness," "Sides," and "Allergy Warnings." System must block the "Send" action until these selections are finalized. | P0 |
| **FR-2.3** | **Advanced Modifiers** | Support for "Substitutions" (e.g., Sub fries for salad) with automatic price adjustments (upcharges/discounts). | P1 |
| **FR-2.4** | **KDS Feedback Loop** | Real-time status sync showing "In Progress" vs "Ready to Serve." A "Ready" status should pulse on the floor plan to alert the server. | P0 |

### **3.3 Module: Billing & Payments**

The POS must handle complex "end of meal" scenarios with high precision and minimal friction.

| ID | Feature | Description | Priority |
| ----- | ----- | ----- | ----- |
| **FR-3.1** | **Visual Split-Bill** | A drag-and-drop interface to move individual items from a master bill to secondary receipts. Must support "Split by Seat" if guest positions were tracked. | P0 |
| **FR-3.2** | **Multi-Method Pay** | Support for simultaneous payment types (e.g., $20 Cash \+ $40 Credit Card). Each transaction must be reconciled independently. | P0 |
| **FR-3.3** | **Tax & Tip Logic** | Automated tax based on local geo-settings. Tip prompts must follow customizable percentage presets (e.g., 18%, 20%, 22%) on the customer-facing display. | P0 |
| **FR-3.4** | **Partial Settlement** | Ability to keep a table "Occupied" while partially settling a bill (e.g., one guest leaves early). | P1 |

### **3.4 Module: Reporting & Analytics**

Management requires real-time data to make staffing and inventory decisions.

| ID | Feature | Description | Priority |
| ----- | ----- | ----- | ----- |
| **FR-4.1** | **Live Sales Dashboard** | Real-time tracking of Gross Sales, Net Sales, and Labor Cost percentage. | P1 |
| **FR-4.2** | **Product Mix (P-Mix)** | Report showing which items are high-volume/low-margin vs. low-volume/high-margin to optimize menu engineering. | P1 |
| **FR-4.3** | **Staff Performance** | Tracking "Average Check" and "Upsell Success Rate" per server to identify training needs. | P2 |

## **4\. Non-Functional Requirements**

* **Performance:** UI response time for taps must be \<100ms. Transition between "Floor Plan" and "Menu" must be instantaneous.  
* **Offline Mode:** If the internet fails, the local "Hub" must maintain the KDS and Printer queue. Data syncs to the cloud once connectivity is restored.  
* **Security:** PCI-DSS Level 1 compliance. End-to-end encryption for all card-present and card-not-present transactions.  
* **Scalability:** Support up to 50 concurrent handheld devices per location without degradation in KDS sync speed.

## **5\. User Interface (UI) Requirements**

*Refer to the `design_system.md` for full specifications.*

* **Typography:** Urbanist (Geometric Sans). High weight (600+) for numeric values (Prices, Table Numbers).  
* **Gestures:** Support for "Swipe to Delete" in the cart and "Long Press" on tables to view quick-summary metadata without opening the full order.  
* **Accessibility:** High-contrast mode for outdoor seating areas; adjustable font sizes for staff with visual impairments.  
* **Touch Targets:** Minimum 44x44px. Critical actions (Send, Pay) must have a 24px safety margin to prevent accidental taps.

## **6\. Hardware Integrations**

RePOS must integrate seamlessly with industry-standard peripherals:

* **Printers:** Support for Star Micronics and Epson thermal printers via LAN and Bluetooth.  
* **Payment Terminals:** Integration with Stripe Terminal and Square Reader for encrypted EMV/NFC processing.  
* **Kitchen Displays:** Optimized for 22-inch touchscreen monitors with moisture-resistant housing.

## **7\. Assumptions & Constraints**

* **Hardware:** Deployment targets are 10-inch tablets (stations) and 6-inch mobile devices (handhelds).  
* **Connectivity:** Requires a dedicated 5GHz Wi-Fi band for POS traffic to avoid interference from guest Wi-Fi.  
* **Compliance:** v1.0 targets US and EU tax/privacy regulations (GDPR/PCI).

## **8\. Acceptance Criteria (Sample)**

**Scenario: Splitting a Bill by Item**

* **Given** a table has 4 items totaling $100.  
* **When** the server drags "Item A" ($25) to a new Receipt and "Item B" ($25) to another.  
* **Then** the system must show three distinct receipts ($25, $25, and $50).  
* **And** the master table balance must remain "Unpaid" until all three receipts are settled to $0.