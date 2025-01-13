export const TECHSPARDHA = "TECHSPARDHA";

export const sponsorsData = [
	{
		title: "Hackathon Partner",
		logos: [
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
		],
	},
	{
		title: "Food Partner",
		logos: [
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
		],
	},
	{
		title: "Coding Partner",
		logos: [
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
		],
	},
	{
		title: "Internship Partner",
		logos: [
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
			"https://www.printastic.com/data/theme/slider/436/sponsorships@2x.webp",
		],
	},
];

export const emailPlaceholder = "WANT TO SPONSOR? DROP YOUR E-MAIL HERE!!!";
export const buttonText = "Submit";

export const guestCardsData = [
	{
		image: "/GuestLecturer/Guestlecture.jpg",
		name: "AMAN DATTARWAL",
		date: "Jan 1, 2025",
		description:
			"Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.",
	},
	{
		image: "/GuestLecturer/Guestlecture.jpg",
		name: "AMAN DATTARWAL",
		date: "Feb 5, 2025",
		description:
			"Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.",
	},
	{
		image: "/GuestLecturer/Guestlecture.jpg",
		name: "AMAN DATTARWAL",
		date: "Feb 5, 2025",
		description:
			"Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.",
	},
	{
		image: "/GuestLecturer/Guestlecture.jpg",
		name: "AMAN DATTARWAL",
		date: "Feb 5, 2025",
		description:
			"Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.",
	},
	{
		image: "/GuestLecturer/Guestlecture.jpg",
		name: "Jane Smith",
		date: "Feb 5, 2025",
		description:
			"Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.",
	},
	{
		image: "/GuestLecturer/Guestlecture.jpg",
		name: "Jane Smith",
		date: "Feb 5, 2025",
		description:
			"Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.Build RAG based internal and external chatbots that speak facts without hallucination. Build RAG based internal and external chatbots that speak facts without hallucination.",
	},
];

function generateId(): string {
	return Math.random().toString(36).substring(2, 10);
}

export const eventCardsData = [
	{ id: generateId(), name: `Black Box`, img: `events.png` },
	{ id: generateId(), name: `Code Sprint`, img: `events2.png` },
	{ id: generateId(), name: `Hackathon`, img: `events.png` },
	{ id: generateId(), name: `Tech Talk`, img: `events2.png` },
	{ id: generateId(), name: `Robotics`, img: `events.png` },
];

export const NavItems = [
	{ name: "EVENTS", link: "/events" },
	{ name: "LECTURES", link: "/lectures" },
	{ name: "SPONSORS", link: "/sponsors" },
	{ name: "LOGO", link: "/logo.png" },
	{ name: "ABOUT US", link: "/about" },
	{ name: "TEAM", link: "/team" },
	{ name: "DEVELOPERS", link: "/developers" },
];
