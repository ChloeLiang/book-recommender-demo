import { config } from '../config';

export function transformToPayload(ratedBooks) {
  const { isbn, rating } = ratedBooks;
  if (isbn.length !== rating.length) {
    return null;
  }

  return {
    columns: ['user', 'ISBN', 'rating'],
    index: Array.from(Array(isbn.length).keys()),
    data: isbn.map((isbn, index) => [config.userId, isbn, rating[index]]),
  };
}
