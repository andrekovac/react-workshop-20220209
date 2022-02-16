import React from "react";
import { BookI } from "../models/Book";

// type BookProps = Pick<BookI, "isbn"> & { onFetchFinished: () => void };
type BookProps = {
  book: BookI | undefined;
  fetchData: () => void;
};

const Book: React.VFC<BookProps> = ({ book, fetchData }) => {
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
