import React from "react";
import { Hero } from "@/components/hero";
import { AboutConference } from "@/components/about-conference";
import { ChiefGuest } from "@/components/chief-guest";
import { WhoSpeaking } from "@/components/who-speaking";
import { EventDate } from "@/components/event-date";
import { ConferenceSchedule } from "@/components/conference-schedule";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutConference />
      <ChiefGuest />
      <WhoSpeaking />
      <EventDate />
      <ConferenceSchedule />
    </main>
  );
}
