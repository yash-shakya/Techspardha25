```js
GET /events/categories
req: null
res: {
    message: string;
    success: boolean;
    data: {
        categories: CategoriesElement[]
    }
}

interface CategoriesElement {
  categoryName: string;
  imgUrl: string;
  icon: string;
}
```

```js
GET /events/description?eventCategory=&eventName=
req: null
res: {
    message: string;
    success: boolean;
    data: EventsAboutElement;
}
interface EventsAboutElement {
  coordinators: { coordinator_name: string; coordinator_number: string }[];
  description: string;
  document: string;
  endTime: number;
  eventName: string;
  flagship: string;
  poster: string;
  startTime: number;
  venue: string;
  eventCategory: string;
}
```

```js
GET /events
req: null
res: {
    events: EventsElement[]
}
interface EventsElement {
  eventName: string;
  eventCategory: string;
}
```

```js
GET /lectures
req: null
res: {
  success: boolean;
  data: {
    lectures: Guest[];
  };
}
interface Guest {
  name: string;
  time: string;
  desc: string;
  imageUrl: string;
  date: string;
  insta: string;
  facebook: string;
  linkedin: string;
}
```

```js
GET /notification
req: null
res: {
  success: boolean;
  data: {
    notifications: Notification[];
  };
}
interface Notification {
  notification: NotificationDetails;
  time: string;
}
interface NotificationDetails {
  android_channel_id: string;
  body: string;
  image: string;
  link: string;
  title: string;
}
```

```js
GET /sponsors
req: null
res: {
    data: {
        sponsors: ArraySponsors[]
    }
}
interface SponsorData {
  imageUrl: string;
  name: string;
  targetUrl: string;
}
interface ArraySponsors {
  sponsorSection: string;
  sponsors: SponsorData[];
}
```

```js
GET /contacts
req: null
res: {
  data: { contacts: Societies[] };
  success: boolean;
}
interface Societies {
  section: string;
  logo: string;
  people: Members[];
}
interface Members {
  imageUrl: string;
  name: string;
  post: string;
}
```
