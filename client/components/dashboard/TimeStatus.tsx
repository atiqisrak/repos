'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';

interface TimeStatusData {
  avgWaitTime: number;
  unit: string;
}

export function TimeStatus() {
  const [timeStatus, setTimeStatus] = useState<TimeStatusData | null>(null);

  useEffect(() => {
    fetch('/api/dashboard/time-status')
      .then((res) => res.json())
      .then((data) => setTimeStatus(data))
      .catch(() => {
        setTimeStatus({ avgWaitTime: 20, unit: 'min' });
      });
  }, []);

  if (!timeStatus) {
    return (
      <Card>
        <div className="h-32 bg-[#F8FAFC] rounded-lg animate-pulse" />
      </Card>
    );
  }

  const percentage = Math.min((timeStatus.avgWaitTime / 30) * 100, 100);

  return (
    <Card>
      <h2 className="text-[22px] font-semibold text-[#1E293B] mb-6">Time Status</h2>
      <div className="flex flex-col items-center">
        {/* Semi-circular gauge */}
        <div className="relative w-48 h-24 mb-4">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background arc */}
            <path
              d="M 20 80 A 80 80 0 0 1 180 80"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Progress arc */}
            <path
              d="M 20 80 A 80 80 0 0 1 180 80"
              fill="none"
              stroke="#10B981"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
              transform="rotate(180 100 80)"
            />
          </svg>
        </div>
        {/* Value */}
        <div className="text-center">
          <p className="text-4xl font-bold text-[#1E293B] mb-1">
            {timeStatus.avgWaitTime}
          </p>
          <p className="text-sm text-[#1E293B]/70">Avg. Wait Time</p>
        </div>
      </div>
    </Card>
  );
}

