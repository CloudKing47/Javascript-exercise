import React, { useState ,useEffect} from 'react';
import './style.css';

import Button from './components/Button';

// Make an Increment and Decremnet counter application using React functional component:
// Note: 1 ) Use react functional component
//
// Example:
//
//  =======================================
//  |                                     |
//  |  Counter: 1                         |
//  |                                     |
//  |  ---------------   ---------------  |
//  |  | Increment + |   | Decremnet - |  |
//  |  ---------------   ---------------  |
//  |                                     |
//  =======================================
//

export default function App() {
  const [count, setCount] = useState(0);

  const dropdownValue = [
    {
      id: 1,
      val: 1,
    },
    {
      id: 2,
      val: 2,
    },
    {
      id: 3,
      val: 3,
    },
    {
      id: 4,
      val: 4,
    },
    {
      id: 5,
      val: 5,
    },
  ];


  const counterHand = (type) => {
    if (type === 'incr') {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const addValueToCounter = (event) => {

    const { value } = event.target;
    setCount((prev) => prev + parseInt(value));

  };
  return (
    <div>
      <span>Counter : {count}</span>
      <div style={{ display: 'flex' }}>
        <Button title="Increment" counterHandler={() => counterHand('incr')} />
        <Button title="Decrement" counterHandler={() => counterHand('decr')} />
      </div>
      <select onChange={(event) => addValueToCounter(event)}>
      <option>Select</option>
        {dropdownValue?.map((item, index) => (
          <>
          <option>{item.val}</option>
        </>
        ))}
      </select>
    </div>
  );
}



//button

import React, { useState } from 'react';

export default function Button({ counterHandler, title }) {
  return (
    <div>
      <div style={{ margin: 10 }}>
        <button onClick={counterHandler}>{title}</button>
      </div>
    </div>
  );
}
