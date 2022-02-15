import React from "react";
import useBook from "../hooks/useBook";
import { BookI } from "../models/Book";

type BookProps = Pick<BookI, "isbn">;

type UseBookHook = (BookI | (() => Promise<void>) | undefined)[];

type MyArray = (string | number)[];

const Book: React.VFC<BookProps> = ({ isbn }) => {
  const [book, fetchData] = useBook(isbn);

  return book ? (
    <>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  ) : (
    <span onClick={fetchData}>...loading</span>
  );
};

export default Book;
