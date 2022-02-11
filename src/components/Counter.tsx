import React, { useState } from "react";

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return <button onClick={incrementCount}>{`Count: ${count}`}</button>;
};

export default Counter;
