import React from "react";
import tanvirimage from "@/assets/tanbir.png";
import Image from "next/image";
export function ChiefGuest() {
  return (
    <section className="container_section py-[5rem!important] space-y-10">
      <div className="flex flex-col md:flex-row md:items-center w-full gap-y-4 md:gap-x-4 lg:gap-x-8 xl:gap-x-10 2xl:gap-x-10 justify-between">
        <div className="text-start w-full">
          <div className="space-y-2 mb-4">
            <h5 className="text-xl md:text-2xl font-semibold ">
              OUR HONORABLE <span className="text-orange-500">CHIEF GUEST</span>
            </h5>
            <h4 className="text-2xl md:text-3xl font-bold uppercase">
              Tanbir Hossain
            </h4>
            <div className="py-[2px] bg-orange-500 max-w-[4rem]" />
          </div>

          <div className="space-y-5 mt-3">
            <p>The Leader of Youths</p>
            <p className="text-sm">
              Tanbir Asharafi, a renowned youth leader and entrepreneur from
              North Bengal and Rangpur, Bangladesh, is a dynamic force in
              various domains, including social, political, cultural, and
              religious activities. In 2019, he received the prestigious
              Sher-e-Bangla Award for his exceptional organizational skills and
              contributions to development, a testament to his dedication to the
              region&apos;s progress.
            </p>
            <p className="text-sm">
              His commitment to community welfare and global values led to the
              Justice SM Morshed Gold Award in 2019 and the Nelson Mandela Award
              for his impactful service and promotion of universal ideals. Amid
              the challenges of the COVID-19 pandemic, he was recognized with
              the Business Award in 2020 for his outstanding leadership. Tanbir
              Asharafi&apos;s influence and dedication continue to inspire
              positive change, making him a highly respected figure in North
              Bengal and beyond.
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            className="w-full rounded"
            src={tanvirimage}
            alt="that wkieuhi"
          />
        </div>
      </div>
    </section>
  );
}
