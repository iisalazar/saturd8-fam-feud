import { Category } from "./interfaces";

const data: Array<Category> = [
	{
		id: 1,
		description: "UP and stuff",
		title: "Top 5 Most Single Campus",
		entries: [
			{
				text: "UP Diliman",
				points: 60,
			},
			{
				text: "UP Visayas",
				points: 50,
			},
			{
				text: "UP Manila",
				points: 40,
			},
			{
				text: "UP Baguio",
				points: 30,
			},
			{
				text: "UP Los Banos",
				points: 20,
			},
			{
				text: "UP Mindanao",
				points: 10,
			},
		],
	},
	{
		id: 2,
		description: "Appliances",
		title: "Top 3 Used Appliance",
		entries: [
			{
				text: "Electric Fan",
				points: 100,
			},
			{
				text: "Electrice Stove",
				points: 90,
			},
			{
				text: "TV",
				points: 80,
			},
		],
	},
];
export default data;
