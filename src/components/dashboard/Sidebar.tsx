import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { HelpCircle, UploadCloud, Gift, MessageSquare, User, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const NavItem = ({ label, to }: { label: string; to: string }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          buttonVariants({ variant: "pill", size: "sm" }),
          "w-full justify-start",
          isActive && ""
        )
      }
    >
      {label}
    </NavLink>
  );
};

export const Sidebar = memo(function Sidebar() {
  return (
    <aside className="hidden lg:flex w-[280px] shrink-0">
      <div className="sticky top-6 h-fit w-full rounded-xl border bg-card p-5 shadow-sm">
        {/* Logo + phone */}
        <div className="mb-5 w-full text-center">
          <img
            src="/lovable-uploads/7045dbb5-9e5d-419a-a4d4-7bed82dd0940.png"
            alt="Go To Traffic School Online logo"
            className="mx-auto h-16 w-auto object-contain md:h-20"
            loading="eager"
          />
        </div>
        <div className="mx-auto mb-5 flex flex-col items-center">
          <div className="rounded-full border-[20px]" style={{ borderColor: "#E7F4FF" }}>
            <div className="h-24 w-24 overflow-hidden rounded-full">
              <img
                src="/lovable-uploads/a250631b-1b67-42b9-9016-900f11989b3a.png"
                alt="Profile photo"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          {/* <div className="mt-3 text-sm text-muted-foreground">Profile</div> */}
        </div>
        <nav className="space-y-2">
          <NavItem label="My Dashboard" to="/" />
          <NavItem label="My Profile" to="/profile" />
          <NavItem label="Contact Support" to="/support" />
          <NavItem label="Referral Program" to="/referral" />
          <NavItem label="Upgrades" to="/upgrades" />
          <NavItem label="Upload" to="/upload" />
        </nav>
        <Separator className="my-6" />
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <HelpCircle className="h-4 w-4" />
          Help and feedback
        </div>
      </div>
    </aside>
  );
});

export const SidebarMobile = memo(function SidebarMobile() {
  return (
    <aside className="lg:hidden -mx-4 mb-4">
      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full border border-border">
            <img src="/lovable-uploads/a250631b-1b67-42b9-9016-900f11989b3a.png" alt="Profile photo" className="h-full w-full object-cover" loading="eager" />
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">Welcome</div>
            <div className="text-xs text-muted-foreground">Your dashboard</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <NavLink to="/" end className={({ isActive }) => cn(buttonVariants({ variant: "pill", size: "sm" }), "justify-start", isActive && "bg-secondary")}><LayoutDashboard className="h-4 w-4"/>Dashboard</NavLink>
          <NavLink to="/profile" end className={({ isActive }) => cn(buttonVariants({ variant: "pill", size: "sm" }), "justify-start", isActive && "bg-secondary")}><User className="h-4 w-4"/>Profile</NavLink>
          <NavLink to="/support" end className={({ isActive }) => cn(buttonVariants({ variant: "pill", size: "sm" }), "justify-start", isActive && "bg-secondary")}><MessageSquare className="h-4 w-4"/>Support</NavLink>
          <NavLink to="/referral" end className={({ isActive }) => cn(buttonVariants({ variant: "pill", size: "sm" }), "justify-start", isActive && "bg-secondary")}><Gift className="h-4 w-4"/>Referral</NavLink>
          <NavLink to="/upload" end className={({ isActive }) => cn(buttonVariants({ variant: "pill", size: "sm" }), "justify-start", isActive && "bg-secondary")}><UploadCloud className="h-4 w-4"/>Upload</NavLink>
        </div>
      </div>
    </aside>
  );
});
