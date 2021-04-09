export interface Entry {
	text: string;
	points: number;
	show?: boolean;
}

export interface Category {
	id: number;
	title: string;
	description: string;
	source?: string;
	entries: Array<Entry>;
}
