/**
 * Dummy data for RePOS Dashboard
 * This will be replaced with API calls later
 */

export interface MetricData {
  activeOrders: number;
  occupiedTables: {
    occupied: number;
    total: number;
  };
  totalRevenue: number;
}

export interface SalesDataPoint {
  date: string;
  label: string;
  value: number;
}

export interface ActivityItem {
  id: string;
  type: 'vip-room' | 'kitchen' | 'order' | 'table';
  title: string;
  description: string;
  imageUrl?: string;
  timestamp: Date;
  actionLabel?: string;
}

export const dummyMetrics: MetricData = {
  activeOrders: 134,
  occupiedTables: {
    occupied: 12,
    total: 40,
  },
  totalRevenue: 18423,
};

export const dummySalesData: SalesDataPoint[] = [
  { date: '2025-01-19', label: 'Sut', value: 4500 },
  { date: '2025-01-20', label: 'Sun', value: 5200 },
  { date: '2025-01-21', label: 'Mon', value: 3200 },
  { date: '2025-01-22', label: 'Tue', value: 6574 },
  { date: '2025-01-23', label: 'Wed', value: 3800 },
  { date: '2025-01-24', label: 'Thu', value: 5500 },
  { date: '2025-01-25', label: 'Fri', value: 5900 },
];

export const dummyActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'vip-room',
    title: 'VIP Room 5',
    description: 'Waiter requested',
    imageUrl: 'https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg',
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
    actionLabel: 'Handle',
  },
  {
    id: '2',
    type: 'kitchen',
    title: 'Kitchen',
    description: 'Order #12 ready',
    imageUrl: 'https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg',
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
    actionLabel: 'Handle',
  },
  {
    id: '3',
    type: 'order',
    title: 'Table 8',
    description: 'New order received',
    imageUrl: 'https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    actionLabel: 'View',
  },
  {
    id: '4',
    type: 'table',
    title: 'Table 3',
    description: 'Payment completed',
    imageUrl: 'https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    actionLabel: 'Details',
  },
];

export const dummyTimeStatus = {
  avgWaitTime: 20,
  unit: 'min',
};

