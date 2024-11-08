import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./Features/Counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleByAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Cout:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br /> <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleByAmount}>Inc By Amount</button>
    </div>
  );
};

export default App;
