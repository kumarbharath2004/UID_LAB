// src/App.js
import React, { useState } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]); // Add new item to the list
  };

  return (
    <div style={styles.appContainer}>
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#eaeaea',
    padding: '20px',
  },
};

export default App;
