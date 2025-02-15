import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';


const logo = `${import.meta.env.VITE_PUBLIC_URL}/Home/logonew.png`;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer bg-black text-white lg:pt-5 pb-5 '>
      <div className='max-w-5xl m-auto flex lg:flex-row flex-col lg:gap-10 items-start  p-10 lg:p-0'>
       
        <div className='row align-items-baseline sm:flex sm:justify-between w-full '>
          <div className='col-md-6 text-center'>
            <p className='footer-copyright text-white mt-1 text-xl max-md:text-lg '>
              ©2025 Nairatmya Foundation. All rights reserved.
            </p>
          </div>
          <div className='col-md-6 text-center'>
            <p className='footer-copyright text-white mt-1 text-xl max-md:text-lg'>Developed by The Barabari Collective.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
