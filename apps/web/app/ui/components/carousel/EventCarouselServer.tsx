import SERVICES from "@/app/server/actions/services"
import EventCarouselClient from "./EventCarouselClient";

export default async function EventCarouselServer() {
	const eventsObject = await SERVICES.getAllDetailedEvents();

	
	
	// Convert events object to an array with id
	const eventsArray = Object.entries(eventsObject).map(([category, events]) => {
		return Object.entries(events).map(([id, event]) => {
			return {
				...event,
				id,
			};
		});
	}).flat();
	
	return <EventCarouselClient events={eventsArray} />
}
