import RubikWetHeading from "./techspardha";
import {
	TECHSPARDHA,
	sponsorsData,
	emailPlaceholder,
	buttonText,
} from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";

export default function Home() {
	// Define the sponsors data and other props in Home component

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
