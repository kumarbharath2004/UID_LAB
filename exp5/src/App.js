// src/App.js
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div style={styles.appContainer}>
      <Counter />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#eaeaea',
  },
};

export default App;
