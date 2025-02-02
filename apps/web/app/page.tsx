import RubikWetHeading from "./ui/techspardha";
import WallCardCarousal from "./ui/components/carousel/WallCardCarousel";
import {
	TECHSPARDHA,
	sponsorsData,
	emailPlaceholder,
	buttonText,
	guestCardsData,
} from "./constants/landingpage";
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventCarouselServer from "./ui/components/carousel/EventCarouselServer";
import Watermark from "./ui/components/Watermark";
import NotificationCard from "./ui/components/NotificationCard";
import PresentedBy from "./ui/components/PresentedBy";

export default function Home() {
	return (
		<>
			
			<main className="snap-y snap-mandatory w-full h-full">
				<section className="snap-center min-h-[95vh] md:min-h-[90vh] flex flex-col items-center gap-[22px]  mb-10 md:mb-0">
					<RubikWetHeading text={TECHSPARDHA} />
					<h2 className="w-[376.21px] h-[27px] text-center text-[#bdbdc0] text-[22px] font-medium font-['Satoshi Variable'] leading-[33px]">
						Frontier Reimagination
					</h2>
					<PresentedBy />
					<NotificationCard />
					<Watermark />
				</section>

				<section className="snap-center sm:min-h-[10vh] flex flex-col items-center justify-center  mb-10 md:mb-0">
					<EventCarouselServer />
				</section>
				<section
					className="snap-center sm:min-h-screen flex flex-col items-center justify-center  mb-10 md:mb-0"
					id="lectures"
				>
					<Guestgroup cardsData={guestCardsData} />
				</section>
				<section
					className="snap-start min-h-screen flex flex-col items-center justify-center  mb-10 md:mb-0"
					id="sponsors"
				>
					<SponsorsCard
						SponsorsCard={sponsorsData}
						emailPlaceholder={emailPlaceholder}
						buttonText={buttonText}
					/>
				</section>

				<section className="" id="testimonials">
					<WallCardCarousal />
				</section>
			</main>
		</>
	);
}
