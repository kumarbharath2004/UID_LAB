// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
      setInput('');
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Simple Calculator</h2>
      <div style={styles.display}>
        <div>{input || '0'}</div>
        <div style={styles.result}>{result}</div>
      </div>
      <div style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <button key={value} onClick={() => value === '=' ? handleCalculate() : handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
      <button style={styles.clearButton} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

// Styles for the calculator
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    backgroundColor: '#fff', // White background color for the calculator
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  display: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '200px',
    marginBottom: '10px',
    textAlign: 'right',
    fontSize: '24px',
    backgroundColor: '	#f0f0f0', // Light gray background for the display
  },
  result: {
    fontSize: '18px',
    color: 'green',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  clearButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Calculator;
