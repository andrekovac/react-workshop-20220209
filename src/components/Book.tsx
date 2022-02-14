import React, { useState, useEffect, useCallback } from "react";

//
interface BookI {
  isbn: string;
  title?: string;
  subtitle?: string;
  numPages?: number;
}

type BookProps = Pick<BookI, "isbn">;

const Book: React.VFC<BookProps> = ({ isbn }) => {
  const [book, setBook] = useState<BookI | undefined>();

  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const data = await response.json();
    setBook(data);
  }, [isbn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return book ? (
    <>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  ) : (
    <span>...loading</span>
  );
};

export default Book;
