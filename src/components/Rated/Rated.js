import React, { useContext } from 'react';
import Book from '../Book';
import { BooksContext } from '../../context';
import { allBooks } from '../../data/books';
import style from './Rated.module.scss';

export default function Rated() {
  const context = useContext(BooksContext);
  const { ratedBooks } = context;

  return (
    <div className={style.container}>
      {allBooks.map(book => {
        const foundIndex = ratedBooks.isbn.findIndex(
          ratedISBN => book.ISBN === ratedISBN
        );

        if (foundIndex !== -1) {
          const rating = ratedBooks.rating[foundIndex];

          return (
            <Book
              key={book.ISBN}
              isbn={book.ISBN}
              title={book.title}
              author={book.author}
              year={book.year}
              img={book.image}
              rating={rating}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
