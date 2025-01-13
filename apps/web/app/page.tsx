import RubikWetHeading from "./ui/techspardha";
import {
	TECHSPARDHA,
	sponsorsData,
	emailPlaceholder,
	buttonText,
	guestCardsData,
	eventCardsData
} from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventGroup from "./ui/EventsGroup";

export default function Home() {
	// Define the sponsors data and other props in Home component

	return (
		<>
			<RubikWetHeading text={TECHSPARDHA} />
			<div className="content flex-col flex gap-12">
				<EventGroup eventData = {eventCardsData} />
				<Guestgroup cardsData={guestCardsData} />
				<SponsorsCard
					SponsorsCard={sponsorsData}
					emailPlaceholder={emailPlaceholder}
					buttonText={buttonText}
				/>
			</div>
		</>
	);
}
