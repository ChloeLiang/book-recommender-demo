import React, { useState } from 'react';
import classNames from 'classnames';
import style from './Book.module.scss';

export default function Book({ isbn, title, author, year, img, rating }) {
  const [numOfClicks, setNumOfClicks] = useState(0);

  function handleCardClick() {
    setNumOfClicks(numOfClicks + 1);
  }

  function handleButtonClick(rating) {}

  return (
    <div className={style.card} onClick={handleCardClick}>
      <div
        className={classNames(style.side, {
          [style.rotateFront]: numOfClicks % 2 === 1,
        })}
      >
        <div className={style.imgContainer}>
          <img src={img} alt={title} className={style.img} />
          {rating && (
            <React.Fragment>
              <div className={style.ratingContainer} />
              <span className={style.rating}>{rating}</span>
            </React.Fragment>
          )}
        </div>
        <div className={style.description}>
          <h2 className={style.title} title={title}>
            {title}
          </h2>
          <div className={style.meta} title={author}>
            <p className={style.author}>{author}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>

      <div
        className={classNames(style.side, style.back, {
          [style.rotateBack]: numOfClicks % 2 === 1,
        })}
      >
        <h2 className={style.titleBack}>Rating</h2>
        <div className={style.buttons}>
          {Array.from(Array(10).keys()).map(ratingIndex => (
            <span
              key={ratingIndex}
              className={style.rateButton}
              onClick={() => handleButtonClick(ratingIndex + 1)}
            >
              {ratingIndex + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
