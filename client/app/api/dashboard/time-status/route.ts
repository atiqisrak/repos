import { NextResponse } from 'next/server';
import { dummyTimeStatus } from '@/lib/data/dummy-data';

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json(dummyTimeStatus);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch time status' },
      { status: 500 }
    );
  }
}

