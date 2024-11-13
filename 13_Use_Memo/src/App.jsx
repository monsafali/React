import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // Write funtion
  function expensiveTask(num) {
    console.log("insidee Expeinse Task");
    // for (let i = 0; i <= 10000000000000; i++) {}
    return num * 2;
  }
  let douibleValue = useMemo(() => expensiveTask(input), [input]);

  // use Memo funtion

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count is : {count}</div>
      <div>Dobule: {douibleValue}</div>
      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default App;
