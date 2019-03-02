import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavItem.module.scss';

export default function NavItem({ path, children }) {
  return (
    <li className={style.navItem}>
      <NavLink to={path}>{children}</NavLink>
    </li>
  );
}
