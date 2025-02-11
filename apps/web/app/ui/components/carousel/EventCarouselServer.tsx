import SERVICES from "@/app/server/actions/services"
import EventCarouselClient from "./EventCarouselClient";

export default async function EventCarouselServer() {
	const eventCategories = await SERVICES.getEventsByCategory();
	
	return <EventCarouselClient eventCategory={eventCategories} />
}
