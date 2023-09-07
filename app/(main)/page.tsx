import React from "react";
import { Hero } from "@/components/hero";
import { AboutConference } from "@/components/about-conference";
import { ChiefGuest } from "@/components/chief-guest";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutConference />
      <ChiefGuest />
    </main>
  );
}
