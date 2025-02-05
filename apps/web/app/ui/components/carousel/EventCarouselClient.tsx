"use client";
import React, { useEffect, useRef, useState } from "react";
import EventCard from "../EventCard";
import Link from "next/link";
import { Event } from "@/app/server/actions/constants";

export default function EventCarouselClient({ events }: { events: Event[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scArr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    // Start continuous scrolling
    const startScroll = () => {
      if (scArr.current) {
        scArr.current.scrollLeft +=window.innerWidth < 600 ? 3 : 6; // Adjust speed by modifying this value
        if (scArr.current.scrollLeft >= scArr.current.scrollWidth / 2) {
          // Reset scrolling to start for seamless looping
          scArr.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(startScroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(startScroll);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  

  return (
    <div className="mb-10 h-full w-[100vw] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold md:text-4xl pb-5 bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text font-[Satoshi Variable] md:mb-[5vh]">
        Events
      </h1>

		
      <div className="w-full h-full md:h-[517px] flex justify-start relative overflow-hidden">

			<div className="hidden lg:block h-[80%] w-[300px] absolute top-3 left-0 bg-gradient-to-r from-[#001926] to-[#F3F9FF00] z-20" />
			<div className="hidden lg:block h-[80%] w-[300px] absolute top-3 right-0 bg-gradient-to-l from-[#001926] to-[#F3F9FF00] z-20" />

        <div
          ref={scArr}
          className="h-full w-[100vw] flex gap-[28px] md:gap-[40px] overflow-x-hidden items-start snap-x snap-mandatory relative"
        >
          <div className="flex gap-[28px] md:gap-[40px]">
            {events.map((data:Event,index) => (
              <EventCard id={data.id}
							name={data.eventName}
							key={index}
							img={data.poster}
							isActive={true} />
            ))}
          </div>
          <div className="flex gap-[28px] md:gap-[40px]">
            {events.map((data:Event,index) => (
              <EventCard id={data.id}
							name={data.eventName}
							img={data.poster}
							key={index}
							isActive={true} />
            ))}
          </div>
        </div>
      </div>

      <Link href={"/events"}>
        <div className="px-4 py-1.5 mt-4 md:mt-0 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden">
          <div className="text-white text-sm font-bold font-['Satoshi Variable'] leading-normal">
            View Them All
          </div>
        </div>
      </Link>
    </div>
  );
}
