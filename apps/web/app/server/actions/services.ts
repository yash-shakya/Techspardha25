// import { database, set, get, ref } from "../../db"; --> Permission Denied

import axios from "axios";

import {
  Sponsor,
  SponsorByCategory,
  Event,
  EventMap,
  Lecture,
  TechspardhaTeamsDTO,
  NotificationsDTO,
  GetAllDetailedEvents,
  GetAllNotifications,
  GetAllDevelopers,
  BaseURL
} from "./constants";

const SERVICES = {
  getAllTechspardhaTeams: async (): Promise<TechspardhaTeamsDTO> => {
    try {
      // const teamsRef = ref(database, "contacts");
      let teams = await axios.get(`${BaseURL}/contacts`);
      // const snapshot = await get(teamsRef);
      const snapshot = teams.data;
      // if (snapshot.exists()) {
      //   return snapshot.val() as TechspardhaTeamsDTO;
      // }
      if(snapshot.success) {
        const teamsRaw = snapshot.data['contacts'];
        console.log(teamsRaw);
        const teams = {} as TechspardhaTeamsDTO;
        for (const key in teamsRaw) {
          const team = teamsRaw[key];
          const teamName = team.section.trim();
          if (teamsRaw.hasOwnProperty(key)) {
            teams[teamName] = {
              teamName: teamName,
              logo: team.logo,
              contacts: team.people,
            }
          }
        }

        console.log("Fetched all techspardha teams successfully.", teams);
        return teams;
      }
      return {};
    } catch (error) {
      console.error("Error fetching techspardha teams: ", error);
      throw new Error("Failed to fetch techspardha teams");
    }
  },
  getAllSponsors: async (): Promise<SponsorByCategory[]> => {
    try {
      // const sponsorsRef = ref(database, "sponsors");
      // const snapshot = await get(sponsorsRef);
      const sponsors = await axios.get(`${BaseURL}/sponsors`);
      const snapshot = sponsors.data;
      if (!snapshot.success) {
        return [];
      }
      // const sponsorsData = snapshot.val();
      // const allSponsors: Sponsor[] = [];
      // const allSponsorsByCategory: { [key: string]: SponsorByCategory[] } = {};
      // for (const sponsorCategory in sponsorsData) {
      //   if (sponsorsData.hasOwnProperty(sponsorCategory)) {
      //     const categorySponsors = sponsorsData[sponsorCategory];
      //     // Get all sponsors by category (2D array)
      //     allSponsorsByCategory[sponsorCategory] = [];
      //     // Get all sponsors in a single array
      //     for (const sponsorId in categorySponsors) {
      //       if (categorySponsors.hasOwnProperty(sponsorId)) {
      //         const singleSponsor = {
      //           ...categorySponsors[sponsorId],
      //           category: sponsorCategory.trim(),
      //           id: sponsorId,
      //         };
              
      //         // Pushing sponsors to their respective categories
      //         allSponsorsByCategory[sponsorCategory].push(singleSponsor);
      //         // Pushing all sponsors to a single array
      //         allSponsors.push(singleSponsor);
              
      //       }
      //     }
      //   }
      // }
      console.log("Fetched all sponsors successfully.");
      console.log(snapshot.data['sponsors']);
      // return allSponsors; TODO: This is not the usecase currently
      // return allSponsorsByCategory;
      return snapshot.data['sponsors'];
    } catch (error) {
      console.error("Error fetching sponsors:", error);
      throw new Error("Unable to fetch sponsors");
    }
  },
  getAllNotifications: async (): Promise<GetAllNotifications> => {
    try {
      // const notificationsRef = ref(database, "notifications");
      const notifications = await axios.get(`${BaseURL}/notifications`);
      // const snapshot = await get(notificationsRef);
      const snapshot = notifications.data;
      if (snapshot) {
        return snapshot as NotificationsDTO;
      }
      return {};
    } catch (error) {
      console.error("Error fetching notifications: ", error);
      throw new Error("Failed to fetch notifications");
    }
  },
  getAllLectures: async (): Promise<Array<Lecture>> => {
    try {
      // const lecturesRef = ref(database, "lectures");
      const lectures = await axios.get(`${BaseURL}/lectures`);
      // const snapshot = await get(lecturesRef);
      const snapshot = lectures.data.data;

      if (snapshot) {
        // const lecturesData = snapshot.val();
        // return Object.entries(lecturesData).map(([id, data]: [string, any]) => ({
        //   id,
        //   date: data.date,
        //   desc: data.desc,
        //   facebook: data.facebook,
        //   imageUrl: data.imageUrl,
        //   insta: data.insta,
        //   linkedin: data.linkedin,
        //   link: data.link,
        //   name: data.name,
        //   time: data.time,
        // })) as Lecture[];
        return snapshot.lectures as Lecture[];
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching lectures:", error);
      throw new Error("Error fetching lectures");
    }
  },
  getAllEventNames: async (): Promise<Array<{eventName: string, eventCategory: string}>> => {
    try {
      const events = await axios.get(`${BaseURL}/events`);
      const snapshot = events.data;
      if (!snapshot.success) {
        return [];
      }
      const data = snapshot.data;
      return data.events;
    } catch (error) {
      console.error("Error fetching event names:", error);
      throw new Error("Failed to fetch event names");
    }
  },
  getAllDetailedEvents: async (): Promise<GetAllDetailedEvents> => {
    try {
      // const eventDescriptionRef = ref(database, "eventDescription");
      // const snapshot = await get(eventDescriptionRef);
      // if (!snapshot.exists()) {
      //   return {};
      // }
      // const data = snapshot.val();
      // const eventMap: EventMap = {};
      // for (const [categoryName, events] of Object.entries(data)) {
      //   eventMap[categoryName] = {};
      //   Object.entries(events as object).forEach(([eventName, eventData]) => {
      //     if (eventMap[categoryName])
      //       eventMap[categoryName][eventName] = eventData as Event;
      //   });
      // }
      const eventMap = {} as GetAllDetailedEvents
      // Use the getAllEventNames function
      const eventNames = await SERVICES.getAllEventNames();
      // For each eventName in eventNames we have to make a call to {base_URL}/events/description
      // Where eventName object will be the used as a query Param
      for (const event of eventNames) {
        const eventCategory = event.eventCategory;
        const eventName = event.eventName;
        const res = await axios.get(`${BaseURL}/events/description`, { params: { eventCategory, eventName } });
        const resp = res.data;
        if (resp.success) {
          if (!eventMap[eventCategory]) {
            eventMap[eventCategory] = {};
          }
          const singleEventDetails = resp.data as Event
          eventMap[eventCategory][eventName] = singleEventDetails
        }
      }
      console.log("Successfully Fetched all Events", eventMap)
      return eventMap;
    } catch (error) {
      console.error("Error fetching detailed events:", error);
      throw new Error("Failed to fetch detailed events");
    }
  },
  getAllEventCategories: async (): Promise<Array<string>> => {
    try {
      // Use the getEventsByCategory() function instead
      const eventCats = await SERVICES.getEventsByCategory();
      return eventCats.map((category) => category.name);
    } catch (error) {
      console.error("Error fetching event categories: ", error);
      throw new Error("Failed to fetch event categories");
    }
  },
  getEventsByCategory: async () : Promise<Array<{name: string, img: string}>> => {
    try {
      // const eventsRef = ref(database, "events");
      const events = await axios.get(`${BaseURL}/events/categories`);
      // const snapshot = await get(eventsRef);
      const snapshot = events.data;
      // Will create an array of {name: string, img: string} objects
      if (!snapshot.success) {
        return [];
      }
      const data = snapshot.data['categories'];
      return data.map((category: {categoryName: string, imgUrl: string, icon: string}) => {
        return {
          name: category.categoryName,
          img: category.imgUrl,
          // icon: category.icon
        }
      })
    } catch (error) {
      console.error("Error fetching events by category:", error);
      throw new Error("Failed to fetch events");
    }
  },
  getEventById: async (id: string): Promise<Event> => {
    // id should me matched with eventDescription[category][id] iterating through all categories
    try {
      // const eventsRef = ref(database, "eventDescription");
      const allEvents = await SERVICES.getAllEventNames();
      // Search the id(eventName in allEvents)
      const eventDet = allEvents.find(event => event.eventName === id);
      if (!eventDet) {
        throw new Error(`Event with id ${id} not found`);
      }
      // Axios call with the eventDet as queryParams
      const eventReq = await axios.get(`${BaseURL}/events/description`, {params: eventDet});
      const singleEvent = eventReq.data
      if(!singleEvent.success){
        return {} as Event
      }
      return singleEvent.data
    } catch (error) {
      console.error("Error fetching event by id", id);
      throw new Error("Failed to fetch event");
    }
  },
  // TODO: getAllDevelopers: complete it after done with admin panel (Currently hardcoded)
  // getAllDevelopers: async (): Promise<Array<GetAllDevelopers>> => {
  //   try {
  //     const devsRef = ref(database, "devs");
  //     const snapshot = await get(devsRef);
  //     if (!snapshot.exists()) {
  //       return [];
  //     }
  //     const data = snapshot.val();
  //     return Object.entries(data).map(([id, dev]: [string, any]) => ({
  //       id,
  //       ...dev,
  //     })) as GetAllDevelopers[];
  //   } catch (error) {
  //     console.error("Error getting dev team members:", error);
  //     throw new Error("Failed to fetch developers");
  //   }
  // },
};

export default SERVICES;
