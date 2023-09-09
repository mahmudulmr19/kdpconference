import React from "react";
import scheduleImage from "./Event-Schedule.jpg";
import Image from "next/image";
export function ConferenceSchedule() {
  return (
    <section>
      <div className="container_section">
        <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl uppercase">
          Event <span className="text-orange-500">Schedule</span>
        </h1>

        <Image src={scheduleImage} alt="schedule event" className="my-10" />
      </div>
    </section>
  );
}
