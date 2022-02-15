import { useState } from "react";
import { BookI } from "../models/Book";

const useBook = (isbn: string) => {
  const [book, setBook] = useState<BookI>();

  const fetchData = async () => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const data = await response.json();
    setBook(data);
  };

  return [book, fetchData] as const;
};

export default useBook;
