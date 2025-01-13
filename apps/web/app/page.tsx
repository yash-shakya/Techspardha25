import RubikWetHeading from "./techspardha";
import {
	TECHSPARDHA,
	sponsorsData,
	emailPlaceholder,
	buttonText,
  guestCardsData
} from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";

export default function Home() {
	// Define the sponsors data and other props in Home component

	return (
		<>
			<RubikWetHeading text={TECHSPARDHA} />
      <div className="content flex-col flex gap-8">
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
