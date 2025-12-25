"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ActivityItem } from "@/lib/data/dummy-data";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    fetch("/api/dashboard/activity")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch(() => {
        // Fallback to dummy data
        setActivities([
          {
            id: "1",
            type: "vip-room",
            title: "VIP Room 5",
            description: "Waiter requested",
            imageUrl:
              "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg",
            timestamp: new Date(Date.now() - 3 * 60 * 1000),
            actionLabel: "Handle",
          },
          {
            id: "2",
            type: "kitchen",
            title: "Kitchen",
            description: "Order #12 ready",
            imageUrl:
              "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg",
            timestamp: new Date(Date.now() - 3 * 60 * 1000),
            actionLabel: "Handle",
          },
        ]);
      });
  }, []);

  const getActivityImage = (type: ActivityItem["type"]) => {
    const imageMap: Record<ActivityItem["type"], string> = {
      "vip-room":
        "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg",
      kitchen:
        "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg",
      order:
        "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg",
      table:
        "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg",
    };
    return imageMap[type] || imageMap.order;
  };

  return (
    <Card className="rounded-4xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-semibold text-[#1E293B]">
          Live Activity Feed
        </h2>
        <button className="p-2 hover:bg-[#F8FAFC] rounded-md transition-colors">
          <ArrowRight className="w-5 h-5 text-[#1E293B]" />
        </button>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto">
        {activities.length === 0 ? (
          <div className="text-center py-8 text-[#1E293B]/50">
            No activities at the moment
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#F8FAFC] transition-colors"
            >
              {/* Thumbnail - Square Image */}
              <div className="w-16 h-16 rounded-lg bg-[#F8FAFC] overflow-hidden shrink-0 relative">
                <Image
                  src={activity.imageUrl || getActivityImage(activity.type)}
                  alt={activity.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  unoptimized
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#1E293B] mb-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-[#1E293B]/70 mb-2">
                  {activity.description}
                </p>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-1.5 bg-[#1E293B] text-white rounded-md text-sm font-medium hover:bg-[#1E293B]/90 transition-colors">
                    {activity.actionLabel || "Handle"}
                  </button>
                  <div className="flex items-center gap-1 text-xs text-[#1E293B]/50">
                    <Clock className="w-3 h-3" />
                    <span>
                      {formatDistanceToNow(activity.timestamp, {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
