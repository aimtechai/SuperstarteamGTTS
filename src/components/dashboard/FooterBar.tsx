import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FooterBar = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-4 py-3 text-center text-base">
        Copyright © {year} CyberActive Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export const FloatingHelp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        variant="pillPrimary"
        size="icon"
        aria-label="Help and support"
        title="Help and support"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </div>
  );
};
