"use client";
import React, { useEffect, useRef, useState } from "react";
import { wallcardData } from "@/app/constants/landingpage";
import WallCard from "../WallCard";
import Link from "next/link";

export default function WallCardCarousal() {
  const scArr = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);

  const slideNext = () => {
    if (scrolling) return;

    setScrolling(true);
    if (scArr.current) {
      const cardWidth = window.innerWidth < 1024 ? 280 : 2500;
      const totalCards = wallcardData.length;
      const maxScrolls = Math.floor(totalCards / 4);

      // Looping logic for next slide
      if (scrolls < maxScrolls) {
        scArr.current.scrollBy({
          left: cardWidth,
          behavior: "smooth",
        });
        setScrolls((prev) => prev + 1);
      } else {
        scArr.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setScrolls(0); // Reset to start for looping
      }
    }
    setTimeout(() => setScrolling(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrolling) return;

      slideNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [scrolls, scrolling]);

  return (
    <>
      <h1 className="text-5xl font-bold text-center text-transparent mb-6 bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text font-[Satoshi Variable]">
        Wall of 2k25
      </h1>
      <div className="w-full h-full md:h-[517px] flex justify-start relative overflow-hidden">


        <div
          ref={scArr}
          className="h-full w-[100vw] flex overflow-x-hidden md:pointer-events-none items-start snap-x snap-mandatory relative"
        >
          <div className="flex gap-[28px] md:gap-[76.8px] ">
            {wallcardData.map((data) => (
              <WallCard key={data.id} {...data} />
            ))}
          </div>
        </div>
    
      </div>
    </>
  );
}
