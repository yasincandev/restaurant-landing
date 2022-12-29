import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { CartIcon, SearchIcon, UserIcon } from "../Icons/Icons";

const Header: FC = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center  transition-transform px-4 z-50 ${
        navbar ? "bg-slate-50 bg-opacity-30   " : "bg-transparent"
      }`}
    >
      <div className='flex items-center'>
        <Image
          src='/logo.png'
          width={120}
          height={100}
          alt='logo'
          className='object-center object-cover'
        />
      </div>
      <div className='flex items-center font-semibold'>
        <ul className='flex  '>
          <li className='mr-6 underline underline-offset-2 decoration-mainRed '>
            <a href='#'>menu</a>
          </li>
          <li className='mr-6'>
            <a href='#'>about us</a>
          </li>
          <li className='mr-6'>
            <a href='#'>our specials</a>
          </li>
          <li className='mr-6'>
            <a href='#'>our chefs</a>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <ul className='flex'>
          <li className='mr-6 cursor-pointer'>
            <SearchIcon />
          </li>
          <li className='mr-6 cursor-pointer'>
            <CartIcon />
          </li>
          <li className='mr-6 cursor-pointer'>
            <UserIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
