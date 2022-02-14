import React, { useEffect, useState } from "react";

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<string | number>("foo");

  useEffect(() => {
    console.log("effect");
    // subscribed

    // return () => {
    //   console.log("clean up");
    //   // unsubscribed
    // };
  }, [value]); // {} === {}

  const incrementCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCount(count + 1);
    console.log(count);
    if (count > 5) {
      // bar -> bar
      setValue("bar");
    }
  };

  console.log("render");

  return <button onClick={incrementCount}>{`Count: ${count}`}</button>;
};

export default Counter;
