import React from 'react';
import Navigation from '../../components/Navigation';
import style from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className={style.mainContainer}>{children}</main>
    </div>
  );
}
