// import Link from "next/link";
import React from "react";
// import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header role="banner" className="relative min-h-[92vh]">
      <div className="bg-[url('/hero.jpg')] absolute top-0 bottom-0 left-0 right-0 bg-cover bg-fixed h-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-black/50" />

        <div className="container_section text-center relative z-10 h-full flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            KDP Conference 2023
          </h1>
          <p className="text-lg md:text-xl text-orange-500">
            Join us for a memorable event in 20th October 2023.
          </p>
          {/* <Link href="/checkout">
            <Button className="uppercase h-12 rounded-full" size="lg">
              get your ticket
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
