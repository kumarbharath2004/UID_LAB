// src/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, description, quantity: Number(quantity) });
    setName('');
    setDescription('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Add New Item</h2>
      <div style={styles.inputGroup}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />
      </div>
      <button type="submit" style={styles.button}>Add Item</button>
    </form>
  );
};

// Styles for the form
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '20px',
    border: '2px solid #007bff',
    borderRadius: '10px',
    backgroundColor: '#f0f8ff',
  },
  inputGroup: {
    margin: '10px 0',
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

export default ItemForm;
