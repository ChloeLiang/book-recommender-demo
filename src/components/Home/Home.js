import React, { useContext } from 'react';
import Book from '../Book';
import { BooksContext } from '../../context';
import { allBooks } from '../../data/books';
import style from './Home.module.scss';

export default function Home() {
  const context = useContext(BooksContext);
  const { numOfBooksLoaded, setNumOfBooksLoaded } = context;

  function handleLoadMore() {
    setNumOfBooksLoaded(numOfBooksLoaded + 20);
  }

  return (
    <React.Fragment>
      <div className={style.container}>
        {allBooks.slice(0, numOfBooksLoaded).map(book => (
          <Book
            key={book.ISBN}
            isbn={book.ISBN}
            title={book.title}
            img={book.image}
            author={book.author}
            year={book.year}
            rating={book.rating}
          />
        ))}
      </div>
      <div className={style.btnContainer}>
        <button className={style.loadButton} onClick={handleLoadMore}>
          Load more
        </button>
      </div>
    </React.Fragment>
  );
}
