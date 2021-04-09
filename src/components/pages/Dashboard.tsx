import React from "react";
import { useHistory } from "react-router-dom";
import { default as data } from "../../data.json";
import Card from "../atoms/Card";
const categories = data;

function Dashboard() {
  const history = useHistory();
  const openCategory = (id: number) => {
    history.push(`/questions/${id}`);
  };
  return (
    <>
      <h1>Categories</h1>
      <div className="content">
        <div className="cards">
          {categories.map((category, idx) => (
            <Card
              key={category.id}
              index={idx.toString()}
              description={category.description}
              onClick={() => openCategory(category.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
