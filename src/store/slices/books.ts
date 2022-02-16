import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

interface BooksState {
  books: BookI[];
}

const initialState: BooksState = { books: [] };

export type AddBooksAction = PayloadAction<BookI[]>;

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks(state, action: AddBooksAction) {
      // TODO: what do you have to return?
      return {
        books: action.payload,
      };
    },
  },
});

export const { addBooks } = booksSlice.actions;

export default booksSlice.reducer;
