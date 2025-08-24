import { HeaderBar } from "@/components/dashboard/Header";
import { Sidebar, SidebarMobile } from "@/components/dashboard/Sidebar";
import { FooterBar, FloatingHelp } from "@/components/dashboard/FooterBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1200px] px-4">
        <HeaderBar />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div>
            <SidebarMobile />
            <Outlet />
          </div>
        </div>
      </div>
      <FooterBar />
      <FloatingHelp />
    </main>
  );
}
