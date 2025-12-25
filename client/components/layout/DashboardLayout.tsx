import { ReactNode } from "react";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom right, #f3f8f4 0%, #f8fbfa 50%, #f3f8f4 100%)",
      }}
    >
      <Header />
      <main className="p-8 w-full mr-10">{children}</main>
    </div>
  );
}
