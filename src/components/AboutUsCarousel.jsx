
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';


import { useEffect, useState } from "react";

const work_1_Img =`${import.meta.env.VITE_PUBLIC_URL}/home-images/work_1.png`
const work_2_Img =`${import.meta.env.VITE_PUBLIC_URL}/home-images/work_2.png`
const work_3_Img =`${import.meta.env.VITE_PUBLIC_URL}/home-images/work_3.png`
const work_4_Img =`${import.meta.env.VITE_PUBLIC_URL}/home-images/work_4.png`
const work_5_Img =`${import.meta.env.VITE_PUBLIC_URL}/home-images/work_5.png`
const work_6_Img=`${import.meta.env.VITE_PUBLIC_URL}/home-images/work_6.png`




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
        
        <LazyLoadImage
              src={work_1_Img} alt='' className='h-[200px] w-full object-fit: cover'
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="home-images/work_1-small.png" />
              }
            />
      </div>

      <div className='w-full flex items-center relative'>
       
        <LazyLoadImage
               src={work_2_Img} alt='' className='h-[200px] w-full object-fit: cover'
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="home-images/work_2-small.png" />
              }
            />
      </div>

      <div className=' w-full flex items-center relative'>
       
        <LazyLoadImage
              src={work_3_Img} alt='' className='h-[200px] w-full object-fit: cover'
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="home-images/work_3-small.png" />
              }
            />
      </div>

      <div className=' w-full flex items-center relative'>
        
        <LazyLoadImage
              src={work_4_Img} alt='' className='h-[200px] w-full object-fit: cover'
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="home-images/work_4-small.png" />
              }
            />
      </div>

      <div className=' w-full flex items-center relative'>
        
        <LazyLoadImage
              src={work_5_Img} alt='' className='h-[200px] w-full object-fit: cover'
              effect="blur"
              placeholder={
                <BlurryImages imgUrl="home-images/work_5-small.png" />
              }
            />
      </div>

      <div className=' w-full flex items-center relative'>
       
        <LazyLoadImage
              src={work_6_Img} alt='' className='h-[200px] w-full object-fit: cover'
              effect="blur" 
              placeholder={
                <BlurryImages imgUrl="home-images/work_6-small.png" />
              }
            />
      </div>
    </Slider>
  );
};

export default AboutUsCarousel;
