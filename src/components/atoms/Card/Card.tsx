import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";

function Card({
  showAnswers = false,
  answer = "Your Answer",
  points = 10,
  index = "",
  description = "",
  onClick = () => {},
}) {
  return (
    <div
      className={`card ${showAnswers ? "shown-answers" : ""}`}
      onClick={onClick}
    >
      {showAnswers ? (
        <>
          <h3>{answer}</h3>
          <h3>{points}</h3>
        </>
      ) : (
        <>
          {description !== "" ? (
            <h3 className="show-on-hover">{description}</h3>
          ) : (
            <h3>{index}</h3>
          )}
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  showAnswers: PropTypes.bool,
  answer: PropTypes.string,
  points: PropTypes.number,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
