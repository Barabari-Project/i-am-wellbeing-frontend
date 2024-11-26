import React, { useState } from "react";

import facebook from '../imgs/icons/f.webp';
import instagram from '../imgs/icons/i.webp';
import twitter from '../imgs/icons/t.webp';
import youtube from '../imgs/icons/y.webp';
import linkedin from '../imgs/icons/l.webp';
import logo from '../imgs/logonew.png';
import { HiMenuAlt3 } from "react-icons/hi";
import { BiDownArrowAlt , BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";


const Header = () => {
  const [toggle , setToggle] = useState(false);
  const [show , setShow] = useState(false); // state for side bar array to show and hide
  const [isVisible, setIsVisible] = useState(false);  

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

        <div className='w-[100%] m-auto shadow-lg   items-center justify-between p-8  md:flex hidden'>
          <div className='logo z-10 w-[120px] absolute top-5 left-5 hidden md:block'>
            <Link to="/">
            <img src={logo} alt='' className='' />
            </Link>
          </div>

          <div className=' absolute right-0'>
            <ul className='flex sm:gap-5 lg:gap-10 gap-10 pr-2 relative flex-end '>
              <Link to='/'>
                <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link to='/about-us'>
                <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                  About us
                </li>
              </Link>

              <Link to='/tic'>
                <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                  TIC
                </li>
              </Link>

              <li className='border border-black py-1 px-4 group rounded-full text-center cursor-pointer relative'>
                Training
                <ul className='absolute sub-menu w-[255px] h-[150px] text-left opacity-0 translate-y-10 transition-all duration-300 text-gray-200 right-[-100px] top-[3rem] bg-[#029390] group-hover:z-10 group-hover:opacity-100 group-hover:translate-y-0'>
                  <Link to='/ticp'>
                    <li className='text-white hover:text-gray-400 text-xl mt-8 ml-6'>
                      TICP
                    </li>
                  </Link>
                  <Link to='/short-training'>
                    <li className='text-white hover:text-gray-400 text-xl mt-3 ml-6'>
                      Short Training
                    </li>
                  </Link>
                </ul>
              </li>

              <Link to='/programs'>
                <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                  Programs
                </li>
              </Link>
              <Link to='/media'>
              <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                Media
              </li>
              </Link>
              <Link to='/contact-us'>
                <li className='border border-black py-1 px-4 rounded-full text-center'>
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* hamburgur menu */}
        <div
          className={`sub-menu group h-[150px] bg-[#029390] w-[250px] absolute right-[22%] z-10 transition-opacity duration-300 ease-in-out group-hover:block hidden`}
        ></div>
      </header>

      {/* sub menu list  */}

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
          <Link to="/"
            className='font-[300]  text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
           >
            HOME
          </Link>

          <Link to="/about-us"
            className='font-[300] text-[#282A43]  p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            ABOUT US
          </Link>

          <Link to="/tic"
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            href='#'
          >
            TIC
          </Link>

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
                <Link to="/ticp">
                <li className='text-gray-500'>TICP</li>
                </Link>
                <Link to="/short-training">
                 <li className='text-gray-500'>Short Training</li>
                </Link>
              </ul>
            </div>
          </a>

          <Link to="programs"
            className='font-[300] text-[#282A43]  p-2 transition-all duration-300  rounded-md '
            href='#'
          >
            PROGRAMS
          </Link>

          <Link to="/media"
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover rounded-md '
            href='#'
          >
            MEDIA
          </Link>

          <Link to="/contact-us"
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover rounded-md '
            href='#'
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};








export default Header;
