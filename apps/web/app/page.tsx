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

export default function Home() {
	// Define the sponsors data and other props in Home component

	return (
		<>
			<div className="sm:min-h-screen flex flex-col items-center justify-center">
				{/* HERO SECTION */}
				<RubikWetHeading text={TECHSPARDHA} />
				{/* MORE COMPONENTS TO BE ADDED */}
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
