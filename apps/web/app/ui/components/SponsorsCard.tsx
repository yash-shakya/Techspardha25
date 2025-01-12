import React from "react";

type SponsorCategory = {
  title: string;
  logos: string[];
};

interface SponsorsCardProps {
  SponsorsCard: SponsorCategory[];
  emailPlaceholder: string;
  buttonText: string;
}

const SponsorsCard: React.FC<SponsorsCardProps> = ({ SponsorsCard, emailPlaceholder, buttonText }) => {
  return (
    <div className=" text-white py-10 px-4">
      <h2 className="text-center text-3xl font-[Satoshi Variable] font-bold mb-8 bg-gradient-to-b from-gray-50 to-gray-50/40 text-transparent bg-clip-text">
        Our SponsorsCard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {SponsorsCard.map((category, index) => (
          <div key={index} className="col-span-full">
            {/* Sponsor Category Title */}
            <div className="text-center font-semibold text-lg mt-4">
              {category.title.toUpperCase()}
            </div>

            {/* Sponsor Logos */}
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              {category.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`${category.title} Logo ${idx + 1}`}
                  className="w-40 h-auto max-w-full"
                />
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center col-span-full gap-4">
          <div className="text-center bg-[#001926] p-3 rounded-[45px] border border-gray-700 shadow-lg w-full sm:w-auto">
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="rounded-[45px] w-full sm:w-[390px] bg-[#001926] text-white px-4 py-2"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-2 bg-[#142B37] rounded-3xl font-[Satoshi Variable]">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsCard;
