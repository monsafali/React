import React from "react";

const Chidlcomponent = React.memo((props) => {
  console.log("Child Compoent go re-render again");
  return (
    <div>
      <button onClick={props.handleClick}>{props.buttonName}</button>
    </div>
  );
});

export default Chidlcomponent;
