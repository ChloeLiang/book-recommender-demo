import React, { useState, useEffect, useContext } from 'react';
import Book from '../Book';
import { BooksContext } from '../../context';
import { transformToPayload } from '../../utils';
import { getRecommendedBooks } from '../../services/recommender';

export default function Recommend() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(BooksContext);
  const { ratedBooks } = context;

  const fetchRecommendedBooks = async payload => {
    try {
      setIsLoading(true);
      const { data: books } = await getRecommendedBooks(payload);
      setIsLoading(false);
      setRecommendedBooks(books);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (ratedBooks.isbn.length > 0) {
      const payload = transformToPayload(ratedBooks);
      fetchRecommendedBooks(payload);
    }
  });

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {recommendedBooks.map(book => (
        <Book
          key={book.ISBN}
          isbn={book.ISBN}
          title={book.title}
          author={book.author}
          year={book.year}
          img={book.image}
        />
      ))}
    </div>
  );
}
