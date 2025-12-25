# **RePOS: Interface & Feature Guide**

This document provides a comprehensive breakdown of the RePOS application architecture, detailing the screens (pages) and the specific features contained within each module.

## **1\. Application Architecture & Navigation**

RePOS uses a **Persistent Left Sidebar** for primary navigation, allowing for instant switching between operational and administrative tasks. The navigation is anchored by a 260px sidebar that prioritizes visibility of high-frequency tasks while keeping the core workspace expansive.

### **Navigation Links:**

* **Dashboard:** Real-time visual pulse of the restaurant's financial and operational health.  
* **Dining Floor:** The primary active workspace utilizing the interactive floor map logic.  
* **Menu/Orders:** Central hub for menu engineering and active ticket management.  
* **Inventory:** Granular tracking of physical goods, from raw ingredients to finished products.  
* **Staff:** Workforce management, including scheduling, performance tracking, and roles.  
* **Analytics:** Deep-dive reporting module for trend analysis and profit optimization.  
* **Settings:** Comprehensive hub for hardware configuration, tax rules, and system behavior.

## **2\. Screen-by-Screen Breakdown**

### **2.1 The Dashboard (Executive Overview)**

The entry point for managers and owners to assess restaurant health at a glance without diving into raw data.

* **Feature: Performance Tiles:** High-contrast widgets displaying Gross Sales, Net Revenue, Guest Count, and Average Check Size. These tiles use the **Vibrant Coral** accent to highlight positive trends.  
* **Feature: Live Sales Heatmap:** A visual trend chart showing peak order times throughout the day, helping managers anticipate staffing needs.  
* **Feature: Staff Activity Feed:** A real-time, scrolling audit log of critical actions like item voids, large-party check-ins, and employee clock-ins.  
* **Feature: Threshold Alerts:** System-generated notifications for critical operational issues, such as "Kitchen Lead Time exceeding 25 minutes" or "Stock below par for top-selling items."

### **2.2 Dining Floor (Active Table Management)**

The central operational hub designed for speed and state-awareness during high-pressure shifts.

* **Feature: Interactive Floor Map:** A bird's-eye view of the restaurant zones (Bar, Patio, Dining Room). Tables are geometric blocks that change color based on operational status:  
  * *Available (Green):* Open for seating.  
  * *Occupied (Rose):* Guest is seated; order is active.  
  * *Ordered (Yellow):* Kitchen is currently preparing items.  
  * *Cleaning (Slate):* Guest has paid; table requires reset.  
* **Feature: Multi-Zone Switcher:** A tabbed header allowing servers to jump between physical areas of the restaurant instantly.  
* **Feature: Table Merge/Split UI:** A drag-and-drop interface within the floor plan to physically group tables for large parties, ensuring the bill is unified while the visual map remains accurate.  
* **Feature: Session Timer Alerts:** A persistent timer on occupied tables that pulses when a table has exceeded the "Target Turnover" time (e.g., 90 minutes).

### **2.3 Order Entry (The Menu Grid)**

Optimized for rapid-fire input on 10-inch tablets and mobile handhelds.

* **Feature: Smart Category Grid:** A visual catalog of items with high-resolution 1:1 thumbnails. Categories use "Dynamic Ranking" to surface the most popular items based on the current time of day.  
* **Feature: Modifier Guardrails:** Forced-selection modals that appear for specific items (e.g., Temperature for steaks, Mixers for spirits). These prevent servers from sending incomplete orders to the kitchen.  
* **Feature: Item Hold & Fire:** Ability to add items to a check but "Hold" them (e.g., Mains) while firing others (e.g., Appetizers) to control the flow of the meal.  
* **Feature: Quick-Action Cart:** A sidebar showing the running total, tax calculations, and a "Quick Pay" button for bar-tab scenarios.

### **2.4 Payment & Settlement (The "Last Mile")**

A high-precision module for resolving complex billing requests with minimal friction.

