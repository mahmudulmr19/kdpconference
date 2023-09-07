import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="bg-white/90 backdrop-blur-md sticky top-0 z-50 w-full shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl block">
          <span className="text-orange-500">KDP</span> Conference
        </Link>

        <Button className="uppercase h-12 md:hidden">get your ticket</Button>

        <Button className="uppercase h-12 hidden md:block" size="lg">
          get your ticket
        </Button>
      </div>
    </div>
  );
}
