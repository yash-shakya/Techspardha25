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

// ACTIONS
import SERVICES from "./server/actions/services";

async function getLectures(){
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
			}
		})
		console.log(modifiedLectures);
		return modifiedLectures;
	} catch (error) {
		console.error("Error fetching lectures: ", error);
		return guestCardsData;
	}
}

export default async function Home() {

	// Fetching All Lectures
	const lectures = await getLectures();
	// Fetching All Sponsors


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

				<section className="snap-center sm:min-h-[10vh] flex flex-col items-center justify-center  my-10 md:mb-0">
					<EventCarouselServer />
				</section>
				<section
					className="snap-center sm:min-h-screen flex flex-col items-center justify-center  mb-10 md:mb-0"
					id="lectures"
				>
					<Guestgroup cardsData={lectures} />
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
