import SERVICES from "@/app/server/actions/services";
import EventsClient from "@/app/(routing)/events/EventsClient";

export default async function EventsPage() {
  const eventsObject = await SERVICES.getAllDetailedEvents();

  // Convert events object to an array with id
  const eventsArray = Object.entries(eventsObject).map(([id, eventDescription]: [string, any]) => ({
    id: id,
    ...eventDescription,
  }));

  // Create a map of event categories
  const categoryMap = new Map<string, any[]>();
  eventsArray.forEach((event) => {
    const category = event.eventCategory;
    if (!categoryMap.has(category)) {
      categoryMap.set(category, []);
    }
    categoryMap.get(category)?.push(event);
  });

  // Convert category map to an array
  const categoryArray = Array.from(categoryMap.entries()).map(([category, events]) => category);

  return <EventsClient events={eventsArray} categories={categoryArray} />;
}
