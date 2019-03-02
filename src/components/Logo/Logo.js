import React from 'react';

import logo from '../../assets/logo.png';
import style from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={style.logo}>
      <img src={logo} alt="Book Recommender Logo" />
    </div>
  );
}
