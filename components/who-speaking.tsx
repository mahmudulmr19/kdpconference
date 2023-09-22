import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const speakerdata = [
  {
    name: "R.I Woazed",
    image: "https://i.ibb.co/6r4MJPs/wozed-vai-m.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "Ministed Night",
  },
  {
    name: "Md Shohagh Hossen",
    image: "https://i.ibb.co/r0zxTfx/Shohag-Vaiya-m.jpg",
    ocupation: "Designer",
    founder: "Learn With Shohagh & Merch Bundle",
  },
  {
    name: "Nirnoy Nirob",
    image: "https://i.ibb.co/nRwsG5Z/Mockup-Nirob-Vai.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "Graphics Tech 360",
  },
  {
    name: "Al-Amin Islam",
    image: "https://i.ibb.co/jhfYMWD/Alamin-vai-m.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "CEO at Webla Solutions",
  },
  {
    name: "Md Hussain Ahmad",
    image: "https://i.ibb.co/7KKQSYY/Spekar-Hussain-Vai.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "Amazon KDP Community BD",
  },
  {
    name: "Md Rakib Ahmed",
    image: "https://i.ibb.co/B6k5JHZ/02-Speakers-Mockup.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "Learn With Rakib",
  },
];

export function WhoSpeaking() {
  return (
    <div className="container_section mb-8">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl uppercase">
        <span className="text-orange-500">Who</span> Speaking?
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {speakerdata.map((speaker) => (
          <Card
            key={speaker.name}
            className="p-2 w-full rounded cursor-pointer"
          >
            <div className="relative group overflow-hidden w-full">
              <Image
                className="rounded w-full h-auto"
                src={speaker.image}
                alt={speaker.name}
                width={400}
                height={400}
              />

              <div className="absolute top-full left-0 group-hover:top-0 transition-all duration-300 w-full h-full bg-orange-500/80">
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="font-bold text-white text-lg">
                    {speaker.founder.startsWith("CEO")
                      ? "CEO at"
                      : "Founder of"}
                  </h3>
                  <p className="text-white text-center">
                    {speaker.founder.startsWith("CEO at")
                      ? speaker.founder.replace("CEO at", "")
                      : speaker.founder}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-2">
              <h2 className="text-lg hover:text-orange-500 transition">
                {speaker.name}
              </h2>
              <p className="text-sm">{speaker.ocupation}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
