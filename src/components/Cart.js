import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Add function to handle cart item management

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button>Remove</button>
          </div>
        ))
      )}
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
