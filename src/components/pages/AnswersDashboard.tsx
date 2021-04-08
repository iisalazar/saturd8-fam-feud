import React from "react";
import { useHistory } from "react-router-dom";
import { default as data } from "../../data.json";
import Card from "../atoms/Card";
const categories = data;

function AnswersDashboard() {
	const history = useHistory();
	const openCategory = (id: number) => {
		history.push(`/answers/${id}`);
	};
	return (
		<>
			<h1>Answers</h1>
			<div className="content">
				<div className="cards">
					{categories.map((category) => (
						<Card
							key={category.id}
							index={category.description}
							onClick={() => openCategory(category.id)}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default AnswersDashboard;
