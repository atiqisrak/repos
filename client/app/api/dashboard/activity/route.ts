import { NextResponse } from 'next/server';
import { dummyActivities } from '@/lib/data/dummy-data';

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json(dummyActivities);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch activity data' },
      { status: 500 }
    );
  }
}

