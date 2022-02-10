import { useState } from "react";
import "./App.css";

// let count = 0;

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count++;
    setCount(count + 1);
    return console.log("hallo", count);
  };

  return (
    <>
      <div onClick={handleClick}>Hallo das ist mein Count: {count}</div>
      <div>Hallo das bin ich wieder</div>
    </>
  );
}

export default App;
