import { useState } from "react";
import "./App.css";

function App() {
  const [c, setC] = useState<number>(0);

  const handleClick = () => {
    setC(c + 1);
  };

  return (
    <>
      <div onClick={handleClick}>
        Hallo das ist mein Count: {count} das ist ein weiterer Text
      </div>
      <div>Hallo das bin ich wieder</div>
    </>
  );
}

export default App;

// const handleClick = () => {
//   countInside++;
//   setCount1(count + 1);
//   setCount2(count + 2);

//   setCounts([counts[0] + 1, counts[1] + 2]);

//   console.log("setState:", count1);
//   console.log("countInside", countInside);
// };
