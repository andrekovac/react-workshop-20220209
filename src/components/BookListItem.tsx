import React from "react";
import { BookI } from "../models/Book";

interface BookListItemProps {
  title: BookI["title"];
}

export const BookListItem: React.FC<BookListItemProps> = ({ title }) => {
  return <li>{title}</li>;
};

export default BookListItem;
