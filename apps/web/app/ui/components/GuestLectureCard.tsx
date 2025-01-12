import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiFacebook } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

interface GuestLectureCardProps {
  backGroundImage: string;
  image: string;
  name: string;
  date: string;
  description: string;
}

const GuestLectureCard: React.FC<GuestLectureCardProps> = ({
  backGroundImage,
  image,
  name,
  date,
  description,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg">
      <div className="bg-blue rounded-2xl shadow-lg overflow-hidden border relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backGroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ filter: "brightness(0.7)" }} // Dim the background for readability
          />
        </div>
        <div className="relative">
          {/* Person Image */}
          <div className="w-full h-56 md:h-58 lg:h-60 relative">
            <Image
              src={image}
              alt="Person"
              layout="fill"
              objectFit="cover" // Adjust image to fill the container
              className="rounded-t-2xl"
            />
          </div>
        </div>
        <div className="p-6 rounded-b-2xl relative transition-all duration-500 ease-in-out bg-opacity-90">
          <div className="mb-4 flex items-start space-x-4">
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-white text-left">{name}</h2>
              <p className="text-sm text-white text-left">{date}</p>
            </div>
          </div>
          <p className="mt-4 text-white text-sm leading-relaxed text-left break-words">
            {description}
          </p>
          <div className="mt-2 flex justify-start space-x-4">
            <Link href="https://linkedin.com" passHref>
              <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                <IoLogoLinkedin size={25} style={{ color: 'white' }} />
              </div>
            </Link>
            <Link href="https://instagram.com" passHref>
              <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                <FaInstagram size={25} style={{ color: 'white' }} />
              </div>
            </Link>
            <Link href="https://facebook.com" passHref>
              <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                <CiFacebook size={25} style={{ color: 'white' }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestLectureCard;
