import SERVICES from "@/app/server/actions/services";
import EventsClient from "@/app/(routing)/events/EventsClient";

export default async function EventsPage() {
  const eventsObject = await SERVICES.getAllDetailedEvents();

  // Convert events object to an array with id
	const eventsArray = Object.entries(eventsObject).map(([category, events]) => {
		return Object.entries(events).map(([id, event]) => {
			return {
				...event,
				id,
        eventCategory: category,
			};
		});
	}).flat();

  // Get all categories
  const categoryArray = Object.keys(eventsObject);

  return <EventsClient events={eventsArray} categories={categoryArray} />;
}
