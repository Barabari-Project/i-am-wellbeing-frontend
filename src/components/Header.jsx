import React, { useState } from "react";

import facebook from '../imgs/icons/f.webp';
import instagram from '../imgs/icons/i.webp';
import twitter from '../imgs/icons/t.webp';
import youtube from '../imgs/icons/y.webp';
import linkedin from '../imgs/icons/l.webp';
import logo from '../imgs/logonew.png';
import { HiMenuAlt3 } from "react-icons/hi";
import { BiDownArrowAlt , BiUpArrowAlt } from "react-icons/bi";


const Header = () => {
  const [toggle , setToggle] = useState(false);
  const [show , setShow] = useState(false); // state for side bar array to show and hide

  return (
    <>
      <header className='w-full shadow-md  border-b '>
        <div className='top-bar bg-[#029390] text-sm md:flex hidden justify-end p-2 pr-8 gap-10'>
          <img className='w-[30px]' src={facebook} alt='' />
          <img className='w-[30px]' src={instagram} alt='' />
          <img className='w-[30px]' src={twitter} alt='' />
          <img className='w-[30px]' src={youtube} alt='' />
          <img className='w-[30px]' src={linkedin} alt='' />
        </div>

        <div className='w-[100%] m-auto shadow-lg z-[-1]  items-center justify-end p-4  md:flex hidden relative'>
          <ul className='flex sm:gap-5 lg:gap-10 gap-10 pr-2'>
            <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
              Home
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
              About us
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
              TIC
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
              Training
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
              Programs
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
              Media
            </li>
            <li className='border border-black py-1 px-4 rounded-full text-center'>
              Contact Us
            </li>
          </ul>
        </div>

        <div className='logo z-10 w-[120px] absolute top-5 left-5 hidden md:block'>
          <img src={logo} alt='' className='' />
        </div>

        {/* hamburgur menu */}
      </header>

      <div className='flex md:hidden  items-center justify-between px-4 mobile-header'>
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
        className={`fixed border top-0 md:hidden bg-[#F9F7F6] z-20 inset-0 w-full sm:w-[80%]  transition-transform duration-300 ease-in-out transform ${
          toggle ? "translate-x-0" : "translate-x-[-1000px]"
        }`}
      >
        <div
          id='nav-bar'
          className='flex items-center justify-end w-[80%] m-auto bg-[#F9F7F6]'
        >
          <button className='md:hidden pt-2' onClick={() => setToggle(!toggle)}>
            <i className='fa-solid fa-close text-xl'></i>
          </button>
        </div>

        <div className='w-full h-full text[14px] flex flex-col items-start pl-14 bg-[#F9F7F6] pt-20 text-sm  gap-2'>
          <a
            className='font-[300]  text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            HOME
          </a>
          <a
            className='font-[300] text-[#282A43]  p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            ABOUT US
          </a>
          <a
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            TIC
          </a>

          <a className='font-[300] text-[#282A43] p-2  rounded-md ' href='#'>
            <span className='flex items-center gap-2'>
              TRAINING{" "}
              {show ? (
                <BiUpArrowAlt onClick={() => setShow(false)} />
              ) : (
                <BiDownArrowAlt onClick={() => setShow(true)} />
              )}
            </span>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                show ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className='ml-6 mt-5 flex flex-col gap-4'>
                <li className='text-gray-500'>TICP</li>
                <li className='text-gray-500'>Short Training</li>
              </ul>
            </div>
          </a>
          <a
            className='font-[300] text-[#282A43]  p-2 transition-all duration-300  rounded-md '
            href='#'
          >
            PROGRAMS
          </a>
          <a
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover rounded-md '
            href='#'
          >
            MEDIA
          </a>
          <a
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover rounded-md '
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
