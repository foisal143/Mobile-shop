import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
const CheckoutCart = ({ phone, removeItemFromCart }) => {
  console.log(phone);
  const { phone_name, brand, image } = phone;
  return (
    <div className="border flex my-5 justify-between items-center border-slate-200 p-2 rounded-md w-[500px]">
      <img className="w-20 h-full" src={image} alt="" />
      <div className="flex-grow ms-5 flex justify-between items-center">
        <div>
          <h2>{phone_name}</h2>
          <p>{brand}</p>
        </div>
        <button
          onClick={() => removeItemFromCart(phone)}
          className="p-4 rounded-full bg-red-300"
        >
          <TrashIcon className="w-6 h-6 text-white"></TrashIcon>
        </button>
      </div>
    </div>
  );
};

export default CheckoutCart;
