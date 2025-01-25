import { db } from "../../db";
import { getDocs, collection } from "firebase/firestore";
import {
  Sponsor,
  Event,
  EventMap,
  Lecture,
  TechspardhaTeam,
  TechspardhaTeamsDTO,
  Notification,
  NotificationsDTO,
  GetAllDetailedEvents,
  GetAllNotifications,
  GetAllDevelopers,
} from "./constants";

const SERVICES = {
  getAllTechspardhaTeams: async (): Promise<TechspardhaTeamsDTO> => {
    try {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const data: TechspardhaTeamsDTO = {};
      querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data() as TechspardhaTeam;
      });
      return data;
    } catch (error) {
      console.error("Error fetching techspardha teams: ", error);
      throw new Error("Failed to fetch techspardha teams");
    }
  },
  getAllSponsors: async (): Promise<Array<Sponsor>> => {
    try {
      const sponsorsCollectionRef = collection(db, "sponsors");
      const sponsorDocsSnapshot = await getDocs(sponsorsCollectionRef);
      const allSponsors: Sponsor[] = [];
      sponsorDocsSnapshot.forEach((docSnapshot) => {
        const sponsorCategory = docSnapshot.id; // Document ID is the category
        const sponsors = docSnapshot.data(); // All sponsors under this category
        for (const sponsorId in sponsors) {
          if (sponsors.hasOwnProperty(sponsorId)) {
            allSponsors.push({
              ...sponsors[sponsorId],
              category: sponsorCategory,
              id: sponsorId,
            });
          }
        }
      });
      console.log("Fetched all sponsors successfully.");
      return allSponsors;
    } catch (error) {
      console.error("Error fetching sponsors:", error);
      throw new Error("Unable to fetch sponsors");
    }
  },
  getAllNotifications: async (): Promise<GetAllNotifications> => {
    try {
      const querySnapshot = await getDocs(collection(db, "notifications"));
      const notifications: NotificationsDTO = {};
      querySnapshot.forEach((doc) => {
        notifications[doc.id] = doc.data() as Notification;
      });
      return notifications;
    } catch (error) {
      console.error("Error fetching notifications: ", error);
      throw new Error("Failed to fetch notifications");
    }
  },
  getAllLectures: async (): Promise<Array<Lecture>> => {
    try {
      const lecturesCollection = collection(db, "lectures");
      const snapshot = await getDocs(lecturesCollection);
      const lectures = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          date: data.date,
          desc: data.desc,
          facebook: data.facebook,
          imageUrl: data.imageUrl,
          insta: data.insta,
          linkedin: data.linkedin,
          link: data.link,
          name: data.name,
          time: data.time,
        } as Lecture;
      });
      return lectures;
    } catch (error) {
      console.error("Error fetching lectures:", error);
      throw new Error("Error fetching lectures");
    }
  },
  getAllDetailedEvents: async (): Promise<GetAllDetailedEvents> => {
    const eventMap: EventMap = {};
    const categoriesSnapshot = await getDocs(
      collection(db, "eventDescription")
    );
    categoriesSnapshot.forEach((categoryDoc) => {
      const categoryName = categoryDoc.id;
      const events = categoryDoc.data();
      eventMap[categoryName] = {};
      Object.entries(events).forEach(([eventName, eventData]) => {
        if (eventMap[categoryName]) {
          eventMap[categoryName][eventName] = eventData as Event;
        }
      });
    });

    return eventMap;
  },
  getAllEvents: async (): Promise<
    Array<{ eventName: string; eventCategory: string }>
  > => {
    return []; // TODO: complete this after events are completed in other repo
  },
  getEventByCategoryAndName: async () => {
    return null; // TODO: complete this after events are completed in other repo
  },
  getAllEventCategories: async (): Promise<Array<string>> => {
    const categories: string[] = [];
    try {
      const eventsCollectionRef = collection(db, "events");
      const snapshot = await getDocs(eventsCollectionRef);
      snapshot.forEach((doc) => {
        categories.push(doc.id);
      });
      console.log("Event categories fetched successfully:", categories);
      return categories;
    } catch (error) {
      console.error("Error fetching event categories: ", error);
      throw new Error("Failed to fetch event categories");
    }
  },
  getAllDevelopers: async (): Promise<Array<GetAllDevelopers>> => {
    try {
      const devTeamRef = collection(db, "devs");
      const snapshot = await getDocs(devTeamRef);
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as any;
    } catch (error) {
      console.error("Error getting dev team members:", error);
      throw new Error("Failed to fetch developers");
    }
  },
};

export default SERVICES;
