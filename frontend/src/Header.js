import React from 'react';
export default function Header({ children }) {
  return (
    <header>
      <h1>Recembendo paramentros: {children}</h1>
      <hr />
      <small>Um site REACT</small>
    </header>
  );
}