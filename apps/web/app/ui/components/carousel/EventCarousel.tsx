import React, { useState, useEffect } from "react";
import Link from "next/link";
import CarouselEventCard from "./CarousalEventCard";
import { EVENTS } from "@/app/constants/eventPage";

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === EVENTS.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNext();
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl pb-5 bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text font-[Satoshi Variable] md:mb-[2vh]">
        Events
      </h1>

      <div className="relative flex justify-center items-center w-[100vw] md:h-[507px]">
        <div className="hidden lg:block h-[86%] w-[300px] absolute top-9 left-0 bg-gradient-to-r from-[#001926] to-[#F3F9FF00] z-20" />
        <div className="hidden lg:block h-[86%] w-[300px] absolute top-9 right-0 bg-gradient-to-l from-[#001926] to-[#F3F9FF00] z-20" />

        <div className="flex items-center justify-center gap-6 relative w-full">
          <div
            className="opacity-70 transition-opacity md:duration-[8000] duration-500"
            style={{ zIndex: 1 }}
          >
            <CarouselEventCard
              id={EVENTS[(currentIndex - 1 + EVENTS.length) % EVENTS.length]?.id}
              name={EVENTS[(currentIndex - 1 + EVENTS.length) % EVENTS.length]?.name || "Default Name"}
              isActive={false}
              img={EVENTS[(currentIndex - 1 + EVENTS.length) % EVENTS.length]?.img || "default-image.jpg"}
            />
          </div>

          <div
            className="mx-4 transition-all scale-105 md:duration-[8000] duration-500"
            style={{ zIndex: 2 }}
          >
            <CarouselEventCard
              id={EVENTS[currentIndex]?.id}
              name={EVENTS[currentIndex]?.name || "Default Name"}
              isActive={true}
              img={EVENTS[currentIndex]?.img || "default-image.jpg"}
            />
          </div>

          <div
            className="opacity-70 transition-opacity md:duration-[8000] duration-500"
            style={{ zIndex: 1 }}
          >
            <CarouselEventCard
              id={EVENTS[(currentIndex + 1) % EVENTS.length]?.id}
              name={EVENTS[(currentIndex + 1) % EVENTS.length]?.name || "Default Name"}
              isActive={false}
              img={EVENTS[(currentIndex + 1) % EVENTS.length]?.img || "default-image.jpg"}
            />
          </div>
        </div>
      </div>

      <Link href={"/events"}>
        <div className="px-4 py-1.5 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden mt-5">
          <div className="text-white text-sm font-bold font-['Satoshi Variable'] leading-normal">
            View Them All
          </div>
        </div>
      </Link>
    </>
  );
}
