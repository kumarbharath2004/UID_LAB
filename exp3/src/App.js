// src/App.js
import React from 'react';
import Calculator from './Calculator';

function App() {
  return (
    <div style={styles.appContainer}>
      <Calculator />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff', // Light blue background color
  },
};

export default App;
