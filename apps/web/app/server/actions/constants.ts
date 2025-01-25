export type Event = {
  coordinators: Coordinator[];
  description: string;
  document: string;
  endTime: number;
  eventName: string;
  flagship: boolean;
  poster: string;
  rules: string[];
  startTime: number;
  venue: string;
};

export type EventMap = {
  [category: string]: {
    [eventName: string]: Event;
  };
};

type Coordinator = {
  coordinator_name: string;
  coordinator_number: string;
};

export type Sponsor = {
  category: string;
  alt: string;
  imageUrl: string;
  name: string;
  targetUrl: string;
  id: string;
};

export type TechspardhaTeam = {
  contacts: Contacts[];
  logo: string | null;
  teamName: string;
};

type Contacts = {
  imageURL: string;
  name: string;
  post: Post | string;
};

enum Post {
  Convenor = "Convenor",
  CoConvenor = "Co-Convenor",
}

export type TechspardhaTeamsDTO = {
  [key: string]: TechspardhaTeam;
};

export type Notification = {
  android_channel_id: string;
  body: string;
  image: string;
  link: string;
  title: string;
  time: number;
};

export type NotificationsDTO = {
  [key: string]: Notification;
};

export type Lecture = {
  id: string;
  date: string;
  desc: string;
  facebook: string;
  imageUrl: string;
  insta: string;
  linkedin: string;
  link: string;
  name: string;
  time: string;
};

export type GetAllDetailedEvents = {
  [eventCategory: string]: {
    [eventName: string]: Event;
  };
};

export type GetAllNotifications = {
  [id: string]: Notification;
};

export type GetAllDevelopers = {
  id: string;
  members: {
    imageUrl: string;
    name: string;
    year: string;
    github: string;
    insta: string;
    linkedin: string;
  }[];
};
