import RubikWetHeading from "./ui/techspardha";
import {
  TECHSPARDHA,
  sponsorsData,
  emailPlaceholder,
  buttonText,
  guestCardsData,
  eventCardsData,
} from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventGroup from "./ui/EventsGroup";
import Watermark from "./ui/components/Watermark";
import NotificationCard from "./ui/components/NotificationCard";
import PresentedBy from "./ui/components/PresentedBy";

export default function Home() {
  // Define the sponsors data and other props in Home component

  return (
    <>
      <div className="sm:min-h-screen flex flex-col items-center gap-[22px]">
        {/* HERO SECTION */}
        <RubikWetHeading text={TECHSPARDHA} />
        <div className="w-[376.21px] h-[27px] text-center text-[#bdbdc0] text-[22px] font-medium font-['Satoshi Variable'] leading-[33px]">
          Theme for fest!!!!
        </div>
        <PresentedBy />
        <NotificationCard />
        <Watermark />
      </div>
      <div className="content flex-col flex gap-12">
        <div className="sm:min-h-screen flex flex-col items-center justify-center">
          <EventGroup eventData={eventCardsData} />
        </div>
        <div className="sm:min-h-screen flex flex-col items-center justify-center">
          <Guestgroup cardsData={guestCardsData} />
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <SponsorsCard
            SponsorsCard={sponsorsData}
            emailPlaceholder={emailPlaceholder}
            buttonText={buttonText}
          />
        </div>
      </div>
    </>
  );
}
