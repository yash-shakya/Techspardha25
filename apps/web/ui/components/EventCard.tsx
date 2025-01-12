'use client';
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./eventcard.css";

// const Swiper = dynamic(() => import("swiper/react"), { ssr: false });
// const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });

const Swiper: React.ComponentType = dynamic(() => import("swiper/react"), { ssr: false });
const SwiperSlide: React.ComponentType = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);


import { Pagination, Autoplay } from "swiper/modules";

interface EventContent {
  name: string;
  img: string;
  
}

const eventData: EventContent[] = [
  {
    name: `Black Box`,
    img: `BlackBox.jpg`,
   
  },
  {
    name: `Black Box`,
    img: `BlackBox.jpg`,
  },
  {
    name: `Black Box`,
    img: `BlackBox.jpg`,
  },
  {
    name: `Black Box`,
    img: `BlackBox.jpg`,
  },
  {
    name: `Black Box`,
    img: `BlackBox.jpg`,
  },
  // ...other team members
];

const EventCard: React.FC = () => {
  return (
    <div id="event" className="event-section mb-12 w-11/12 md:px-12 mx-auto py-12">
      <div className="text-center mb-8">
      </div>

      <div className="slider-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            1024: { slidesPerView: 3 },
            724: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
          }}
        >
          {eventData.map((member) => (
            <SwiperSlide key={member.name}>
              <EventItem member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

interface EventItemProps {
  member: EventContent;
}

const EventItem: React.FC<EventItemProps> = ({ member }) => {
  return (
    <div className="event-card flex flex-col justify-center items-center rounded-lg bg-gradient-to-t from-black to-zinc-800 transition-all duration-300 hover:scale-95 hover:shadow-lg">
      <div className="event-image-container mb-4 flex items-center justify-center">
        <Image
          className="event-image rounded-lg object-cover"
          src={`/eventItem/${member.img}`}
          alt={member.name}
          width={200}
          height={200}
        />
      </div>
      <div className="event-info text-center">
        <h3 className="event-name text-xl font-bold truncate">{member.name}</h3>
      </div>
    </div>
  );
};

export default EventCard;