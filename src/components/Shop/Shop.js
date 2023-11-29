import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import {
  addToDb,
  deleteLocalCart,
  getLocalData,
} from '../../utilitis/utilitis';
import ReviewCart from '../ReviewCart/ReviewCart';
const Shop = () => {
  const { data } = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localData = getLocalData();
    const newPhone = [];

    for (const slug in localData) {
      const product = data.find(ph => ph.slug === slug);
      if (product) {
        const quantity = localData[slug];
        product.quantity = quantity;
        newPhone.push(product);
      }
    }

    setCart(newPhone);
  }, [data]);

  const handlerAddToCart = phone => {
    // const newPhones = [...cart, phone];
    let newPhones = [];
    console.log(cart);
    const exist = cart.find(ph => ph.slug === phone.slug);
    console.log(exist);
    console.log(cart);
    if (!exist) {
      phone.quantity = 1;
      newPhones = [...cart, phone];
    } else {
      exist.quantity = exist.quantity + 1;
      const restPhone = cart.filter(ph => ph.slug !== phone.slug);

      newPhones = [...restPhone, exist];
    }

    setCart(newPhones);
    addToDb(phone.slug);
  };
  const handlerClearCart = () => {
    deleteLocalCart();
    setCart([]);
  };
  console.log(cart);
  return (
    <div className="flex flex-grow flex-col-reverse lg:flex-row justify-between my-12">
      <div className="md:px-12 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map(phone => (
          <Cart
            key={phone.slug}
            handlerAddToCart={handlerAddToCart}
            phone={phone}
          ></Cart>
        ))}
      </div>
      <div className="lg:w-1/3 p-5 sticky top-0 h-fit bg-orange-300">
        {
          <ReviewCart cart={cart} handlerClearCart={handlerClearCart}>
            <Link to="/review">
              <button className="btn btn-warning w-full">Review Phone</button>
            </Link>
          </ReviewCart>
        }
      </div>
    </div>
  );
};

export default Shop;
