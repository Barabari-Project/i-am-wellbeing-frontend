import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';


const logo = `${import.meta.env.VITE_PUBLIC_URL}/Home/logonew.png`;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer bg-black text-white lg:pt-5 pb-5  '>
      <div className='max-w-5xl m-auto flex lg:flex-row flex-col lg:gap-10 items-start  p-10 lg:p-0'>
        {/* <div className='left hidden lg:flex flex-col lg:pr-20 sm:pl-20 md:pl-0'> */}
          {/* <div className='footer-contacts '>
            <div className='footer-logo'>
              <a className='footer-logo__link' href='index.html'>
                
                 <LazyLoadImage
               className='footer-logo__img w-[200px]'
               src={logo}
               alt='logo'
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="Home/logonew-small.png" />
              }
            />
              </a>
            </div>

            <div className='col-sm-6 col-lg-4'>
              <h4 className='footer__title text-2xl mb-6 font-[400]'>
                --- Follow Us
              </h4>
              <ul className='footer-socials flex gap-10 text-white'>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link text-white'
                    href='https://m.facebook.com/iamwellbeingservices/'
                    target='_blank'
                  >
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://twitter.com/iamwellbeing_?s=08'
                    target='_blank'
                  >
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://www.linkedin.com/in/i-am-3b17b8104'
                    target='_blank'
                  >
                    {/* <i className='fas fa-linkedin' aria-hidden='true'></i> */}
                    {/* <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://instagram.com/iamwellbeing_?igshid=1dzqzgdakrta3'
                    target='_blank'
                  >
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://www.youtube.com/@iamwellbeing9989'
                    target='_blank'
                  >
                    <i className='fa-brands fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-sm-6 col-lg-3  mt-8'>
              <h4 className='footer__title text-2xl'>--- Important Links</h4>
              <nav className='mt-4'>
                <ul className='unordered-list flex flex-col gap-1'>
                  <li>
                    <Link to="/"
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us"
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/tic"
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      TIC
                    </Link>
                  </li>
                  <li>
                    <Link to="/ticp"
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      TICP
                    </Link>
                  </li>
                  <li>
                    <Link to="/program"
                      href='program.php'
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link to="/media"
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us"
                      className=' no-underline text-[#A9A9AB] text-sm'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */} 

          {/* <div className='row align-items-baseline'>
            <div className='col-md-6'>
              <p className='footer-copyright text-white mt-10 text-xs '>
                © 2023 I Am. All Rights Reserved.
              </p>
            </div>
          </div>
        </div> */}
        {/* end left bar */}

        {/* <div className='footer-logo lg:hidden mobile-logo'>
          <a className='footer-logo__link' href='index.html'>
           
            <LazyLoadImage
             className='footer-logo__img w-[100px]' src={logo} alt='logo' 
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="Home/logonew-small.png" />
              }
            />
          </a>
        </div> */}

        {/* <div className='max-w-2xl right flex gap-10  flex-col '>
          <h4 className='footer__title text-xl lg:text-2xl mt-10 lg:mt-0'>
            A mental health not-for-profit organization dedicated towards
            breaking the cycle of intergenerational trauma by supporting young
            people struggling with adverse life experiences and building an
            ecosystem of trusted available trained adults.
          </h4>

          <div className='col-sm-6 col-lg-6 grid lg:grid-cols-2 grid-cols-1 gap-10 '>
            <div className='col-sm-6 col-lg-4 lg:hidden'>
              <h4 className='footer__title text-2xl mb-10 font-[400]'>
                --- Follow Us
              </h4>
              <ul className='footer-socials flex gap-10 text-white'>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link text-white'
                    href='https://m.facebook.com/iamwellbeingservices/'
                    target='_blank'
                  >
                    {/* <i className='fas fa-facebook' aria-hidden='true'></i> */}
                    {/* <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://twitter.com/iamwellbeing_?s=08'
                    target='_blank'
                  >
                    <i className='fa-brands fa-twitter'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://www.linkedin.com/in/i-am-3b17b8104'
                    target='_blank'
                  >
                    {/* <i className='fas fa-linkedin' aria-hidden='true'></i> */}
                    {/* <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://instagram.com/iamwellbeing_?igshid=1dzqzgdakrta3'
                    target='_blank'
                  >
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                </li>
                <li className='footer-socials__item'>
                  <a
                    className='footer-socials__link'
                    href='https://www.youtube.com/@iamwellbeing9989'
                    target='_blank'
                  >
                    <i className='fa-brands fa-youtube'></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-contacts text-[#A9A9AB] text-sm flex flex-col gap-2'>
              <h4 className='footer__title font-[400] text-2xl text-white'>
                --- Contact Us
              </h4>
              <p className='footer-contacts__address'>Sector 29, Noida, UP.</p>
              <p className='footer-contacts__phone'>
                Phone:{" "}
                <a
                  href='tel:+91-8920715913'
                  className='no-underline text-[#A9A9AB]'
                >
                  +91-8920715913
                </a>
              </p>
              <p className='footer-contacts__mail'>
                Email:{" "}
                <a
                  href='mailto:info@iamwellbeing.in'
                  className='no-underline text-[#A9A9AB]'
                >
                  info@iamwellbeing.in
                </a>
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className='col-sm-6 col-lg-3  mt-10 lg:hidden'>
          <h4 className='footer__title text-2xl'>--- Important Links</h4>
          <nav className='mt-4'>
            <ul className='unordered-list flex flex-col gap-2'>
              <li>
                <a
                  href='index.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='about.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='tic.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  TIC
                </a>
              </li>
              <li>
                <a
                  href='ticp.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  TICP
                </a>
              </li>
              <li>
                <a
                  href='program.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href='media.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href='contact-us.php'
                  className=' no-underline text-[#A9A9AB] text-sm'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div> */}

        <div className='row align-items-baseline sm:flex sm:justify-between w-full '>
          <div className='col-md-6 text-center'>
            <p className='footer-copyright text-white mt-1 text-xl '>
              ©2025 I Am. All rights reserved.
            </p>
          </div>
          <div className='col-md-6 text-center'>
            <p className='footer-copyright text-white mt-1 text-xl '>developed by The Barabari collective.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
