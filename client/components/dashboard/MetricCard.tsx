import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  iconColor?: string;
}

export function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  iconColor = "text-primary",
}: MetricCardProps) {
  return (
    <Card className="flex flex-col rounded-4xl" padding="md">
      {/* First Row: Icon and Value in 2 columns */}
      <div className="flex items-center gap-4 mb-3">
        {/* Icon in circular background */}
        <div
          className={cn(
            "w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0",
            iconColor
          )}
        >
          <Icon className="w-6 h-6 text-[#64748B]" />
        </div>

        {/* Value */}
        <div className="flex-1">
          <p className="text-3xl font-bold text-[#1E293B] leading-tight">
            {value}
          </p>
          {trend && (
            <p
              className={cn(
                "text-xs font-medium mt-0.5",
                trend.isPositive ? "text-[#10B981]" : "text-[#EF4444]"
              )}
            >
              {trend.value}
            </p>
          )}
        </div>
      </div>

      {/* Second Row: Label */}
      <div>
        <p className="text-sm text-[#64748B] font-medium">{label}</p>
      </div>
    </Card>
  );
}
