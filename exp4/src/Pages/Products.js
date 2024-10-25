// src/pages/Products.js
import React from 'react';
import './Products.css';

function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
    { id: 3, name: 'Product 3', price: '$30' },
  ];

  return (
    <div className="products">
      <h1><centerOur Products></centerOur></h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
