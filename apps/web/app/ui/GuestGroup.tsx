"use client";
import React, { useState, useEffect } from "react";
import GuestLectureCard from "./components/GuestLectureCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "./components/Carousel";

interface CardData {
	image?: string;
	name: string;
	date: string;
	description: string;
}

import "./GuestLecture.css";
const Guestgroup = ({ cardsData }: { cardsData: CardData[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// This will ensure the client-side logic only runs after the initial render
		setIsClient(true);
	}, []);

	const backgroundImages = [
		"/GuestBackground/Green.png",
		"/GuestBackground/Blue.png",
	];

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
	};

	const visibleCards = [
		cardsData[(currentIndex - 1 + cardsData.length) % cardsData.length],
		cardsData[currentIndex],
		cardsData[(currentIndex + 1) % cardsData.length],
	];

	return (
		<div className="relative flex flex-col items-center w-4/5 sm:h-auto gap-8 mx-auto">
			<h2 className="text-center text-5xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
				Guest Lectures
			</h2>

			{/* PREV BUTTON */}
			{/* <div
				onClick={handlePrev}
				className="m-4 absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-3 bg-gray-200 rounded-full hover:text-gray-700 duration-500 text-gray-400"
			>
				<FaChevronLeft className="text-3xl" />
			</div> */}

			{/* Cards Container */}
			{isClient && (
				<div className="relative flex gap-8 w-full justify-center items-center h-auto">
					<Carousel
						toScroll={false}
						delay={1500}
						css={`basis-${1/visibleCards.length}`}
					>
						{visibleCards.map((card, index) => (
							<div
								key={index}
								className="guest-card-container relative transition-transform duration-500 ease-in-out"
								style={{
									width: "420px",
									height: "530px",
								}}
							>
								{card ? (
									<GuestLectureCard
										image={
											card.image
												? card.image
												: "https://via.placeholder.com/300x150"
										}
										backGroundImage={
											backgroundImages[
												(currentIndex + index) % backgroundImages.length
											] || "/GuestBackground/Blue.png"
										}
										name={card.name || "Default Name"}
										date={card.date || "Default Date"}
										description={card.description || "No description available"}
									/>
								) : (
									<div className="text-white text-center">
										Card data not available
									</div>
								)}
							</div>
						))}
					</Carousel>
				</div>
			)}

			{/* NEXT BUTTON */}
			{/* <div
				onClick={handleNext}
				className="absolute -right-12 m-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-3 bg-gray-200 rounded-full hover:text-gray-700 duration-500 text-gray-400"
			>
				<FaChevronRight className="text-3xl" />
			</div> */}
		</div>
	);
};

export default Guestgroup;
