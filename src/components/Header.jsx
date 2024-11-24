import React, { useState } from "react";

import facebook from '../imgs/icons/f.webp';
import instagram from '../imgs/icons/i.webp';
import twitter from '../imgs/icons/t.webp';
import youtube from '../imgs/icons/y.webp';
import linkedin from '../imgs/icons/l.webp';
import logo from '../imgs/logonew.png';
import { HiMenuAlt3 } from "react-icons/hi";



const Header = () => {
  const [toggle , setToggle] = useState(false);

  return (
    <>
      <header className='w-full z-10'>
        <div className='top-bar bg-[#029390] text-sm md:flex hidden justify-end p-2 pr-8 gap-10'>
          <img className='w-[30px]' src={facebook} alt='' />
          <img className='w-[30px]' src={instagram} alt='' />
          <img className='w-[30px]' src={twitter} alt='' />
          <img className='w-[30px]' src={youtube} alt='' />
          <img className='w-[30px]' src={linkedin} alt='' />
        </div>

        <div className='shadow-lg border  items-center justify-between p-4 md:flex hidden'>
          <div className='logo  top-8 z-10 relative bg-red-300 w-[120px]'>
            <img
              src={logo}
              alt=''
              className='absolute left-5 bottom-[-25px] scale-400'
            />
          </div>

          <ul className='flex sm:gap-5 lg:gap-10 gap-10'>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              Home
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              About us
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              TIC
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              Training
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              Programs
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              Media
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              Contact Us
            </li>
          </ul>
        </div>

        {/* hamburgur menu */}
      </header>

      <div className='flex md:hidden  items-center justify-between px-4'>
        <img src={logo} alt='' className='w-[80px]' />
        <HiMenuAlt3
          className='text-3xl font-[300] cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {/* end hamburgur menu */}

      {/* side bar  */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setToggle(false);
        }}
        className={`fixed z-10 top-0 md:hidden w-full h-screen bg-[rgba(0,0,0,0.6)] ${
          toggle ? "translate-x-0" : "translate-x-[-1000px]"
        }`}
      ></div>

      <div
        className={`fixed top-0 md:hidden bg-white z-20 h-screen sm:w-[80%] w-full p-3 transition-transform duration-300 ease-in-out transform ${
          toggle ? "translate-x-0" : "translate-x-[-1000px]"
        }`}
      >
        <div id='nav-bar' className='flex items-center justify-between'>
          <a href='#' className='flex items-center gap-2'>
            <img
              src='./assets/asset 0.png'
              alt=''
              className='object-cover max-w-12 max-h-12'
            />
            <span>ToDesktop</span>
          </a>

          <button className='md:hidden' onClick={() => setToggle(!toggle)}>
            <i className='fa-solid fa-close text-xl'></i>
          </button>
        </div>

        <div className='flex flex-col text-md px-3 gap-3 mt-8' id='menu-items'>
          <a
            className='font-semibold p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            HOME
          </a>
          <a
            className='font-semibold p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            ABOUT US
          </a>
          <a
            className='font-semibold p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            TIC
          </a>
          <a
            className='font-semibold p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            PROGRAMS
          </a>
          <a
            className='font-semibold p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            MEDIA
          </a>
          <a
            className='font-semibold p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            CONTACT
          </a>
        </div>
      </div>
    </>
  );
};








export default Header;
