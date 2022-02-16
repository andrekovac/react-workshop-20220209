import { configureStore, combineReducers } from "@reduxjs/toolkit";
import count from "./slices/count";
import books from "./slices/books";

export const rootReducer = combineReducers({
  books: books,
  count: count,
});

export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
