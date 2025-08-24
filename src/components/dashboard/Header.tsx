import { Button } from "@/components/ui/button";
import { Phone, LogOut } from "lucide-react";

export const HeaderBar = () => {
  return (
    <header className="mb-6 flex items-center justify-between">
      {/* <div className="text-xs text-muted-foreground hidden md:flex items-center gap-2">
        <Phone className="h-4 w-4" /> 1-(888)-329-7069
      </div> */}
      {/* <Button variant="pill" size="lg" className="ml-auto bg-primary text-white">
        <LogOut className="h-4 w-4" /> Logout
      </Button> */}
    </header>
  );
};

export const Welcome = () => {
  return (
    <section className="mb-4">
      {/* <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome, Yasmine Kavandi</h1> */}
    </section>
  );
};
