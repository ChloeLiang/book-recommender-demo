import { transformToPayload } from '.';
import { config } from '../config';

describe('# Utils', () => {
  it('should return transformed payload', () => {
    const ratedBooks = {
      isbn: ['0140386645', '0142000663', '0345337662', '0439064864'],
      rating: [8, 10, 5, 9],
    };

    const expectedPayload = {
      columns: ['user', 'ISBN', 'rating'],
      index: [0, 1, 2, 3],
      data: [
        [config.userId, '0140386645', 8],
        [config.userId, '0142000663', 10],
        [config.userId, '0345337662', 5],
        [config.userId, '0439064864', 9],
      ],
    };

    expect(transformToPayload(ratedBooks)).toEqual(expectedPayload);
  });

  it('should return null if isbn and rating array do not have equal length', () => {
    const ratedBooks = {
      isbn: ['0140386645', '0142000663'],
      rating: [8],
    };

    expect(transformToPayload(ratedBooks)).toBeNull();
  });
});
