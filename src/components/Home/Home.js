import React, { useContext } from 'react';
import Book from '../Book';
import { BooksContext } from '../../context';
import { allBooks } from '../../data/books';
import style from './Home.module.scss';

export default function Home() {
  const context = useContext(BooksContext);
  const { numOfBooksLoaded, setNumOfBooksLoaded, ratedBooks } = context;

  function handleLoadMore() {
    const numShouldLoad = numOfBooksLoaded + 20;
    const totalBooksInStore = allBooks.length;
    setNumOfBooksLoaded(
      numShouldLoad > totalBooksInStore ? totalBooksInStore : numShouldLoad
    );
  }

  return (
    <React.Fragment>
      <div className="container">
        {allBooks.slice(0, numOfBooksLoaded).map(book => {
          const foundIndex = ratedBooks.isbn.findIndex(
            isbn => book.ISBN === isbn
          );
          const rating =
            foundIndex !== -1 ? ratedBooks.rating[foundIndex] : null;

          return (
            <Book
              key={book.ISBN}
              isbn={book.ISBN}
              title={book.title}
              img={book.image}
              author={book.author}
              year={book.year}
              rating={rating}
            />
          );
        })}
      </div>
      {numOfBooksLoaded < allBooks.length && (
        <div className={style.btnContainer}>
          <button className={style.loadButton} onClick={handleLoadMore}>
            Load more
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
