"use client";

import { useAuth } from "./lib/context/auth-context";
import { signOutUser } from "./lib/actions";
import RubikWetHeading from "./ui/techspardha";
import WallCardCarousal from "./ui/components/carousel/WallCardCarousel";
import WallCardGroup from "./ui/WallCardGroup";
import {
	TECHSPARDHA,
	sponsorsData,
	emailPlaceholder,
	buttonText,
	guestCardsData,
	wallcardData as WallcardData,
} from "./constants/landingpage";
import { EVENTS as eventCardsData } from "./constants/eventPage";
import SponsorsCard from "./ui/components/SponsorsCard";
import Guestgroup from "./ui/GuestGroup";
import EventGroup from "./ui/EventsGroup";
import EventCarousel from "./ui/components/carousel/EventCarousel";
import Watermark from "./ui/components/Watermark";
import NotificationCard from "./ui/components/NotificationCard";
import PresentedBy from "./ui/components/PresentedBy";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserAuthButton from "./components/UserAuthButton";

export default function Home() {
	const { user } = useAuth();
	const router = useRouter();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleLogout = async () => {
		try {
			const result = await signOutUser();
			if (result.success) {
				router.push("/");
			}
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	// Prevent hydration mismatch by not rendering user-dependent content until mounted
	if (!isMounted) {
		return null; // or a loading skeleton
	}

	return (
		<>
			{/* <div className="absolute top-1 right-4 flex items-center gap-4 z-50">
				<UserAuthButton/>
			</div> */}

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
					<EventCarousel />
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
