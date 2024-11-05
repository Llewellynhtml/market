import React, { useState, useEffect } from 'react';
import './ProductList.css';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch or initialize products here
    setProducts([
      { id: 1, name: 'Laptop', description: 'A powerful laptop', price: 999, category: 'Laptops' },
      { id: 2, name: 'Monitor', description: '4K Monitor', price: 299, category: 'Monitors' },
    ]);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
