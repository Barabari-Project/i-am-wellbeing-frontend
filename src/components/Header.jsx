import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';

import { HiMenuAlt3 } from "react-icons/hi";
import { BiDownArrowAlt , BiUpArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const facebook = `${import.meta.env.VITE_PUBLIC_URL}/icons/f.webp`;
const instagram = `${import.meta.env.VITE_PUBLIC_URL}/icons/i.webp`;
const twitter = `${import.meta.env.VITE_PUBLIC_URL}/icons/t.webp`;
const youtube = `${import.meta.env.VITE_PUBLIC_URL}/icons/y.webp`;
const linkedin = `${import.meta.env.VITE_PUBLIC_URL}/icons/l.webp`;
const logo = `${import.meta.env.VITE_PUBLIC_URL}/Home/logonew.png`;


const Header = () => {
  const [show , setShow] = useState(false); // state for show sub menu 
  const [toggle , setToggle] = useState(false); // state for side bar array to show and hide
  const [isOpen , setIsOpen] = useState(false); // state for side bar array to show and hide
   

  return (
    <>
      <header className='w-full shadow-md  border-b '>
        <div className='top-bar bg-[#029390] text-sm md:flex hidden justify-end p-2 pr-8 gap-10'>
          <img loading="lazy" className='w-[30px]' src={facebook} alt='' />
          <img loading="lazy" className='w-[30px]' src={instagram} alt='' />
          <img loading="lazy" className='w-[30px]' src={twitter} alt='' />
          <img loading="lazy" className='w-[30px]' src={youtube} alt='' />
          <img loading="lazy" className='w-[30px]' src={linkedin} alt='' />


        </div>

        <div className='w-[100%] m-auto shadow-lg   items-center justify-between p-8  sm:flex hidden'>
          <div className='logo z-10 w-[120px] absolute top-5 left-5 hidden md:block'>
            <Link to='/'>
              
              <LazyLoadImage
              src={logo} alt='' className=''
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="Home/logonew-small.png" />
              }
            />
            </Link>
          </div>

          <div className='absolute right-0'>
            <ul className='flex sm:gap-4 lg:gap-6 gap-10 pr-2 relative flex-end '>
              <Link to='/'>
                <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                  Home
                </li>
              </Link>
              {/* <Link to='/about-us'> */}
                <li className='border border-black py-1 px-4 group relative rounded-full text-center cursor-pointer'>
                  About us
                  <ul className='absolute sub-menu w-[255px] h-0 text-left opacity-0 translate-y-10 transition-all duration-300 text-gray-200 right-[-100px] top-[3rem] bg-[#029390]  z-[1] group-hover:h-[150px] group-hover:opacity-100 group-hover:translate-y-0'>
                    <Link to='/about-us'>
                      <li className='text-white hover:text-gray-400 text-xl mt-8 ml-6'>
                        Our Team
                      </li>
                    </Link>
                    <Link to='/programs'>
                      <li className='text-white hover:text-gray-400 text-xl mt-3 ml-6'>
                        Our Programs
                      </li>
                    </Link>
                  </ul>
                </li>
              {/* </Link> */}

              <Link to='/tic'>
                <li className='border border-black py-1 px-4 rounded-full text-center cursor-pointer'>
                  Trauma-Informed Care
                </li>
              </Link>

              <li className='border border-black py-1 px-4 group rounded-full text-center cursor-pointer relative'>
                Training
                <ul className='absolute sub-menu w-[255px] h-0 text-left opacity-0 translate-y-10 transition-all duration-300 text-gray-200 right-[-100px] top-[3rem] bg-[#029390]  z-[1] group-hover:h-[150px] group-hover:opacity-100 group-hover:translate-y-0'>
                  <Link to='/ticp'>
                    <li className='text-white hover:text-gray-400 text-xl mt-8 ml-6 flex'>
                      TICP <span className="relative text-xl font-bold text-white border border-white rounded-full size-5  ml-1 flex items-center justify-center"
                            style={{ verticalAlign: 'super' }}>c</span>
                    </li> 
                  </Link>
                  <Link to='/short-training'>
                    <li className='text-white hover:text-gray-400 text-xl mt-3 ml-6'>
                      Short Trainings Program
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

      <div className='flex md:hidden  items-center justify-between px-4 mobile-header z-10 bg-white fixed top-0 w-full'>
        <img loading="lazy" src={logo} alt='' className='w-[80px]' />
        <HiMenuAlt3
          className='text-3xl font-[300] cursor-pointer'
          onClick={() => setToggle(true)}
        />
      </div>
      {/* end hamburgur menu */}

      {/* side bar  */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setToggle(false);
        }}
        className={`fixed top-0 left-0  z-10 w-full h-screen bg-[rgba(0,0,0,0.6)] ${
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
          <button className='md:hidden pt-2' onClick={() => setToggle(false)}>
            <i className='fa-solid fa-close text-xl'></i>
          </button>
        </div>

        <div className='w-full h-full text[14px] flex flex-col items-start pl-14 bg-[#F9F7F6] pt-20 text-sm  gap-2'>
          <Link
            to='/'
            className='font-[300]  text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            onClick={() => setToggle(false)}
          >
            HOME
          </Link>

          {/* <Link
            to='/about-us'
            className='font-[300] text-[#282A43]  p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            onClick={() => setToggle(false)}
          >
            ABOUT US
          </Link> */}

          <a
            className='font-[300] text-[#282A43] p-2  rounded-md '
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='flex items-center gap-2'>
              ABOUT US {isOpen ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
            </span>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className='ml-6 mt-5 flex flex-col gap-4'>
                <Link to='/about-us' onClick={() => setToggle(false)}>
                  <li className='text-gray-500'>Our Team</li>
                </Link>
                <Link to='/programs' onClick={() => setToggle(false)}>
                  <li className='text-gray-500'>Our Programs</li>
                </Link>
              </ul>
            </div>
          </a>

          <Link
            to='/tic'
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover:bg-gray-100 rounded-md '
            onClick={() => setToggle(false)}
          >
            TIC
          </Link>

          <a
            className='font-[300] text-[#282A43] p-2  rounded-md '
            onClick={() => setShow(!show)}
          >
            <span className='flex items-center gap-2'>
              TRAINING {show ? <BiUpArrowAlt /> : <BiDownArrowAlt />}
            </span>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                show ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className='ml-6 mt-5 flex flex-col gap-4'>
                <Link to='/ticp' onClick={() => setToggle(false)}>
                  <li className='text-gray-500'>TICP</li>
                </Link>
                <Link to='/short-training' onClick={() => setToggle(false)}>
                  <li className='text-gray-500'>Short Trainings Program</li>
                </Link>
              </ul>
            </div>
          </a>

          <Link
            to='programs'
            className='font-[300] text-[#282A43]  p-2 transition-all duration-300  rounded-md '
            onClick={() => setToggle(false)}
          >
            PROGRAMS
          </Link>

          <Link
            to='/media'
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover rounded-md '
            onClick={() => setToggle(false)}
          >
            MEDIA
          </Link>

          <Link
            to='/contact-us'
            className='font-[300] text-[#282A43] p-2 transition-all duration-300 hover rounded-md '
            onClick={() => setToggle(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};








export default Header;
