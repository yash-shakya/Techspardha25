"use client";
import { useState, useEffect } from "react";
import EventCard from "./components/EventCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

interface EventsGroupProp {
	id: string;
	name: string;
	img: string;
}

interface EventsGroupProps {
	eventData: EventsGroupProp[];
}

export default function EventsGroup({ eventData }: EventsGroupProps) {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const prevSlide = (): void => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + eventData.length) % eventData.length
		);
	};

	const nextSlide = (): void => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % eventData.length);
	};

	const handleMouseOver = (): void => {
		setIsHovered(true);
	};

	const handleMouseLeave = (): void => {
		setIsHovered(false);
	};

	useEffect(() => {
		if (!isHovered) {
			const interval = setInterval(() => {
				nextSlide();
			}, 2000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [isHovered]);

	return (
		<div className="w-full mx-auto flex flex-col">
            <h2 className="p-4 text-center text-5xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
				Events
			</h2>
			<div className="flex items-center flex-grow sm-p-8 p-4 justify-center">
				<button className="sm:mx-8 mr-4 " onClick={prevSlide}>
					<FaChevronLeft className="text-gray-400 group-hover:text-white text-3xl" />
				</button>
				<div
					className="h-fit-content w-full sm:w-3/5 flex items-center justify-center "
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}
				>
					{eventData[currentIndex] && (
						<Link href={`events/${eventData[currentIndex].id}`}>
							<EventCard
								name={eventData[currentIndex].name}
								img={eventData[currentIndex].img}
								isActive={true}
							/>
						</Link>
					)}
				</div>
				<button className="sm:mx-8 ml-4 " onClick={nextSlide}>
					<FaChevronRight className="text-gray-400 group-hover:text-white text-3xl" />
				</button>
			</div>
            {/* MAY COMMENT THIS COMPONENT */}
			<div className="flex justify-center p-5">
				{eventData.map((_, index) => (
					<div
						key={index}
						className={`h-1 w-10 mx-1 ${
							index === currentIndex
								? "bg-gray-600 rounded-xl shadow-[0px_0px_2px_0px_#ffffff]"
								: "bg-gray-300 rounded-xl"
						} transition-all duration-500 ease-in-out`}
					></div>
				))}
			</div>
            {/* ########################## */}
            <Link
                href={`/events`}
                className="font-extralight shadow-sm mx-auto w-fit px-3 py-1 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] rounded-2xl m-5"
            >
                View Them All
            </Link>
		</div>
	);
}
