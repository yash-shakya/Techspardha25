"use client";
import React, { useState, useEffect } from "react";
import GuestLectureCard from "./components/GuestLectureCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

			<div
				onClick={handlePrev}
				className="guest-button-left m-4 absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition"
			>
				<FaChevronLeft />
			</div>

			{/* Cards Container */}
			{isClient && (
				<div className="relative flex gap-8 w-full justify-center items-center h-auto">
					{visibleCards.map((card, index) => (
						<div
							key={index}
							className="guest-card-container relative transition-transform duration-500 ease-in-out"
							style={{
								width: "450px",
								height: "530px",
							}}
						>
							{card ? (
								<div>
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
								</div>
							) : (
								<div className="text-white text-center">
									Card data not available
								</div>
							)}
						</div>
					))}
				</div>
			)}

			<div
				onClick={handleNext}
				className="guest-button-right absolute -right-12 m-4 top-1/2 transform -translate-y-1/2 cursor-pointer px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition"
			>
				<FaChevronRight />
			</div>
		</div>
	);
};

export default Guestgroup;
