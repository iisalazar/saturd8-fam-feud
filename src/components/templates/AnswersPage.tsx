import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { default as data } from "../../data.json";
import { Entry } from "../../interfaces";
import Card from "../atoms/Card";

function AnswersPage() {
	const params = useParams<{ id: string }>();
	const { id } = params;
	const category = data.filter((category) => category.id === parseInt(id))[0];

	const [entries, setEntries] = useState<Array<Entry>>([]);

	useEffect(() => {
		setEntries(
			category.entries.map((entry: Entry) => {
				return {
					...entry,
					show: true,
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
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default AnswersPage;
