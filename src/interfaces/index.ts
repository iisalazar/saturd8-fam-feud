export interface Entry {
	text: string;
	points: number;
	show?: boolean;
}

export interface Category {
	id: number;
	title: string;
	description: string;
	entries: Array<Entry>;
}
