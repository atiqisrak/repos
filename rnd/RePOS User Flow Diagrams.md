# **RePOS User Flow Diagrams**

The following diagrams and detailed walkthroughs illustrate the core operational logic of the RePOS system, focusing on balancing high-speed service with data accuracy.

## **1\. Primary Order-to-Payment Flow**

This flow tracks the "Happy Path" of a guest party, from the moment they enter the establishment to the final turnover of the table. It highlights the high-friction "Split Bill" logic where staff often face the most pressure.

graph TD  
    %% Entry Point  
    Start((Staff Login)) \--\> Dash\[Dashboard / Floor Plan\]

    %% Seating Phase  
    Dash \--\> SelectTable{Select Table}  
    SelectTable \-- Green / Available \--\> SeatGuest\[Tap Seat Table\]  
    SeatGuest \--\> InputGuests\[Input Guest Count\]  
    InputGuests \--\> StateOccupied\[Table State: Occupied / Rose\]

    %% Ordering Phase  
    StateOccupied \--\> OpenMenu\[Open Menu Grid\]  
    OpenMenu \--\> SelectItems\[Select Menu Items\]  
    SelectItems \--\> AddModifiers{Add Modifiers?}  
    AddModifiers \-- Yes \--\> ConfigItem\[Select Doneness/Allergies\]  
    ConfigItem \--\> AddToCart\[Add to Side Cart\]  
    AddModifiers \-- No \--\> AddToCart  
    AddToCart \--\> SendKitchen\[Send to Kitchen / KDS\]  
    SendKitchen \--\> StateCooking\[Table State: Cooking / Hat Icon\]

    %% Tracking Phase  
    StateCooking \--\> ObserveStatus\[Observe Status Notifications\]  
    ObserveStatus \-- Cooked Alert \--\> ServeFood\[Serve Food\]  
    ServeFood \--\> TableMaintenance\[Monitor Table Timer\]

    %% Billing Phase  
    TableMaintenance \--\> RequestCheck\[Guest Requests Check\]  
    RequestCheck \--\> PaymentView\[Open Payment View\]  
    PaymentView \--\> SplitDecision{Split Bill?}  
      
    %% Split Logic  
    SplitDecision \-- Yes \--\> SplitLogic\[Drag Items to Separate Receipts\]  
    SplitLogic \--\> ProcessMultiPay\[Process Multiple Payments\]  
    SplitDecision \-- No \--\> ProcessSinglePay\[Process Single Payment\]  
      
    %% Closing  
    ProcessMultiPay \--\> PrintReceipts\[Print / Email Receipts\]  
    ProcessSinglePay \--\> PrintReceipts  
    PrintReceipts \--\> ClearTable\[Table State: Cleaning / Slate\]  
    ClearTable \--\> Available\[Reset to Available / Green\]  
    Available \--\> End((End Session))

    %% Styling  
    style StateOccupied fill:\#FF6B4A,stroke:\#fff,color:\#fff  
    style StateCooking fill:\#F59E0B,stroke:\#fff,color:\#fff  
    style ClearTable fill:\#94A3B8,stroke:\#fff,color:\#fff  
    style Available fill:\#10B981,stroke:\#fff,color:\#fff

### **1.1 Detailed Operational Breakdown**

* **The Seating Phase:** Beyond just marking a table as "Occupied," this stage initializes the guest metadata. Capturing an accurate guest count is critical for the backend to calculate the "Average Check per Cover" (ACPC), a key metric for the restaurant owner.  
* **Split Billing Logic:** In the "Split Logic" node, RePOS utilizes a drag-and-drop interface. This allows the server to visually move a "Glass of Merlot" from the main bill to "Receipt B," reducing the mental load during complex transactions. The system validates that the sum of all split receipts equals the original total before any payment can be processed.

## **2\. Table State Transition Logic**

This state machine diagram explains how the interface changes visually to communicate urgency and status to the floor staff at a glance.

stateDiagram-v2  
    \[\*\] \--\> Available : System Start  
    Available \--\> Occupied : Guest Seated  
    Occupied \--\> Ordered : Order Sent to Kitchen  
    Ordered \--\> Cooked : KDS Marks Complete  
    Cooked \--\> CheckRequested : Server Generates Bill  
    CheckRequested \--\> Cleaning : Payment Confirmed  
    Cleaning \--\> Available : Staff Resets Table  
      
    note right of Available : Green / Available  
    note right of Occupied : Rose / Occupied  
    note right of Ordered : Yellow / Pending  
    note right of Cleaning : Slate / Dirty

### **2.2 Implications of State Transitions**

* **Available to Occupied:** Triggered by the server. This transition starts the "Table Timer," allowing managers to identify "campers" (guests staying too long) during peak hours.  
* **Ordered to Cooked:** Triggered by the Kitchen Display System (KDS). This is a passive transition for the server, who receives a push notification. Speed in this transition is the primary KPI for the kitchen staff.  
* **CheckRequested to Cleaning:** Once the payment gateway confirms the transaction, the table automatically shifts to "Cleaning" (Slate). This serves as a silent alert to the bussing staff that the table is ready to be reset for the next party.

## **3\. Key Decision Points & Guardrails**

The RePOS system includes built-in intelligence to prevent common hospitality errors that lead to lost revenue or poor customer experiences.

* **The Modifier Guardrail:** This is a "hard-stop" logic gate. For items categorized as "Proteins," the system prevents the server from tapping "Send to Kitchen" until a temperature (e.g., Medium Rare) is selected. This eliminates "walk-backs" from the kitchen to the table, significantly increasing service speed.  
* **The Payment Lock & Reconciliation:** A table is logically "locked" in the "Check Requested" state until the balance is exactly zero. If a partial payment is made (e.g., $20 cash on a $50 bill), the table remains in a "Partial Payment" sub-state. This prevents accidental table closures before the full amount, including taxes and tips, is collected.  
* **KDS Feedback Loop & Real-Time Sync:** When the kitchen marks an item as "Ready," the floor plan UI triggers a subtle pulse animation on the specific table card. This ensures that food never sits under the heat lamp longer than necessary. The synchronization happens via WebSockets to ensure sub-second latency across all handheld devices and terminals.  
* **Automated Discounting Logic:** When a discount (e.g., "Happy Hour" or "Staff Meal") is applied, the system re-calculates the tax line items in real-time, ensuring compliance with local tax regulations without requiring the server to perform manual calculations.