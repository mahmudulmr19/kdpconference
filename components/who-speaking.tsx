import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const speakerdata = [
  {
    name: "Md Mohsin",
    image: "https://i.ibb.co/TTGc23J/moshin.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "found of N/A",
  },
  {
    name: "R.I Woazed",
    image: "https://i.ibb.co/dQ85wWH/woa-zed.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "found of Woazed Graphics",
  },
  {
    name: "Md Shohagh Hossen",
    image: "https://i.ibb.co/py8MDWB/Md-Shohagh-Hossen.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "found of Learn With Shohagh & Merch Bundle",
  },
  {
    name: "Nirnoy Nirob",
    image: "https://i.ibb.co/PmHh1y0/Nirnoy-Nirob.jpg",
    ocupation: "Author on Amazon KDP",
    founder: "founder of Graphics Tech 360",
  },
];

export function WhoSpeaking() {
  return (
    <div className="container_section mb-8">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl uppercase">
        <span className="text-orange-500">Who</span> Speaking?
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {speakerdata.map((speaker) => (
          <Card
            key={speaker.name}
            className="p-2 w-full rounded cursor-pointer"
          >
            <div className="h-72 relative group overflow-hidden">
              <Image
                className="h-72 rounded"
                src={speaker.image}
                alt={speaker.name}
                fill
              />

              <div className="absolute top-full left-0 group-hover:top-0 transition-all duration-300 w-full h-full bg-orange-500/80" />
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
