import React from 'react';
import './Checkout.js'

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Card Information" required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
