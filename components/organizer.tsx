import React from "react";
import logo from "./logo.svg";
import Image from "next/image";

export default function Organizer() {
  return (
    <section className="container mx-auto pb-[3rem!important]  text-center">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold  uppercase">
          Event <span className="text-orange-500">Organizer</span>
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          totam!
        </p>
      </div>

      <div className="mt-8 mx-auto w-80">
        <Image src={logo} alt="Learn With Rakib" width={320} height={160} />
      </div>
    </section>
  );
}
