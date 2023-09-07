import React from "react";

export function AboutConference() {
  return (
    <section className="container_section py-[5rem!important] space-y-10">
      <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl uppercase">
        About <span className="text-orange-500">This</span> Conference
      </h1>

      <div className="flex flex-col md:flex-row md:items-center w-full gap-y-4 md:gap-x-4 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-10">
        <iframe
          className="aspect-video w-full rounded"
          src="https://www.youtube.com/embed/60ItHLz5WEA?si=_9U6aGRY9PQ2gtPz"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <div className="w-full space-y-4">
          <div className="space-y-2">
            <h2 className="uppercase text-lg sm:text-xl font-semibold">
              Program <span className="text-orange-500">intro</span>
            </h2>
            <div className="py-[2px] bg-orange-500 max-w-[4rem]" />
            <h3 className="sm:text-lg font-semibold">19th August, 2023</h3>
          </div>

          <div className="text-sm text-black space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit optio recusandae amet odio porro nemo maxime ut
              perspiciatis mollitia eum a assumenda, nesciunt ad. Tenetur quos
              explicabo doloribus quidem minus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nulla eum esse deserunt iure molestias!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quod est ducimus explicabo distinctio atque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
