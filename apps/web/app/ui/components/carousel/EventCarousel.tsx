"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CarouselEventCard from "./CarousalEventCard";
import { EVENTS } from "@/app/constants/eventPage";
export default function StoriesCarousel() {
  const scArr = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const slideNext = (scroll: number) => {
    if (scrolls === EVENTS.length - 1) return;
    setScrolling(true);
    const elem = scArr.current;
    if (elem == null) return;
    elem.scrollTo({
      left: scroll * (scrolls + 1),
      behavior: "smooth",
    });
    setScrolls(scrolls + 1);
    setTimeout(() => setScrolling(false), 600);
  };

  const slidePrev = (scroll: number) => {
    if (scrolls === 0) return;
    setScrolling(true);
    const elem = scArr.current;
    if (elem == null) return;
    elem.scrollTo({
      left: scroll * (scrolls - 1),
      behavior: "smooth",
    });
    setScrolls(scrolls - 1);
    setTimeout(() => setScrolling(false), 600);
  };

  useEffect(() => {
    const scroll: number = window.innerWidth < 1024 ? 328 : 827; // Change this for responsiveness
    const interval = setInterval(() => {
      if (scrolling) return;
      if (scrolls === EVENTS.length - 1) {
        setScrolls(-1);
        slideNext(scroll);
      } else {
        slideNext(scroll);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [scrolls, scrolling]);

  return (
    <>
    <h1 className="text-3xl font-bold md:text-4xl pb-5 bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text font-[Satoshi Variable] md:mb-[5vh]">
        Events
      </h1>
    
    <div className="w-[100vw] h-full md:h-[507px] flex justify-start relative overflow-y-visible">

<div className="hidden lg:block h-[88%] w-[200px] absolute top-0 left-0 bg-gradient-to-r from-[#001926] to-[#F3F9FF00] z-20"  />
<div className="hidden lg:block h-[88%] w-[200px] absolute top-0 right-0 bg-gradient-to-l from-[#001926] to-[#F3F9FF00] z-20" />
      <div
        className="h-full w-full flex overflow-x-hidden overflow-visible md:pointer-events-none items-start snap-x snap-mandatory relative"
        ref={scArr}
      >
        <div className="flex gap-[28px] md:gap-[76.8px] mx-[15%] md:mx-[25%] overflow-y-visible">
          {EVENTS.map((data, index) => (
            <CarouselEventCard  key={index} id={data.id} name={data.name} isActive={true} img={data.img} />
          ))}
        </div>
      </div>
      
    </div>
    <Link href={"/events"}>
				<div className="px-4 py-1.5 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden">
					<div className="text-white text-sm font-bold font-['Satoshi Variable'] leading-normal">
						View Them All
					</div>
				</div>
			</Link>
    </>
  );
}