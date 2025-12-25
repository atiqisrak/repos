"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card } from "@/components/ui/Card";
import { SalesDataPoint } from "@/lib/data/dummy-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SalesAnalytics() {
  const [salesData, setSalesData] = useState<SalesDataPoint[]>([]);
  const [targetValue, setTargetValue] = useState(6574);
  const [targetPercentage, setTargetPercentage] = useState(78);

  useEffect(() => {
    fetch("/api/dashboard/sales")
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data.sales);
        setTargetValue(data.targetValue || 6574);
        setTargetPercentage(data.targetPercentage || 78);
      })
      .catch(() => {
        // Fallback to dummy data
        setSalesData([
          { date: "2025-01-19", label: "Sut", value: 4200 },
          { date: "2025-01-20", label: "Sun", value: 5100 },
          { date: "2025-01-21", label: "Mon", value: 4800 },
          { date: "2025-01-22", label: "Tue", value: 6574 },
          { date: "2025-01-23", label: "Wed", value: 5200 },
          { date: "2025-01-24", label: "Thu", value: 5800 },
          { date: "2025-01-25", label: "Fri", value: 6100 },
        ]);
      });
  }, []);

  const chartData = {
    labels: salesData.map((item) => item.label),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((item) => item.value),
        backgroundColor: salesData.map((item, index) => {
          // Highlight Tuesday (index 3) with green
          return index === 3 ? "#10B981" : "rgba(148, 163, 184, 0.5)";
        }),
        borderColor: salesData.map((item, index) => {
          return index === 3 ? "#10B981" : "#94A3B8";
        }),
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1E293B",
        padding: 12,
        titleFont: {
          family: "Urbanist",
          size: 14,
          weight: 600,
        },
        bodyFont: {
          family: "Urbanist",
          size: 12,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Urbanist",
            size: 12,
          },
          color: "#64748B",
        },
      },
      y: {
        grid: {
          color: "#E2E8F0",
        },
        border: {
          display: false,
        },
        ticks: {
          font: {
            family: "Urbanist",
            size: 12,
          },
          color: "#64748B",
        },
      },
    },
  };

  return (
    <Card className="rounded-4xl">
      <div className="flex items-center justify-between mb-6 gap-2">
        <h2 className="text-2xl font-normal text-[#1E293B]">Sales Analytics</h2>
        <select className="px-4 py-2 border border-[#E2E8F0] rounded-md text-sm bg-white">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="flex items-start gap-6 mb-6">
        <div>
          <p className="text-3xl font-bold text-[#1E293B]">
            ${targetValue.toLocaleString()}
          </p>
          <p className="text-sm text-[#10B981] font-semibold mt-1">
            {targetPercentage}%
          </p>
        </div>
        <div className="flex-1 relative" style={{ height: "200px" }}>
          <Bar data={chartData} options={options} />
          {/* Reference line */}
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-[#10B981] opacity-50"
            style={{ top: `${100 - targetPercentage}%` }}
          />
        </div>
      </div>
    </Card>
  );
}
