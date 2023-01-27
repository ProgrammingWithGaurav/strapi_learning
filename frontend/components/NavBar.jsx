import React from "react";
import Link from "next/link";

const NavBar = ({cart}) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5948/5948550.png"
            className="w-10 h-10 p-2 bg-indigo-500  rounded-full"
          />
          <span className="ml-3 text-xl">MyShop</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
          <Link href="/products" className="mr-5 hover:text-gray-900">Products</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
          <Link href="/checkout" className="mr-5 hover:text-gray-900">Cart({cart.length})</Link>
        </nav>
        <button className="my-2 text-white bg-indigo-500 border-0 py-1 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
 
      </div>
    </header>
  );
};

export default NavBar;
