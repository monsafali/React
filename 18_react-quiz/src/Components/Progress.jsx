import React from "react";

const Progress = ({ index, numQuestions, points, maxPossiblePoints }) => {
  return (
    <header className="progress">
      <p>
        Question <strong>{index}</strong>/ {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
