import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewCart from '../ReviewCart/ReviewCart';
import CheckoutCart from '../CheckoutCart/CheckoutCart';
import { useState } from 'react';
import { deleteLocalCart, removeItemLocaL } from '../../utilitis/utilitis';
const ReviewCartSection = () => {
  const carts = useLoaderData();
  const [cart, setCart] = useState(carts);
  const removeItemFromCart = phone => {
    const restPhone = cart.filter(ph => ph.slug !== phone.slug);
    setCart(restPhone);
    removeItemLocaL(phone.slug);
  };
  return (
    <div className="flex w-10/12  mx-auto justify-between items-center">
      <div>
        {cart.map(phone => (
          <CheckoutCart
            removeItemFromCart={removeItemFromCart}
            phone={phone}
            key={phone.slug}
          ></CheckoutCart>
        ))}
      </div>
      <div className="lg:w-1/3 p-5 sticky top-0 h-fit bg-orange-300">
        <ReviewCart cart={cart}>
          <Link to="/review">
            <button className="btn btn-warning w-full">Checkout</button>
          </Link>
        </ReviewCart>
      </div>
    </div>
  );
};

export default ReviewCartSection;
