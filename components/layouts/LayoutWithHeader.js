// create basic layout
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const LayoutWithHeader = ({ children }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('LayoutWithHeader Rerendered');
  }, []);

  useEffect(() => {
    console.log('LayoutWithHeader every render');
  });

  const count = () => {
    setCounter((prevVal) => prevVal+ 1);
  }

  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/page-a">Page-A</Link></li>
          <li><Link href="/page-b">Page-B</Link></li>
        </ul>
      </nav>
      <div>{counter}</div>
      <button onClick={count}>Count {counter}</button>
      {children}
    </div>
  );
};