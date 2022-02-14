import { useState } from "react";
import "./App.css";
import Book from "./components/Book";
import Counter from "./components/Counter";
import Name from "./components/Name";

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  const names = ["Andre", "Hans", "Janine", "Michelle"];

  // <Name>Andre</Name>

  return (
    <div className="App">
      <h3>Book</h3>
      <Book isbn="9781484201497" />
      <h3>Rest</h3>
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        Toggle Counter View
      </button>

      {showCounter ? <Counter /> : null}
      {/* {<Counter />} */}
      {names.map((name) => {
        return <Name key={name}>{name}</Name>;
      })}
    </div>
  );
};

export default App;
