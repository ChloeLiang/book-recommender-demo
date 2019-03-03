import React, { useContext } from 'react';
import Book from '../Book';
import { BooksContext } from '../../context';
import { allBooks } from '../../data/books';
import style from './Home.module.scss';

export default function Home() {
  const context = useContext(BooksContext);
  const { books, setBooks } = context;

  function handleLoadMore() {
    setBooks(books.concat(allBooks.slice(books.length, books.length + 20)));
  }

  return (
    <React.Fragment>
      <div className={style.container}>
        {books.map(book => (
          <Book
            key={book.ISBN}
            isbn={book.ISBN}
            title={book.title}
            img={book.image}
            author={book.author}
            year={book.year}
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
