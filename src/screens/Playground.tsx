import { useState } from "react";
import Book from "../components/Book";
import Counter from "../components/Counter";
import MyForm from "../components/MyForm";
import Name from "../components/Name";

const Playground = () => {
  const [showCounter, setShowCounter] = useState(true);

  const names = ["Andre", "Hans", "Janine", "Michelle"];
  return (
    <>
      <h3>Form</h3>
      <MyForm />

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

      {names.map((name) => {
        return <Name key={name}>{name}</Name>;
      })}
    </>
  );
};

export default Playground;
