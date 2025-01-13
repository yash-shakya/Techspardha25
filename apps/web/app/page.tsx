import RubikWetHeading from "./techspardha";
import { TECHSPARDHA } from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";

export default function Home() {
  // Define the sponsors data and other props in Home component
  const sponsorsData = [
    {
      title: "Hackathon Partner",
      logos: [
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp"
      ],
    },
    {
      title: "Food Partner",
      logos: [
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
      ],
    },
    {
      title: "Coding Partner",
      logos: [
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
      ],
    },
    {
      title: "Internship Partner",
      logos: [
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
        "https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
      ],
    },
  ];

  const emailPlaceholder = "WANT TO SPONSOR? DROP YOUR E-MAIL HERE!!!";
  const buttonText = "Submit";

  return (
    <>
      <RubikWetHeading text={TECHSPARDHA} />
      <SponsorsCard
		SponsorsCard={sponsorsData}
        emailPlaceholder={emailPlaceholder}
        buttonText={buttonText}
      />
    </>
  );
}
