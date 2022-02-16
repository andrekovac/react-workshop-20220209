import { useState } from "react";
import Book from "../components/Book";
import Counter from "../components/Counter";
import MyForm from "../components/MyForm";
import Name from "../components/Name";
import useBook from "../hooks/useBook";

const Playground = () => {
  const [showCounter, setShowCounter] = useState(true);

  const [book, fetchData] = useBook("9781484201497");

  const names = ["Andre", "Hans", "Janine", "Michelle"];
  return (
    <>
      <h3>Form</h3>
      <MyForm />

      <h3>Book</h3>
      <Book book={book} fetchData={fetchData} />

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
