import { NextResponse } from 'next/server';
import { dummyMetrics } from '@/lib/data/dummy-data';

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json(dummyMetrics);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}

