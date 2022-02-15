import React from "react";
import useBooks from "../hooks/useBooks";
import BookListItem from "./BookListItem";

export const BookList: React.VFC = () => {
  const [books] = useBooks();
  return (
    <>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          // using 'isbn' as a unique key
          <BookListItem title={book.title} key={book.isbn} />
        ))}
      </ul>
    </>
  );
};

export default BookList;
