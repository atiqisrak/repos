RePOS Implementation Plan
Architecture Overview
RePOS will be built as a hybrid edge-cloud system with:

Frontend: Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS 4
State Management: Redux Toolkit + RTK Query for API calls, Socket.io client for real-time updates
Backend: Node.js/Express Edge Node (can be Dockerized) + PostgreSQL + Redis
Real-time: Socket.io for WebSocket communication
Offline: IndexedDB for local persistence, service worker for offline support
Phase 1: Foundation & Design System (Week 1-2)
1.1 Design System Implementation
File: client/app/globals.css - Implement CSS variables for color palette
Primary: #FF6B4A (Vibrant Coral)
Status colors: Available #10B981, Occupied #EF4444, Ordered #F59E0B, Cleaning #94A3B8
Typography: Urbanist font family (Google Fonts)
Spacing: 8px base unit system
File: client/lib/design-system.ts - TypeScript constants for design tokens
File: client/components/ui/ - Base component library (buttons, cards, inputs)
1.2 Project Structure Setup
client/
├── app/
│ ├── (auth)/
│ ├── dashboard/
│ ├── dining-floor/
│ ├── menu/
│ ├── payments/
│ └── settings/
├── components/
│ ├── layout/ # Sidebar, Header
│ ├── floor-map/ # SVG table rendering
│ ├── menu-grid/ # Menu item cards
│ ├── cart/ # Order cart sidebar
│ └── payments/ # Split bill interface
├── lib/
│ ├── store/ # Redux store configuration
│ ├── hooks/ # Custom React hooks
│ └── utils/ # Helper functions
└── types/ # TypeScript definitions

1.3 Core Dependencies Installation
Redux Toolkit (@reduxjs/toolkit)
React Redux (react-redux)
Socket.io Client (socket.io-client)
Zustand (alternative lightweight state for UI state)
React Hook Form (react-hook-form) for forms
Date-fns (date-fns) for time calculations
IndexedDB wrapper (idb or localforage)
Phase 2: Core Features - P0 Priority (Week 3-6)
2.1 Authentication & Layout
File: client/app/(auth)/login/page.tsx - PIN-based login (4-digit)
File: client/components/layout/Sidebar.tsx - Persistent 260px sidebar with navigation
File: client/components/layout/Header.tsx - Top header with status indicators
2.2 Dining Floor Module (FR-1.1, FR-1.2)
File: client/app/dining-floor/page.tsx - Main floor view
File: client/components/floor-map/FloorMap.tsx - SVG-based interactive floor plan
File: client/components/floor-map/Table.tsx - Individual table component with state colors
File: client/lib/store/slices/floorSlice.ts - Redux slice for table state management
Features:
Table state transitions (Available → Occupied → Ordered → Cleaning)
Session timer with color change on threshold exceed
Guest count input modal
Table metadata display (ID, capacity, timer)
2.3 Order Entry Module (FR-2.1, FR-2.2)
File: client/app/menu/page.tsx - Menu grid view
File: client/components/menu-grid/MenuGrid.tsx - Categorized grid with 1:1 thumbnails
File: client/components/menu-grid/MenuItem.tsx - Individual menu item card
File: client/components/modifiers/ModifierModal.tsx - Forced modifier selection modal
File: client/lib/store/slices/cartSlice.ts - Redux slice for cart management
File: client/components/cart/CartSidebar.tsx - Order cart with running total
Features:
Smart category sorting (daypart-based)
Forced modifiers guardrail (blocks Send until complete)
Quick-add functionality
Real-time cart updates
2.4 Payment & Settlement Module (FR-3.1, FR-3.2, FR-3.3)
File: `client/app/payments/[tableId]/page.tsx` - Payment view
File: client/components/payments/SplitBillWorkspace.tsx - Drag-and-drop split interface
File: client/components/payments/PaymentMethodSelector.tsx - Multi-method payment handler
File: client/lib/store/slices/paymentSlice.ts - Payment state management
Features:
Visual drag-and-drop split billing
Seat-based auto-split
Multi-method payment (Cash + Card)
Tax calculation and tip presets (18%, 20%, 22%)
Phase 3: Backend & Real-time Sync (Week 7-9)
3.1 Backend API Structure
Directory: server/ (new directory)
File: server/src/index.ts - Express server setup
File: server/src/routes/tables.ts - Table management endpoints
File: server/src/routes/orders.ts - Order CRUD endpoints
File: server/src/routes/payments.ts - Payment processing endpoints
File: server/src/socket/index.ts - Socket.io server setup
3.2 Database Schema (PostgreSQL)
File: server/src/db/schema.sql - Database migrations
Tables: tables, orders, order_items, transactions, menu_items, modifiers
3.3 WebSocket Integration
File: client/lib/socket/socketClient.ts - Socket.io client setup
File: client/lib/store/middleware/socketMiddleware.ts - Redux middleware for Socket events
Real-time updates for:
Table state changes
KDS status updates (cooking → ready)
Order modifications
3.4 Redis Cache Layer
Active session caching
Real-time floor state cache
Menu item availability cache
Phase 4: Advanced Features (Week 10-12)
4.1 Dashboard Module (FR-4.1)
File: client/app/dashboard/page.tsx - Executive dashboard
Performance tiles (Gross Sales, Net Revenue, Guest Count, Avg Check)
Live sales heatmap chart
Staff activity feed
4.2 Offline Support
File: client/lib/offline/indexedDB.ts - IndexedDB wrapper
File: client/lib/offline/syncQueue.ts - Offline action queue
Local menu/inventory cache
Order queuing when offline
Conflict resolution on reconnect
4.3 KDS Integration
Kitchen display system status sync
Real-time "Ready" notifications
Pulse animation on floor map
Phase 5: P1/P2 Features (Week 13+)
Table merging (FR-1.3)
Advanced modifiers with substitutions (FR-2.3)
Partial settlement (FR-3.4)
Analytics & Reporting (FR-4.2, FR-4.3)
Inventory Management
Staff Management
Technical Decisions
State Management: Redux Toolkit for global state, Zustand for UI-only state (modals, sidebar)
Styling: Tailwind CSS 4 with CSS variables for theming
SVG Rendering: React + SVG for floor map (scalable, touch-friendly)
Form Handling: React Hook Form for payment forms
Time Calculations: Date-fns for session timers
Offline Storage: IndexedDB via localforage wrapper
API Client: RTK Query for REST APIs, Socket.io for real-time
Key Implementation Files
Critical Components
client/components/floor-map/FloorMap.tsx - SVG floor rendering
client/components/menu-grid/MenuGrid.tsx - Menu display
client/components/payments/SplitBillWorkspace.tsx - Drag-and-drop billing
client/lib/store/slices/floorSlice.ts - Table state management
client/lib/socket/socketClient.ts - WebSocket client
Critical Utilities
client/lib/utils/tableState.ts - Table state transition logic
client/lib/utils/calculations.ts - Tax, tip, split calculations
client/lib/utils/offline.ts - Offline queue management
Success Metrics Tracking
Time to ticket: Track from table open to order sent
Error rate: Monitor voided items
UI responsiveness: <100ms tap response time
Offline sync: Queue processing on reconnect
Next Steps
Set up design system and base components
Implement Dining Floor with SVG rendering
Build Order Entry with forced modifiers
Create Payment module with split billing
Integrate WebSocket for real-time updates
