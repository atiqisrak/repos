import { NextResponse } from 'next/server';
import { dummySalesData } from '@/lib/data/dummy-data';

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json({
      sales: dummySalesData,
      targetValue: 6574,
      targetPercentage: 78,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch sales data' },
      { status: 500 }
    );
  }
}

