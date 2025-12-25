"use client";

import { useEffect, useState } from "react";
import { FileText, Table, DollarSign } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { MetricData } from "@/lib/data/dummy-data";

export function MetricCards() {
  const [metrics, setMetrics] = useState<MetricData | null>(null);

  useEffect(() => {
    // Fetch metrics from API
    fetch("/api/dashboard/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch(() => {
        // Fallback to dummy data if API fails
        setMetrics({
          activeOrders: 134,
          occupiedTables: { occupied: 12, total: 40 },
          totalRevenue: 18423,
        });
      });
  }, []);

  if (!metrics) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-white rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <MetricCard
        icon={FileText}
        label="Total Active Orders"
        value={metrics.activeOrders}
      />
      <MetricCard
        icon={Table}
        label="Occupied Tables"
        value={`${metrics.occupiedTables.occupied}/${metrics.occupiedTables.total}`}
      />
      <MetricCard
        icon={DollarSign}
        label="Total Revenue"
        value={`$${metrics.totalRevenue.toLocaleString()}`}
      />
    </div>
  );
}
