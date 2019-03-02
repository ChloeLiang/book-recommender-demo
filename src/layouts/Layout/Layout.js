import React from 'react';
import Navigation from '../../components/Navigation';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
