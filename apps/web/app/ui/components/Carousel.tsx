"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselProps {
	children: React.ReactNode[]; // CarouselItem[]
	controls?: boolean; // To show or hide the next and previous buttons, default is false
	css?: string; // Basis for the carousel items, default is 2/5
	delay?: number; // Delay for autoplay, default is 1000
	toScroll?: boolean; // To scroll the carousel items, default is false
	speed?: number; // Speed for auto scroll, default is 1
}

export default function CarouselComponent({
	children,
	controls,
	css,
	delay,
	toScroll,
	speed,
}: CarouselProps) {
	if (!children) return null;
	if (!controls) controls = false;
	if (!toScroll) toScroll = true;
	return (
		<>
			<Carousel
				opts={{
					skipSnaps: true,
					loop: true,
				}}
				plugins={[
					toScroll
						? AutoScroll({ speed: speed || 1 })
						: Autoplay({ delay: delay || 1000 }),
				]}
			>
				<CarouselContent>
					{children.map((child, index) => {
						return (
							<CarouselItem key={index} className={`${css || "basis-1/4"}`}>
								{child}
							</CarouselItem>
						);
					})}
				</CarouselContent>
				{controls && <CarouselPrevious />}
				{controls && <CarouselNext />}
			</Carousel>
		</>
	);
}