* **Feature: Visual Split-Bill Workspace:** A multi-column view where servers can drag items from the master bill into up to 8 separate "Sub-Bills." The system validates the math in real-time.  
* **Feature: Seat-Based Billing:** If seat numbers were used during order entry, the system can "Auto-Split" the bill by guest position with a single tap.  
* **Feature: Partial Payment Handler:** Allows individual guests to settle their portion of a bill (e.g., $40 on a $200 total) and depart while the table remains "Occupied" for the remaining party.  
* **Feature: Customer-Facing Checkout:** A simplified UI for guests to enter tips (using 18/20/22% presets) and choose between printed or digital receipts.

### **2.5 Inventory Management**

A robust back-office module designed to minimize waste and automate procurement.

* **Feature: Ingredient-Level Tracking:** Ability to link menu items to specific inventory units (e.g., One "Classic Burger" depletes one "Brioche Bun" and "200g Ground Beef").  
* **Feature: Automated Purchase Orders (PO):** The system generates draft POs for suppliers when stock levels hit a pre-defined "Par Level."  
* **Feature: Waste Log:** A dedicated interface for staff to record spoiled or spilled items, ensuring inventory accuracy and highlighting loss patterns.  
* **Feature: Supplier Directory:** A central database of vendors with one-touch contact options and delivery history tracking.

### **2.6 Staff Management & Performance**

* **Feature: Role-Based Access Control (RBAC):** Granular permissions to toggle features like "Price Overrides," "Voids," and "System Settings" per employee level.  
* **Feature: Performance Leaderboard:** Analytics showing per-staff metrics such as "Average Check Size," "Upsell Rate (Sides/Desserts)," and "Table Turnover Speed."  
* **Feature: Integrated Timeclock:** A secure PIN-based clock-in system that cross-references the schedule to prevent early clock-ins.  
* **Feature: Tip Distribution Log:** Automated calculation and logging of tip pools and individual earnings for payroll processing.

### **2.7 Analytics & Financial Reporting**

A deep-dive module providing a 360-degree view of business profitability.

* **Feature: P-Mix (Product Mix) Analysis:** A scatter-plot chart identifying "Stars" (high profit, high volume) and "Dogs" (low profit, low volume) on the menu.  
* **Feature: Labor vs. Sales Chart:** A dual-axis graph showing labor costs plotted against hourly sales to identify over-staffing or under-staffing windows.  
* **Feature: Period Comparison:** Instant year-over-year or month-over-month performance comparisons to track growth.  
* **Feature: Automated End-of-Day (EOD):** A one-tap generation of Z-Reports, reconciling all cash, card, and digital transactions for bank deposit preparation.

### **2.8 Settings & Hardware Hub**

The command center for system customization and hardware maintenance.

* **Feature: Printer Routing Mesh:** A visual map where managers can route specific item categories to specific printers (e.g., "All Pizzas to Oven Printer," "All Cocktails to Service Bar").  
* **Feature: Hardware Health Dashboard:** A real-time status view showing the connectivity and battery levels of all tablets, printers, and card readers.  
* **Feature: Tax & Fee Configuration:** Flexible setup for VAT/GST rates, service charges, and automatic "Large Party Gratuity" rules.  
* **Feature: Menu Editor:** A "Live Preview" editor to update prices, item names, and availability (86-ing items) across all terminals instantly.

## **3\. Global Interactive Features**

### **3.1 Gesture Support**

* **Swipe-to-Void:** In the order cart, a left swipe on an item reveals a "Delete" button.  
* **Pinch-to-Zoom:** On the Floor Map for large restaurants with many tables.  
* **Drag-and-Drop:** Used for both the Table Map editor and the Split-Billing interface.

### **3.2 Notification System**

* **Kitchen Ready Alerts:** A subtle pulse animation on the Floor Map and a push notification when an order is marked "Ready" in the kitchen.  
* **Idle Table Alerts:** Notifications if a table has been "Occupied" for over 15 minutes without an order being sent.  
* **Hardware Status:** A status icon in the top header showing the health of the connection to Printers and Card Readers.