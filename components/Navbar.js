import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl m-auto flex items-center md:h-20 h-16 px-4 text-white">
        <h1 className="w-full md:text-3xl text-xl font-bold">Brand</h1>
        <ul className="hidden md:flex text-lg">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full bg-black border-r border-r-gray-900 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full pt-1 m-4 md:text-3xl text-xl font-bold text-white">
            Brand
          </h1>
          <ul className="uppercase p-2">
            <li className="p-4 border-b border-b-gray-400" onClick={handleNav}>
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 border-b border-b-gray-400" onClick={handleNav}>
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 border-b border-b-gray-400" onClick={handleNav}>
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 border-b border-b-gray-400" onClick={handleNav}>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
