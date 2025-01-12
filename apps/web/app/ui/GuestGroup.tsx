'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import GuestLectureCard from './components/GuestLectureCard';
import './GuestLecture.css';
const Guestgroup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundImages = [
    '/GuestBackground/Green.png',
    '/GuestBackground/Blue.png',
  ];

  const cardsData = [
    {
      image: '/GuestLecturer/person1.jpg',
      name: 'John Doe',
      date: 'Jan 1, 2025',
      description: 'This is a short description of John Doe.',
      link: '/guest-lecture/john-doe',
    },
    {
      image: '/GuestLecturer/person5.jpg',
      name: 'Jane Smith',
      date: 'Feb 5, 2025',
      description: 'This is a short description of Jane Smith.',
      link: '/guest-lecture/jane-smith',
    },
    {
      image: '/GuestLecturer/person1.jpg',
      name: 'Alice Johnson',
      date: 'Mar 15, 2025',
      description: 'This is a short description of Alice Johnson.',
      link: '/guest-lecture/alice-johnson',
    },
    {
      image: '/GuestLecturer/person3.jpg',
      name: 'David Brown',
      date: 'Apr 10, 2025',
      description: 'This is a short description of David Brown.',
      link: '/guest-lecture/david-brown',
    },
    {
      image: '/GuestLecturer/person4.jpg',
      name: 'Eve Williams',
      date: 'May 20, 2025',
      description: 'This is a short description of Eve Williams.',
      link: '/guest-lecture/eve-williams',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % cardsData.length
    );
  };

  const visibleCards = [
    cardsData[(currentIndex - 1 + cardsData.length) % cardsData.length],
    cardsData[currentIndex],
    cardsData[(currentIndex + 1) % cardsData.length],
  ];

  return (
    <div className="py-10 relative w-full flex flex-col items-center bg-gray-500">
      {/* Previous Button */}
      <div
        onClick={handlePrev}
        className="guest-button-left absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition"
      >
        &lt;
      </div>

      {/* Cards Container */}
      <div className="relative flex gap-8 w-full justify-center items-center">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="guest-card-container relative transition-transform duration-500 ease-in-out"
            style={{
              width: '400px', // Keep this for larger screens
              height: '600px', // Keep this for larger screens
            }}
          >
            {card ? (
              <Link href={card.link}>
                <div>
                  <GuestLectureCard
                    image={card.image || 'https://via.placeholder.com/300x150'}
                    backGroundImage={
                      backgroundImages[index % backgroundImages.length] ||
                      './defaultBackground.png'
                    }
                    name={card.name || 'Default Name'}
                    date={card.date || 'Default Date'}
                    description={card.description || 'No description available'}
                  />
                </div>
              </Link>
            ) : (
              <div className="text-white text-center">Card data not available</div>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div
        onClick={handleNext}
        className="guest-button-right absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer px-4 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition"
      >
        &gt;
      </div>
    </div>
  );
};

export default Guestgroup;
