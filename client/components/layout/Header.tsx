"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HelpCircle, Settings, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Menu", href: "/menu" },
  { name: "Order", href: "/order" },
  { name: "Tables", href: "/tables" },
  { name: "VIP Rooms", href: "/vip-rooms" },
  { name: "Sales", href: "/sales" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6B4A] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-[#1E293B]">RePOS</span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-white rounded-4xl p-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-4xl text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#4f4f4f] text-white"
                      : "text-[#1E293B] hover:bg-[#F8FAFC]"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Help */}
            <button
              className="p-2 text-[#1E293B] hover:bg-[#F8FAFC] rounded-md transition-colors"
              aria-label="Help"
            >
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* Settings */}
            <button
              className="p-2 text-[#1E293B] hover:bg-[#F8FAFC] rounded-md transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="relative p-2 text-[#1E293B] hover:bg-[#F8FAFC] rounded-md transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B4A] rounded-full"></span>
            </button>

            {/* User */}
            <button
              className="flex items-center gap-2 px-3 py-2 text-[#1E293B] hover:bg-[#F8FAFC] rounded-md transition-colors"
              aria-label="User menu"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                Admin
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
