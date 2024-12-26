import React from "react";

const FinishedScreen = ({ points, maxPossiblePoints }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      your Scored <strong>{points}</strong>
      out of
      {maxPossiblePoints} ({Math.ceil(percentage)})
    </p>
  );
};

export default FinishedScreen;

222;
