import React from "react";

export function AboutConference() {
  return (
    <section className="container_section py-[5rem!important] space-y-10">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl ">
        About <span className="text-orange-500">This</span> Conference
      </h1>

      <div className="flex flex-col md:flex-row w-full gap-y-4 md:gap-x-4">
        <iframe
          className="aspect-video w-full rounded"
          src="https://www.youtube.com/embed/60ItHLz5WEA?si=_9U6aGRY9PQ2gtPz"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <div className="w-full"></div>
      </div>
    </section>
  );
}
