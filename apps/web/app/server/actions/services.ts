import { database, set, get, ref } from "../../db";
import {
  Sponsor,
  Event,
  EventMap,
  Lecture,
  TechspardhaTeamsDTO,
  NotificationsDTO,
  GetAllDetailedEvents,
  GetAllNotifications,
  GetAllDevelopers,
} from "./constants";

const SERVICES = {
  getAllTechspardhaTeams: async (): Promise<TechspardhaTeamsDTO> => {
    try {
      const teamsRef = ref(database, "contacts");
      const snapshot = await get(teamsRef);
      if (snapshot.exists()) {
        return snapshot.val() as TechspardhaTeamsDTO;
      }
      return {};
    } catch (error) {
      console.error("Error fetching techspardha teams: ", error);
      throw new Error("Failed to fetch techspardha teams");
    }
  },
  getAllSponsors: async (): Promise<Array<Sponsor>> => {
    try {
      const sponsorsRef = ref(database, "sponsors");
      const snapshot = await get(sponsorsRef);
      if (!snapshot.exists()) {
        return [];
      }
      const sponsorsData = snapshot.val();
      const allSponsors: Sponsor[] = [];
      for (const sponsorCategory in sponsorsData) {
        if (sponsorsData.hasOwnProperty(sponsorCategory)) {
          const categorySponsors = sponsorsData[sponsorCategory];
          for (const sponsorId in categorySponsors) {
            if (categorySponsors.hasOwnProperty(sponsorId)) {
              allSponsors.push({
                ...categorySponsors[sponsorId],
                category: sponsorCategory,
                id: sponsorId,
              });
            }
          }
        }
      }
      console.log("Fetched all sponsors successfully.");
      return allSponsors;
    } catch (error) {
      console.error("Error fetching sponsors:", error);
      throw new Error("Unable to fetch sponsors");
    }
  },
  getAllNotifications: async (): Promise<GetAllNotifications> => {
    try {
      const notificationsRef = ref(database, "notifications");
      const snapshot = await get(notificationsRef);
      if (snapshot.exists()) {
        return snapshot.val() as NotificationsDTO;
      }
      return {};
    } catch (error) {
      console.error("Error fetching notifications: ", error);
      throw new Error("Failed to fetch notifications");
    }
  },
  getAllLectures: async (): Promise<Array<Lecture>> => {
    try {
      const lecturesRef = ref(database, "lectures");
      const snapshot = await get(lecturesRef);

      if (snapshot.exists()) {
        const lecturesData = snapshot.val();
        return Object.entries(lecturesData).map(([id, data]: [string, any]) => ({
          id,
          date: data.date,
          desc: data.desc,
          facebook: data.facebook,
          imageUrl: data.imageUrl,
          insta: data.insta,
          linkedin: data.linkedin,
          link: data.link,
          name: data.name,
          time: data.time,
        })) as Lecture[];
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching lectures:", error);
      throw new Error("Error fetching lectures");
    }
  },
  getAllDetailedEvents: async (): Promise<GetAllDetailedEvents> => {
    try {
      const eventDescriptionRef = ref(database, "eventDescription");
      const snapshot = await get(eventDescriptionRef);
      if (!snapshot.exists()) {
        return {};
      }
      const data = snapshot.val();
      const eventMap: EventMap = {};
      for (const [categoryName, events] of Object.entries(data)) {
        eventMap[categoryName] = {};
        Object.entries(events as object).forEach(([eventName, eventData]) => {
          if (eventMap[categoryName])
            eventMap[categoryName][eventName] = eventData as Event;
        });
      }
      return eventMap;
    } catch (error) {
      console.error("Error fetching detailed events:", error);
      throw new Error("Failed to fetch detailed events");
    }
  },
  getAllEventCategories: async (): Promise<Array<string>> => {
    try {
      const eventsRef = ref(database, "events");
      const snapshot = await get(eventsRef);
      if (!snapshot.exists()) {
        return [];
      }
      return Object.keys(snapshot.val()).map((key) => snapshot.val()[key]);
    } catch (error) {
      console.error("Error fetching event categories: ", error);
      throw new Error("Failed to fetch event categories");
    }
  },
  getEventById: async (id: string): Promise<Event> => {
    try {
      const eventsRef = ref(database, "events");
      const snapshot = await get(eventsRef);
      return snapshot.val()[id];
    } catch (error) {
      console.error("Error fetching event by id", id);
      throw new Error("Failed to fetch event");
    }
  },
  // TODO: complete it after done with admin panel
  getAllDevelopers: async (): Promise<Array<GetAllDevelopers>> => {
    try {
      const devsRef = ref(database, "devs");
      const snapshot = await get(devsRef);
      if (!snapshot.exists()) {
        return [];
      }
      const data = snapshot.val();
      return Object.entries(data).map(([id, dev]: [string, any]) => ({
        id,
        ...dev,
      })) as GetAllDevelopers[];
    } catch (error) {
      console.error("Error getting dev team members:", error);
      throw new Error("Failed to fetch developers");
    }
  },
};

export default SERVICES;
