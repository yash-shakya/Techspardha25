import React, { ReactNode } from "react";
import "./carousel.css";
import { CarouselItem } from "./CarouselItem";

interface CarouselProps {
	children: ReactNode[];
}

export default function Carousel({ children }: CarouselProps) {
	return (
		<>
			<div className="carousel-container">
				<div className="carousel-track">
					{children.map((child, index) => {
						return <CarouselItem key={index}>{child}</CarouselItem>;
					})}
				</div>
			</div>
		</>
	);
}
