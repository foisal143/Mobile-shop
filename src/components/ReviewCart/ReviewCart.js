import React from 'react';

const ReviewCart = ({ cart, children, handlerClearCart }) => {
  let quantity = 0;

  for (const phone of cart) {
    quantity = quantity + phone.quantity;
  }
  return (
    <div>
      <h2>Added phone: {quantity}</h2>
      <p>Shiping: $5</p>
      <p>Tax: $10</p>
      <button onClick={handlerClearCart} className="btn btn-error w-full my-5">
        Clear Cart
      </button>
      {children}
    </div>
  );
};

export default ReviewCart;
