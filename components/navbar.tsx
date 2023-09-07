import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="bg-white/90 backdrop-blur-md sticky top-0 z-50 w-full shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl block">
          <span className="text-orange-500">KDP</span> Conference
        </Link>

        <Link
          href="/checkout"
          className={cn(
            buttonVariants(),
            "capitalize text-xs sm:text-sm rounded-full active:scale-95"
          )}
        >
          get your ticket
        </Link>
      </div>
    </div>
  );
}
