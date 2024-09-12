import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())} className="btn btn-success">Increment by 1</button>
      <button onClick={() => dispatch(decrement())} className="btn btn-danger">Decrement by 1</button>
      <button
        onClick={() => {
          let userInput = Number(prompt("Enter increment amount"));
          dispatch(incrementByAmount(userInput));
        }}
      className="btn btn-success">
        Increment by amount
      </button>
      <button
        onClick={() => {
          let userInput = Number(prompt("Enter increment amount"));
          dispatch(decrementByAmount(userInput));
        }}
      className="btn btn-danger">
        Decrement by amount
      </button>
    </>
  );
};

export default Counter;
