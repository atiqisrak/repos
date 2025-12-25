# **RePOS Design System Documentation**

## **1\. Design Philosophy**

RePOS (Restaurant Operations System) is an enterprise-grade POS solution designed to bridge the gap between back-office complexity and front-of-house speed. The design language is characterized by **soft geometry**, **high-contrast navigation**, and **modular information density**.

## **2\. Color Palette**

### **2.1 Brand & Primary Colors**

The primary palette uses high-chroma accents against deep neutrals to maintain focus.

* **Primary (Vibrant Coral):** \#FF6B4A \- Used for primary CTA buttons, active states, and critical highlights.  
* **Primary Soft:** \#FFF0ED \- Used for background highlights of active menu items.  
* **Secondary (Dark Slate):** \#1E293B \- The core navigation color, providing depth and hierarchy.

### **2.2 Functional Colors (Status)**

Directly mapped to restaurant operations (Table status, Stock levels, Payment success).

* **Available / Success:** \#10B981 (Emerald)  
* **Reserved / Warning:** \#F59E0B (Amber)  
* **Occupied / Error:** \#EF4444 (Rose)  
* **Cleaning / Neutral:** \#94A3B8 (Slate)

### **2.3 Surface & Backgrounds**

* **App Canvas:** \#F8FAFC  
* **Card Surface:** \#FFFFFF  
* **Sidebar Background:** \#0F172A (Deepest Navy)  
* **Border/Stroke:** \#E2E8F0 (1px solid)

## **3\. Typography**

Primary Font Family: Urbanist (Google Fonts)  
Urbanist's geometric sans-serif nature provides the "modern tech" feel seen in the RePOS project.

| Level | Size | Weight | Case | Usage |
| :---- | :---- | :---- | :---- | :---- |
| **H1 (Display)** | 28px | 700 | Sentence | Main Dashboard Totals |
| **H2 (Page)** | 22px | 600 | Sentence | Section Headers (e.g., Dining Floor) |
| **H3 (Card)** | 18px | 600 | Sentence | Item Titles, Table Numbers |
| **Body (Bold)** | 14px | 600 | Sentence | Buttons, Tab Labels |
| **Body (Base)** | 14px | 400 | Sentence | Form Inputs, Descriptions |
| **Label** | 12px | 500 | Uppercase | Table Headers, Metadata Labels |

## **4\. Components & Patterns**

### **4.1 Global Navigation**

* **Architecture:** Fixed left sidebar.  
* **Visuals:** Dark Navy background. Icons are centered in a 48x48px hit area.  
* **Active State:** A vertical pill highlight in \#FF6B4A on the left edge.

### **4.2 Dining Floor (Tables)**

* **Design:** Tables are represented as distinct geometric blocks with rounded corners (16px).  
* **Data Points:** Table ID (Top Left), Capacity (Bottom Right), and Timer (Top Right, if occupied).  
* **Shadow:** 0px 4px 6px \-1px rgba(0, 0, 0, 0.05) for a subtle "lifted" effect.

### **4.3 Menu Grid**

* **Item Cards:** 1:1 aspect ratio images with a 12px border radius.  
* **Interaction:** One-tap "Quick Add" (+) icon in the bottom right corner of the image.  
* **Hover:** Slight scale-up (1.02x) and border color change to Primary.

### **4.4 Analytics Widgets**

* **Visuals:** Large numerical values paired with mini-sparkline charts.  
* **Context:** Comparison data (e.g., "+12.5% vs last week") uses functional colors for quick scanning.

## **5\. Layout Rules**

* **Grid:** 8px Base Unit.  
* **Container Radius:** 20px for main workspace panels.  
* **Inner Component Radius:** 12px or 16px.  
* **Safe Zones:** 32px padding for the main app container to prevent visual clutter on tablet edges.

## **6\. Iconography**

* **Style:** 2.5px Stroke, Rounded Ends.  
* **Selection:** Use icons that mimic real-world restaurant objects (Cloche for menu, Couch for lounge area, Receipt for transactions).