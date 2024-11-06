import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <button>Checkout</button>}
    </div>
  );
};

export default Cart;
