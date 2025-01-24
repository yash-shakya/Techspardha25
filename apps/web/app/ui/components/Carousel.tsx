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
	controls = false,
	css = "basis-2/5", // Default value
	delay = 1000, // Default delay for autoplay
	toScroll = true, // Default to true
	speed = 1, // Default speed for autoplay
  }: CarouselProps) {
	if (!children || children.length === 0) return null;
  
	return (
	  <>
		<Carousel
		  opts={{
			skipSnaps: true,
			loop: true,
		  }}
		  plugins={[
			toScroll ? AutoScroll({ speed }) : Autoplay({ delay }),
		  ]}
		>
		  <CarouselContent>
			{children.map((child, index) => (
			  <CarouselItem key={index} className={css}>
				{child}
			  </CarouselItem>
			))}
		  </CarouselContent>
		  {controls && <CarouselPrevious />}
		  {controls && <CarouselNext />}
		</Carousel>
	  </>
	);
  }
  