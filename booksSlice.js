import { createSlice } from "@reduxjs/toolkit";
import booksData from "../booksData";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    allBooks: booksData,
    filteredBooks: booksData,
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.filteredBooks =
        action.payload === "All"
          ? state.allBooks
          : state.allBooks.filter((book) => book.category === action.payload);
    },
    searchBooks: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredBooks = state.allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText)
      );
    },
    addBook: (state, action) => {
      const newBook = { id: state.allBooks.length + 1, ...action.payload };
      state.allBooks.push(newBook);
      state.filteredBooks.push(newBook);
    },
  },
});

export const { filterByCategory, searchBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;
