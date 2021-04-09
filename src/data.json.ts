import { Category } from "./interfaces";

const data: Array<Category> = [
	{
		id: 1,
		description: "ABOUT UPLB / UP IN GENERAL",
		title:
			"Top 6 UP Campus with the most Self-Reported 'Single' Status (scores does not reflect actual result)",
		source:
			"https://www.gmanetwork.com/news/scitech/science/725959/two-thirds-of-up-students-are-single-says-study/story/",
		entries: [
			{
				text: "UP Diliman",
				points: 30,
			},
			{
				text: "UP Visayas",
				points: 24,
			},
			{
				text: "UP Manila",
				points: 20,
			},
			{
				text: "UP Baguio",
				points: 17,
			},
			{
				text: "UP Los Banos",
				points: 15,
			},
			{
				text: "UP Mindanao",
				points: 10,
			},
		],
	},
	{
		id: 2,
		description: "KPOP",
		title: "7 K-Pop Slang Terms Every True Fan Should Know ",
		source:
			"https://www.koreaboo.com/lists/kpop-slang-terms-true-fan-know/?fbclid=IwAR2BGcOOyv9sZgyUmk3dib4NwrwkvDr_UIoyUKDgHa6A3lnkGbIS2GNqpJg",
		entries: [
			{
				text: "Aegyo",
				points: 31,
			},
			{
				text: "Jeongmal",
				points: 24,
			},
			{
				text: "Maknae",
				points: 20,
			},
			{
				text: "Fighting",
				points: 19,
			},
			{
				text: "All-Kill",
				points: 10,
			},
			{
				text: "Sasaeng",
				points: 4,
			},
			{
				text: "Sunbae and Hoobae",
				points: 2,
			},
		],
	},
	{
		id: 3,
		description: "MOVIES",
		title:
			"How Can You Tell That Your Hypothetical Date Isn’t Interested in the Movie?",
		source:
			"https://www.reddit.com/r/trivia/comments/3wzpvt/free_database_of_50000_trivia_questions/",
		entries: [
			{
				text: "Fall Asleep",
				points: 42,
			},
			{
				text: "Yawning",
				points: 26,
			},
			{
				text: "More into You",
				points: 12,
			},
			{
				text: "Talking A Lot",
				points: 9,
			},
			{
				text: "Goes to the Bathroom Often",
				points: 6,
			},
			{
				text: "Leaves",
				points: 3,
			},
		],
	},
	{
		id: 4,
		description: "ONLINE GAMES",
		title: "Ten most popular PC Games (as of February 2021)",
		source: "https://newzoo.com/insights/rankings/top-20-pc-games",
		entries: [
			{
				text: "Among Us",
				points: 52,
			},
			{
				text: "Apex Legends",
				points: 44,
			},
			{
				text: "Call of Duty: Black Ops Cold War OR Modern Warfare/Warzone",
				points: 38,
			},
			{
				text: "Counter Strike: Global Offensive",
				points: 31,
			},
			{
				text: "Cyberpunk 2077",
				points: 27,
			},
			{
				text: "Fortnite",
				points: 25,
			},
			{
				text: "Forza Horizon 4",
				points: 21,
			},
			{
				text: "Genshin Impact",
				points: 20,
			},
			{
				text: "Grand Theft Auto V",
				points: 15,
			},
			{
				text: "League of Legends",
				points: 12,
			},
		],
	},
	{
		id: 5,
		description: "ANIME 1",
		title: "Top 7 Anime of All Time",
		source:
			"https://www.wheninmanila.com/japan-survey-reveals-the-top-100-anime-of-all-time-check-out-the-top-10/ ",
		entries: [
			{
				text: "One Piece",
				points: 33,
			},
			{
				text: "Demon Slayer",
				points: 29,
			},
			{
				text: "Slam Dunk",
				points: 26,
			},
			{
				text: "Detective Conan",
				points: 25,
			},
			{
				text: "Dragon Ball",
				points: 22,
			},
			{
				text: "Attack on Titan",
				points: 21,
			},
			{
				text: "Naruto",
				points: 19,
			},
		],
	},
	{
		id: 6,
		description: "ANIME 2",
		title: "Name a Japanese word / phrase anime fans use in real life",
		source:
			"https://www.reddit.com/r/anime/comments/buygry/anime_family_feud_results_are_here/",
		entries: [
			{
				text: "Nani (what)",
				points: 22,
			},
			{
				text: "Baka (idiot)",
				points: 21,
			},
			{
				text: "Kawaii (cute)",
				points: 17,
			},
			{
				text: "Otaku (nerd)",
				points: 6,
			},
			{
				text: "Senpai (upperclassmen)",
				points: 6,
			},
		],
	},
	{
		id: 7,
		description: "LOCKDOWN TRENDS",
		title: "Viral Quarantine Trends in 2020",
		source:
			"https://www.preview.ph/culture/best-quarantine-trends-2020-a00268-20201228",
		entries: [
			{
				text: "Dalgona coffee",
				points: 28,
			},
			{
				text: "Tiktok",
				points: 27,
			},
			{
				text: "Baking / cooking (banana bread, ube pandesal, baked sushi)",
				points: 16,
			},
			{
				text: "Binge-watching Netflix / K-Dramas",
				points: 16,
			},
			{
				text: "Zoom meetings / parties",
				points: 7,
			},
			{
				text: "Becoming a plantito / plantita",
				points: 6,
			},
		],
	},
	{
		id: 8,
		description: "MOST HATED PROGRAMMING LANGUAGE",
		title: "Most Hated Programming Language (PL) based on Stack Overflow Devs",
		source:
			"https://www.businessinsider.com/stack-overflow-developer-survey-10-most-dreaded-programming-languages-2020-5#2-objective-c-9",
		entries: [
			{
				text: "Visual Basic/VBA",
				points: 40,
			},
			{
				text: "Objective-C",
				points: 33,
			},
			{
				text: "Perl",
				points: 32,
			},
			{
				text: "Assembly",
				points: 30,
			},
			{
				text: "C",
				points: 28,
			},
			{
				text: "Php",
				points: 23,
			},
			{
				text: "Ruby",
				points: 18,
			},
			{
				text: "C++",
				points: 15,
			},
			{
				text: "Java",
				points: 9,
			},
			{
				text: "R",
				points: 5,
			},
		],
	},
	{
		id: 9,
		description: "KDRAMA",
		title: "Best Korean Dramas of All Time",
		source: "https://www.ranker.com/list/best-korean-dramas/onlysuy",
		entries: [
			{
				text: "Goblin",
				points: 35,
			},
			{
				text: "Moon Lovers: Scarlet Heart Ryeo",
				points: 31,
			},
			{
				text: "Strong Woman Do Bong Soon",
				points: 28,
			},
			{
				text: "Crash Landing on You",
				points: 24,
			},
			{
				text: "Descendants of the Sun",
				points: 21,
			},
			{
				text: "While You Were Sleeping",
				points: 16,
			},
			{
				text: "My Love from the Star",
				points: 10,
			},
		],
	},
	{
		id: 10,
		description: "APPLIANCES",
		title: "Name something you always have to keep plugged in.",
		source: "https://hobbylark.com/party-games/list-of-family-feud-questions",
		entries: [
			{
				text: "TV",
				points: 33,
			},
			{
				text: "Phone",
				points: 25,
			},
			{
				text: "Computer",
				points: 24,
			},
			{
				text: "Lamp",
				points: 11,
			},
			{
				text: "Headphones",
				points: 2,
			},
			{
				text: "Computer Mouse",
				points: 2,
			},
		],
	},
	{
		id: 11,
		description: "GOOD MORNING",
		title: "What is the first thing most people do in the morning?",
		source: "https://hobbylark.com/party-games/list-of-family-feud-questions",
		entries: [
			{
				text: "Bathroom",
				points: 24,
			},
			{
				text: "Shower",
				points: 19,
			},
			{
				text: "Breakfast",
				points: 18,
			},
			{
				text: "Open eyes",
				points: 15,
			},
			{
				text: "Turn off alarm / snooze",
				points: 12,
			},
			{
				text: "Brush teeth",
				points: 7,
			},
			{
				text: "Get dressed",
				points: 2,
			},
		],
	},
];
export default data;
