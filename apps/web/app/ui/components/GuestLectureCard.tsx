import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from 'react';
interface GuestLectureCardProps {
  backGroundImage: string;
  image: string;
  name: string;
  date: string;
  description: string;
}

interface ExpandableDescriptionProps {
  description: string; // Explicitly define the type of description
}

const ExpandableDescription: React.FC<ExpandableDescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Description text */}
      <p
        className={`${
          isExpanded ? "max-h-none" : "max-h-40 overflow-hidden line-clamp-1"
        } sm:max-h-none sm:overflow-visible sm:line-clamp-none`}
      >
        {description}
      </p>

      {/* Show '...' and toggle button only on small screens */}
      {!isExpanded && (
        <button
          onClick={toggleExpand}
          className="text-blue-500 underline sm:hidden"
        >
          ... Read more
        </button>
      )}

      {/* Collapse button */}
      {isExpanded && (
        <button
          onClick={toggleExpand}
          className="text-blue-500 underline sm:hidden"
        >
          Show less
        </button>
      )}
    </div>
  );
};



const GuestLectureCard: React.FC<GuestLectureCardProps> = ({
  backGroundImage,
  image,
  name,
  date,
  description,
}) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
      <div className="bg-blue rounded-2xl shadow-lg overflow-hidden border relative">

        {/* Link to the guest lecture page*/}
      <Link href="/guest-lecture/john-doe" passHref>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backGroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ filter: "brightness(0.7)" }} 
          />
        </div>
        <div className="relative">
          

          {/* Person Image */}
          <div className="w-full h-40 sm:h-48 md:h-54 lg:h-60 relative overflow-hidden">
            <Image
              src={image}
              alt="Person"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl h-64"
            />
          </div>
        </div>
      </ Link>


        <div className="p-3 rounded-b-2xl relative transition-all duration-500 ease-in-out bg-opacity-90">
          <div className="mb-4 flex items-start space-x-4">
            <div className="flex flex-col">
              <h2 className="text-md font-bold text-white text-left">{name}</h2>
              <p className="text-sm text-white text-left">{date}</p>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-1 text-white text-xs leading-relaxed text-left break-words">
             <ExpandableDescription description={description} />
          </div>

          {/* Social Media Links */}
          <div className="mt-2 flex justify-start space-x-4">
            <Link href="https://linkedin.com" passHref>
              <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                <IoLogoLinkedin size={25} style={{ color: 'white' }} />
              </div>
            </Link>
            <Link href="https://instagram.com" passHref>
              <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                <AiFillInstagram size={25} style={{ color: 'white' }} />
              </div>
            </Link>
            <Link href="https://facebook.com" passHref>
              <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                <FaFacebook size={25} style={{ color: 'white' }} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default GuestLectureCard;
