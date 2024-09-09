// create basic layout
import React from 'react';
import { useEffect, useState } from 'react';

export const LayoutWithoutHeader = ({ children }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Home Rerendered');
  }, []);

  useEffect(() => {
    console.log('Home every render');
  });

  const count = () => {
    setCounter((prevVal) => prevVal+ 1);
  }

  return (
    <div>
      <div>counter: {counter}</div>
      <button onClick={count}>Count {counter}</button>
      {children}
    </div>
  );
};