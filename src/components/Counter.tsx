import { Action, Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreT } from "../store";
import { increment, decrement } from "../store/slices/count";

const Counter: React.VFC = () => {
  // selector returns a slice of the entire redux store
  const count = useSelector<StoreT>((state) => state.count);
  const dispatch = useDispatch<Dispatch<Action>>();

  const incrementCount = () => dispatch(increment());
  const decrementCount = () => dispatch(decrement());

  // { type: 'count/decrement' }

  return (
    <React.Fragment>
      <button onClick={incrementCount}>{`Count: ${count}`}</button>;
      <button onClick={decrementCount}>{"Decrement"}</button>;
    </React.Fragment>
  );
};

export default Counter;
