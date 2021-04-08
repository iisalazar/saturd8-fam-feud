import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { default as data } from "../../data.json";
import { Entry } from "../../interfaces";
import Card from "../atoms/Card";

function QuestionsPage() {
	const params = useParams<{ id: string }>();
	const { id } = params;
	const category = data.filter((category) => category.id === parseInt(id))[0];

	const toggleShow = (entry: Entry) => {
		const newEntries = entries.map((e) => {
			if (e.text === entry.text) e.show = !e.show;
			return e;
		});
		console.log(entry);
		setEntries(newEntries);
	};
	const [entries, setEntries] = useState<Array<Entry>>([]);
	useEffect(() => {
		setEntries(
			category.entries.map((entry: Entry) => {
				return {
					...entry,
					show: false,
				};
			})
		);
	}, []); // eslint-disable-line

	return (
		<>
			<h1>{category.title}</h1>
			<div className="content">
				<div className="cards">
					{entries.map((entry: Entry, idx) => (
						<Card
							key={idx}
							index={(idx + 1).toString()}
							showAnswers={entry.show}
							answer={entry.text}
							points={entry.points}
							onClick={() => toggleShow(entry)}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default QuestionsPage;
