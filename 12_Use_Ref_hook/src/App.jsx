// import React, { useEffect, useRef, useState } from "react";
// import "./App.css";
// const App = () => {
//   const [count, setcount] = useState(0);

//   let val = useRef(0);
//   function Sumission() {
//     val.current = val.current + 1;
//     console.log("Value of val:", val);
//     setcount(count + 1);
//   }

//   let btnRef = useRef();
//   function ChangeColor() {
//     btnRef.current.style.background = "red";
//   }
//   useEffect(() => {
//     console.log("Main pher se render ho gaya", count);
//   });

//   return (
//     <>
//       <button ref={btnRef} onClick={Sumission}>
//         Click Me
//       </button>
//       <p>Count is : {count}</p>
//       <br />
//       <button onClick={ChangeColor}>ChangeColor Me</button>
//     </>
//   );
// };
// import "./App.css";
// export default App;

import React from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
  let timerRef = useRef(null);
  const [time, setTime] = useState(0);
  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function StopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function ResetTimer() {
    StopTimer();
    setTime(0);
  }
  return (
    <div>
      <h1>StopWatch: {time} second</h1>
      <button onClick={startTimer}>Start</button>
      <br /> <br />
      <button onClick={StopTimer}>Stop</button>
      <br /> <br />
      <button onClick={ResetTimer}>Reset</button>
    </div>
  );
};

export default App;
