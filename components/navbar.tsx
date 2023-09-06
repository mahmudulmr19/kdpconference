import React from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="bg-white/90 backdrop-blur-md sticky top-0 z-50 w-full shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="font-bold text-lg">
          <span className="text-orange-500">KDP</span> Conf
        </div>

        <Button className="uppercase h-12" size="lg">
          get your ticket
        </Button>
      </div>
    </div>
  );
}
