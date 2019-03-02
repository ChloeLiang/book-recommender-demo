import React from 'react';

import Logo from '../Logo';
import NavItem from './NavItem';

import style from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={style.navbar}>
      <Logo />
      <ul>
        <NavItem path="/">Explore</NavItem>
        <NavItem path="/rated">Rated</NavItem>
        <NavItem path="/recommend">Recommend</NavItem>
      </ul>
    </nav>
  );
}
