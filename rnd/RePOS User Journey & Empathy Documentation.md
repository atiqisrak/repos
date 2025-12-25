# **RePOS User Journey & Empathy Documentation**

## **1\. Empathy Mapping**

To design a POS that works *with* the staff rather than against them, we map the sensory and emotional experience of our primary user: **Sam the Server** during a Friday Night Rush.

| Category | Observations & Insights |
| :---- | :---- |
| **SAYS** | "Is Table 4's steak ready yet?", "I need to split this bill three ways, quickly\!", "Sorry, we're out of the sea bass." |
| **THINKS** | *I hope I didn't forget the 'no-dairy' note on Table 12\.*, *Management is watching our table turnover times.*, *This UI is too slow when I'm in a hurry.* |
| **DOES** | Swipes rapidly between floor views, taps 'Quick Add' on popular drinks, checks the timer on occupied tables frequently. |
| **FEELS** | **Anxious** about order accuracy, **Stressed** by the noise level, **Relieved** when a complex bill is settled without errors. |

## **2\. The User Journey: "The Friday Night Rush"**

This journey tracks the lifecycle of a single dining party from the perspective of the server using RePOS.

### **Stage 1: Arrival & Seating**

* **User Action:** Opens RePOS Floor Plan, identifies a green (Available) table for 4\.  
* **System Action:** Taps Table 14 \-\> State changes to "Occupied" (Rose color). Guest count entered.  
* **Emotional State:** Focused/Efficient.  
* **Design Touchpoint:** High-contrast table states allow Sam to spot an open table from across the room.

### **Stage 2: Order Entry**

* **User Action:** Opens Table 14, selects "Appetizers" and "Mains". Uses "Quick Add" for 4 waters.  
* **System Action:** Items appear in the side cart. Sam adds a "Medium Rare" modifier to the steak.  
* **Emotional State:** Hurried.  
* **Design Touchpoint:** Large hit areas for menu items and clear "Urbanist Bold" modifiers prevent tapping errors.

### **Stage 3: Order Tracking & Maintenance**

* **User Action:** Sam checks the "Table Timer" on the floor plan. It shows 25 minutes.  
* **System Action:** Order sent to KDS. Sam sees a "Cooked" status notification on the table icon.  
* **Emotional State:** Alert/Reactive.  
* **Design Touchpoint:** Small status icons on the table blocks (e.g., a "Chef's Hat" icon) notify Sam without him needing to open the table details.

### **Stage 4: The Complex Bill (Pain Point)**

* **User Action:** Table 14 asks to split the bill: 2 people pay for their own meals, 1 pays for the wine.  
* **System Action:** Sam enters the "Payment" view. Drags specific items into three separate virtual receipts.  
* **Emotional State:** High Pressure (guests are waiting).  
* **Design Touchpoint:** Drag-and-drop split billing functionality reduces mental math and physical taps.

### **Stage 5: Departure & Turnover**

* **User Action:** Final payments processed. Table 14 leaves.  
* **System Action:** Table 14 turns Slate (Dirty/Cleaning).  
* **Emotional State:** Satisfied/Ready for next.  
* **Design Touchpoint:** Auto-transition to "Cleaning" status alerts the bussing staff immediately.

## **3\. Pain Points & Design Solutions**

| Pain Point | Design Solution in RePOS |
| :---- | :---- |
| **Order Errors:** Forgetting special dietary requirements. | **Forced Modifiers:** The system prompts for "Doneness" or "Allergies" before an item can be sent. |
| **System Fatigue:** Eye strain from looking at bright screens in a dimly lit restaurant. | **Dark Sidebar / High Contrast:** Reduces overall screen glare while keeping text sharp. |
| **Input Speed:** Scrolling through hundreds of menu items. | **Smart Search & Favorites:** RePOS surfaces the top 10 most-ordered items at the top of the grid. |
| **Information Overload:** Seeing too much data at once. | **Progressive Disclosure:** Advanced analytics and inventory are hidden behind the "Admin" layer, keeping the "Server" view clean. |

## **4\. Key Performance Indicators (UX Focus)**

To measure the success of this design, we track:

1. **Time to Ticket:** Seconds from opening a table to sending the order.  
2. **Error Rate:** Frequency of "Voided" items due to entry errors.  
3. **Turnover Speed:** Average time a table stays in the "Dirty" state.  
4. **Checkout Friction:** Time taken to process a split-bill payment.