 

import React, { useRef, useState } from 'react';
import "./Counter.css";

const Counter = () => {
  const [num, setNum] = useState(0);
  const reference = useRef();

  const handle = () => {
    const value = parseInt(reference.current.value);
  if (Number.isInteger(value)) {
  setNum(value);
} else {
  alert("Enter a valid integer!");
}
  };

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <>
      <button className='btn'>COUNTER APP</button>

      <br />
      <h3>Enter the Value </h3>
      <input type="number" className='valuebox' ref={reference} placeholder='0' />
      <br /><br />
      <button className='formbtn' onClick={handle}>Submit</button>
      <br /><br /><br />

      <h2 className='op'>Output</h2>
      <h2>Value: {num}</h2>
      <br /><br />

      <button onClick={increase} className="final">Increment +</button>
      <button onClick={decrease} className="final">Decrement -</button>
      <button onClick={reset} className='final'>Reset</button>
    </>
  );
};

export default Counter;
