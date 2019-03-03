import React from 'react';

export const BooksContext = React.createContext({
  numOfBooksLoaded: 0,
  setNumOfBooksLoaded() {},
  ratedBooks: { isbn: [], rating: [] },
  setRatedBooks() {},
});
