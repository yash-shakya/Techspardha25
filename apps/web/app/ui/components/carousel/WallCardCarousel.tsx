"use client";
import React, { useEffect, useRef } from "react";
import { wallcardData } from "@/app/constants/landingpage";
import WallCard from "../WallCard";

export default function WallCardCarousal() {
	const scArr = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let animationFrameId: number;

		// Start continuous scrolling
		const startScroll = () => {
			if (scArr.current) {
				scArr.current.scrollLeft += 1; // Adjust speed by modifying this value
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
		<>
			<h1 className="text-5xl font-bold text-center text-transparent mb-6 bg-gradient-to-b from-[#FDFDFD] to-[rgba(250, 250, 250, .1)] text-transparent bg-clip-text font-[Satoshi Variable]">
				Wall of 2k25
			</h1>
			<div className="w-full h-full md:h-[517px] flex justify-start relative overflow-hidden">
				<div
					ref={scArr}
					className="h-full w-[100vw] flex gap-[28px] md:gap-[76.8px] overflow-x-hidden items-start snap-x snap-mandatory relative"
				>
					<div className="flex gap-[28px] md:gap-[76.8px]">
						{wallcardData.map((data) => (
							<WallCard key={data.id} {...data} />
						))}
					</div>
					{/* Duplicate content for seamless looping */}
					<div className="flex gap-[28px] md:gap-[76.8px]">
						{wallcardData.map((data) => (
							<WallCard key={data.id} {...data} />
						))}
					</div>
				</div>
			</div>
		</>
	);
}
