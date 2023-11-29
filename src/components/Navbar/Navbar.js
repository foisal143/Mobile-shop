import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 z-10 sticky top-0 px-5 md:px-12 text-white flex justify-between items-center h-20">
      <div>
        <Link className="text-2xl font-bold" to="/">
          MOBLIE SHOP
        </Link>
      </div>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-white"></XMarkIcon>
        ) : (
          <Bars3Icon className="w-6 h-6 text-white"></Bars3Icon>
        )}
      </span>
      <ul
        className={`flex md:static h-full duration-200 ${
          isOpen ? 'right-0' : '-right-96'
        } bg-gray-800 fixed top-20 right-0 flex-col md:flex-row gap-5 md:justify-evenly items-center w-1/4 md:w-1/3 `}
      >
        <NavLink
          to="/"
          className={({ isActive }) => isActive && 'text-orange-500'}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => isActive && 'text-orange-500'}
        >
          Shop
        </NavLink>
        <NavLink
          to="/review"
          className={({ isActive }) => isActive && 'text-orange-500'}
        >
          Review Product
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => isActive && 'text-orange-500'}
        >
          Login
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
