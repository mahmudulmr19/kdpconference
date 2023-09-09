import React from "react";

export function AboutConference() {
  return (
    <section className="bg-gray-50">
      <div className="container_section py-[5rem!important] space-y-10">
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
              <h3 className="sm:text-lg font-semibold">20th October, 2023</h3>
            </div>

            <div className="text-sm text-black space-y-2">
              <p>
                Welcome to the{" "}
                <strong>First KDP Conference 2023 in Bangladesh</strong>, an
                exclusive event for <strong>KDP authors</strong>. This day is
                all about boosting your <strong>self-publishing journey</strong>
                , connecting with <strong>fellow authors</strong>, and gaining
                insights from experts in the field.
              </p>
              <p>
                Join us to learn from <strong>top-notch speakers</strong>,
                collaborate with like-minded authors, and hear inspiring success
                stories. Discover <strong>valuable information&apos;s</strong>{" "}
                and tailor-made <strong>marketing strategies</strong> to enhance
                your career. Don&apos;t miss this opportunity for a day of
                growth and inspiration – save the date for the{" "}
                <strong>KDP Conference 2023!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
