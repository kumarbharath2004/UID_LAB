// src/ItemList.js
import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div style={styles.listContainer}>
      <h2>Items List</h2>
      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul style={styles.list}>
          {items.map((item, index) => (
            <li key={index} style={styles.listItem}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Styles for the item list
const styles = {
  listContainer: {
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    borderBottom: '1px solid #ccc',
    padding: '10px 0',
  },
};

export default ItemList;
