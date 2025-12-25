import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { SalesAnalytics } from "@/components/dashboard/SalesAnalytics";
import { LiveActivityFeed } from "@/components/dashboard/LiveActivityFeed";
import { TimeStatus } from "@/components/dashboard/TimeStatus";
import { OtherMetrics } from "@/components/dashboard/OtherMetrics";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
        {/* Left Column - 60% */}
        <div className="space-y-4">
          <h1 className="text-4xl font-normal">Operational Snapshot</h1>
          {/* First Row: Metric Cards */}
          <MetricCards />

          {/* Second Row: Sales Analytics */}
          <SalesAnalytics />

          {/* Additional rows can be added here */}
        </div>

        {/* Right Column - 40% */}
        <div className="space-y-8">
          <div className="flex flex-row items-center justify-end gap-2">
            {/* green indicator */}
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <h1 className="text-2xl font-bold">Live</h1>
          </div>
          {/* Live Activity Feed */}
          <LiveActivityFeed />

          {/* Time Status */}
          <TimeStatus />

          {/* Other Metrics */}
          <OtherMetrics />
        </div>
      </div>
    </DashboardLayout>
  );
}
