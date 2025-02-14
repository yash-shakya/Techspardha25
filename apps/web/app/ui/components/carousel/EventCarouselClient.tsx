"use client";
import React, { useEffect, useRef, useState } from "react";
import EventCard from "../EventCard";
import Link from "next/link";
import EventCategoryCard from "../EventCategoryCard";

type EventCategory = {
	name: string;
	img: string;
};

type EventCarouselClientProps = {
	eventCategory: EventCategory[];
};

export default function EventCarouselClient({
	eventCategory,
}: EventCarouselClientProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const scArr = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let animationFrameId: number;

		// Start continuous scrolling
		const startScroll = () => {
			if (scArr.current) {
				scArr.current.scrollLeft += window.innerWidth < 600 ? 1 : 2; // Adjust speed by modifying this value
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
		<div className="mb-10 h-full w-[100vw] flex flex-col items-center justify-center relative">
			<h1 className="text-center text-5xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
				Events
			</h1>

			{/* <div className="w-full md:h-[517px] flex justify-start relative overflow-hidden"> */}
			<div className=" sm:h-full h-[200px] lg:w-[400px] w-12 absolute max-sm:top-16 left-0 bg-gradient-to-r from-[#001926] to-[#F3F9FF00] z-20" />
			<div className=" sm:h-full h-[200px] lg:w-[400px] w-12 absolute max-sm:top-16 right-0 bg-gradient-to-l from-[#001926] to-[#F3F9FF00] z-20" />

			<div
				ref={scArr}
				className="py-14 pb-16 w-[100vw] flex gap-[28px] md:gap-[40px] overflow-x-hidden items-start snap-x snap-mandatory relative"
			>
				<div className="flex gap-[28px] md:gap-[40px]">
					{eventCategory.map((data: EventCategory, index) => (
						<EventCategoryCard name={data.name} img={data.img} key={index} />
					))}
					{/* </div> */}
					{/* <div className="flex gap-[28px] md:gap-[40px]"> */}
					{eventCategory.map((data: EventCategory, index) => (
						<EventCategoryCard name={data.name} img={data.img} key={index} />
					))}
				</div>
				{/* </div> */}
			</div>

			<Link href={"/events"}>
				<div className="px-4 py-1.5 md:mt-0 bg-white/10 rounded-[32px] border border-white/10 justify-start items-center gap-2.5 inline-flex overflow-hidden">
					<div className="text-white text-sm font-bold font-['Satoshi Variable'] leading-normal">
						View Them All
					</div>
				</div>
			</Link>
		</div>
	);
}
