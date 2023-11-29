import React from 'react';

const Cart = ({ phone, handlerAddToCart }) => {
  const { image, phone_name, slug, brand } = phone;
  return (
    <div className="border  flex justify-center items-center p-5 border-slate-200 rounded-md shadow-md">
      <div className="">
        <img src={image} alt="" />
        <h2 className="font-bold text-xl">{phone_name}</h2>
        <p>
          <span className="font-semibold">Brand:</span> {brand}
        </p>
        <button
          onClick={() => handlerAddToCart(phone)}
          className="px-6 mt-2 py-2 border border-slate-300 rounded-md hover:bg-orange-500 w-full transition-all duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
