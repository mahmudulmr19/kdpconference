import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const speakerdata = [
  {
    name: "R.I Woazed",
    image: "https://i.ibb.co/6r4MJPs/wozed-vai-m.jpg",
    ocupation: "Author on Amazon KDP",
  },
  {
    name: "Md Shohagh Hossen",
    image: "https://i.ibb.co/r0zxTfx/Shohag-Vaiya-m.jpg",
    ocupation: "Designer",
  },
  {
    name: "Nirnoy Nirob",
    image: "/nirnoy-nirob.jpg",
    ocupation: "Author on Amazon KDP",
  },
  {
    name: "Al-Amin Islam",
    image: "https://i.ibb.co/gmSHWFr/02-Speakers-Mockup.png",
    ocupation: "Author on Amazon KDP",
  },
  {
    name: "Md Hussain Ahmad",
    image: "https://i.ibb.co/7KKQSYY/Spekar-Hussain-Vai.jpg",
    ocupation: "Author on Amazon KDP",
  },
  {
    name: "Md Rakib Ahmed",
    image: "https://i.ibb.co/B6k5JHZ/02-Speakers-Mockup.jpg",
    ocupation: "Author on Amazon KDP",
  },
  {
    name: "Shariful Islam",
    image: "/shariful-islam.jpg",
    ocupation: "Author on Amazon KDP",
  },
  {
    name: "Rafsan Jani",
    image: "/rafsan-jani.jpg",
    ocupation: "Software Engineer at MarioSoft",
  },
  {
    name: "Aminul Islam",
    image: "/aminul-islam.jpg",
    ocupation: "Designer",
  },
];

export function WhoSpeaking() {
  return (
    <div className="container_section mb-8">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl uppercase">
        <span className="text-orange-500">Our</span> Speaker and Guest
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {speakerdata.map((speaker) => (
          <Card
            key={speaker.name}
            className="p-2 w-full rounded cursor-pointer"
          >
            <div className="relative overflow-hidden w-full">
              <Image
                className="rounded w-full h-auto"
                src={speaker.image}
                alt={speaker.name}
                width={400}
                height={400}
              />
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
