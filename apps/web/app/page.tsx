import RubikWetHeading from "./ui/techspardha";
import WallCardCarousal from "./ui/components/carousel/WallCardCarousel";
import {
	TECHSPARDHA,
	sponsorsData,
	emailPlaceholder,
	buttonText,
	guestCardsData,
} from "./constants/landingpage";
import SponsorsCard, { SponsorCategory } from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventCarouselServer from "./ui/components/carousel/EventCarouselServer";
import Watermark from "./ui/components/Watermark";
import NotificationCard from "./ui/components/NotificationCard";
import PresentedBy from "./ui/components/PresentedBy";

// ACTIONS
import SERVICES from "./server/actions/services";

async function getLectures() {
	try {
		const lectures = await SERVICES.getAllLectures();
		const modifiedLectures = lectures.map((lecture) => {
			return {
				date: `${lecture.date} ${lecture.time}`,
				description: lecture.desc,
				facebook: lecture.facebook || "",
				image: lecture.imageUrl || "/GuestLecturer/Guestlecture.jpg",
				insta: lecture.insta || "",
				link: lecture.link || "/",
				linkedin: lecture.linkedin || "",
				name: lecture.name,
			};
		});
		return modifiedLectures;
	} catch (error) {
		console.error("Error fetching lectures: ", error);
		return guestCardsData;
	}
}

async function getSponsors() {
	try {
		const sponsors = await SERVICES.getAllSponsors();
		// sponsors = [
		// 	{
		// 		"sponsorSection": "Platinum",
		// 		"sponsor": { // Sponsor Object}
		// 	},
		// ]
		const modifiedSponsors = sponsors.map((sponsorCategory) => {
			return {
				title: sponsorCategory.sponsorSection,
				sponsors: (sponsorCategory.sponsors || []).map((sponsor) => {
					return {
						name: sponsor.name || "",
						imageUrl:
							sponsor.imageUrl ||
							"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
						alt: sponsor.alt || sponsor.name || "Sponsor Logo",
						targetUrl: sponsor.targetUrl || "/",
					};
				}),
			};
		})
		return modifiedSponsors as SponsorCategory[];
	} catch (error) {
		console.error("Error fetching sponsors: ", error);
		throw new Error("Error fetching sponsors");
	}
}

export default async function Home() {
	// Fetching All Lectures
	const lectures = await getLectures();
	// Fetching All Sponsors
	const sponsors = await getSponsors();

	return (
		<>
			<main className="snap-y snap-mandatory w-full h-full">
				<section className="snap-center min-h-[100svh] md:min-h-[90vh] flex flex-col items-center gap-[22px]  mb-10 md:mb-0">
					<RubikWetHeading text={TECHSPARDHA} />
					<h2 className="w-[376.21px] h-[27px] text-center text-[#bdbdc0] text-[22px] font-semibold font-sans leading-[33px]">
						Frontier Reimagined
					</h2>
					<PresentedBy />
					<NotificationCard />
					<Watermark />
				</section>

				<section className="snap-center flex flex-col items-center justify-center  sm:my-10 mb-10 md:mb-0">
					<EventCarouselServer />
				</section>
				<section
					className="snap-center flex flex-col items-center justify-center  mb-10"
					id="lectures"
				>
					<Guestgroup cardsData={lectures} />
				</section>
				<section
					className="snap-start w-[100vw] flex flex-col items-center justify-center  max-sm:py-16"
					id="sponsors"
				>
					<SponsorsCard
						SponsorsCard={sponsors}
						emailPlaceholder={emailPlaceholder}
						buttonText={buttonText}
					/>
				</section>

				<section className="my-10" id="testimonials">
					<WallCardCarousal />
				</section>
			</main>
		</>
	);
}
