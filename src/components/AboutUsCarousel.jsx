
import Slider from "react-slick";

import work_1_Img from '../imgs/home-images/work_1.png'
import work_2_Img from '../imgs/home-images/work_2.png'
import work_3_Img from '../imgs/home-images/work_3.png'
import work_4_Img from '../imgs/home-images/work_4.png'
import work_5_Img from '../imgs/home-images/work_5.png'
import work_6_Img from '../imgs/home-images/work_6.png'
import { useEffect, useState } from "react";




const AboutUsCarousel = () => {
const [screenSize , setScreenSize] = useState(window.innerWidth);
console.log(screenSize)
 
 const getScreenSize = () => {
    setScreenSize(window.innerWidth);
 }

useEffect(() => {
   window.addEventListener('resize' , getScreenSize)
   return () => {
     window.removeEventListener('resize' , getScreenSize)
   }
},[screenSize])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: screenSize > 768 ? 2 : 1,
    slidesToScroll: screenSize > 768 ? 2: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className=' max-w-5xl m-auto'>
      <div className='w-full flex items-center relative'>
        <img src={work_1_Img} alt='' className='h-[200px] w-full object-fit: cover' />
      </div>

      <div className='w-full flex items-center relative'>
        <img src={work_2_Img} alt='' className='h-[200px] w-full object-fit: cover' />
      </div>

      <div className=' w-full flex items-center relative'>
        <img src={work_3_Img} alt='' className='h-[200px] w-full object-fit: cover' />
      </div>

      <div className=' w-full flex items-center relative'>
        <img src={work_4_Img} alt='' className='h-[200px] w-full object-fit: cover' />
      </div>

      <div className=' w-full flex items-center relative'>
        <img src={work_5_Img} alt='' className='h-[200px] w-full object-fit: cover' />
      </div>

      <div className=' w-full flex items-center relative'>
        <img src={work_6_Img} alt='' className='h-[200px] w-full object-fit: cover' />
      </div>
    </Slider>
  );
};

export default AboutUsCarousel;
