import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { LuExternalLink } from "react-icons/lu";

interface GuestLectureCardProps {
  backGroundImage: string;
  image: string;
  name: string;
  date: string;
  description: string;
  facebook?: string;
  insta?: string;
  linkedin?: string;
  link?: string;
}

const ExpandableDescription: React.FC<{ description: string }> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxLength, setMaxLength] = useState(130);

  useEffect(() => {
    const updateMaxLength = () => {
      setMaxLength(window.innerWidth < 640 ? 130 : 200);
    };

    updateMaxLength();
    window.addEventListener("resize", updateMaxLength);

    return () => window.removeEventListener("resize", updateMaxLength);
  }, []);

  return (
    <div className="relative overflow-y-auto max-sm:h-20 h-36">
      <p
        className={`
          text-white text-xs leading-relaxed 
          ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}
        `}
      >
        {description}
      </p>
      {description.length > maxLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-300 text-xs underline mt-1 block"
        >
          {isExpanded ? 'Show less' : 'Read more'}
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
  facebook,
  insta,
  linkedin,
  link
}) => {
  return (
    <div className="w-full max-w-xs rounded-2xl sm:max-w-sm md:max-w-md lg:max-w-lg shadow-guest h-full">
      <div className="bg-blue-500 rounded-2xl shadow-lg overflow-hidden relative flex flex-col h-full">
        <Link href="/" passHref>
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={backGroundImage}
              alt="Background"
              fill
              className="object-cover opacity-70 bg-cover"
            />
          </div>

          {/* Person Image */}
          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
            <Image
              src={image}
              alt="Person"
              fill
              className="object-fill object-top rounded-t-2xl"
            />
          </div>
        </Link>

        <div className="p-4 relative z-10 bg-opacity-60 flex-grow flex flex-col">
          <div className="mb-3">
            <h2 className="text-lg font-bold text-white">{name}</h2>
            <p className="text-sm text-gray-200">{date}</p>
          </div>

          {/* Description Section */}
          <div>
            <ExpandableDescription description={description} />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-auto">
            {[
              { Icon: IoLogoLinkedin, href: linkedin || "https://linkedin.com" },
              { Icon: AiFillInstagram, href: insta || "https://instagram.com" },
              { Icon: FaFacebook, href: facebook || "https://facebook.com" },
              { Icon: LuExternalLink, href: link || "/" }
            ].map(({ Icon, href }, index) => (
              <Link key={index} href={href} passHref>
                <div className="hover:scale-125 transition-transform duration-300 cursor-pointer">
                  <Icon size={24} className="text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestLectureCard;