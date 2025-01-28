import SERVICES from "@/app/server/actions/services"
import EventCarouselClient from "./EventCarouselClient";

export default async function EventCarouselServer() {
	const eventsObject = await SERVICES.getAllDetailedEvents();

	// Convert events object to an array with id
	const eventsArray = Object.entries(eventsObject).map(([id, eventDescription]: [string, any]) => ({
		id: id,
		...eventDescription,
	}));
	return <EventCarouselClient events={eventsArray} />
}
