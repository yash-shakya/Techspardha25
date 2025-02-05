import React from "react";
import Link from "next/link";

export type SponsorCategory = {
  title: string;
  sponsors: {
    name: string;
    imageUrl: string;
    alt: string;
    targetUrl: string;
  }[];
};

interface SponsorsCardProps {
  SponsorsCard: SponsorCategory[];
  emailPlaceholder: string;
  buttonText: string;
}

const SponsorsCard: React.FC<SponsorsCardProps> = ({
  SponsorsCard,
  emailPlaceholder,
  buttonText,
}) => {
  return (
    <div className="text-white py-10 px-4 flex flex-col items-center">
      <h2 className="text-center text-5xl font-[Satoshi Variable] font-black bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text mb-8">
        Our Sponsors
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {SponsorsCard.map((category, index) => (
          <div key={index} className="w-[450px] flex flex-col items-center">
            <div className="text-center font-semibold text-lg">
              {category.title.toUpperCase()}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              {category.sponsors.map((logo, idx) => (
                <Link
                  key={idx}
                  href={logo.targetUrl}
                  passHref
                  className="cursor-pointer flex items-center justify-center flex-col bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={logo.imageUrl}
                    alt={logo.alt}
                    className="w-40 h-auto max-w-full"
                  />
                  <span className="sr-only">{logo.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 max-w-3xl">
        <div className="rounded-[45px] text-center bg-[#001926] border border-gray-700 shadow-lg w-full sm:w-auto">
          <input
            type="email"
            placeholder={emailPlaceholder}
            className="rounded-[45px] w-full sm:w-[390px] bg-[#001926] text-white px-4 py-2 duration-300"
          />
        </div>
        <button className="w-full sm:w-auto px-8 py-2 bg-[#142B37] rounded-3xl font-[Satoshi Variable] hover:bg-[#0E1A1F] duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SponsorsCard;