// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize count state

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1); // Decrement the count
  };

  const reset = () => {
    setCount(0); // Reset the count to zero
  };

  return (
    <div style={styles.container}>
      <h2>Counter Application</h2>
      <div style={styles.counterDisplay}>{count}</div>
      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.button}>+</button>
        <button onClick={decrement} style={styles.button}>-</button>
        <button onClick={reset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

// Styles for the counter
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
  },
  counterDisplay: {
    fontSize: '48px',
    margin: '20px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Counter;
