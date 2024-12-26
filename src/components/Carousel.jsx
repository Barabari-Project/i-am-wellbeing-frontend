
import Slider from "react-slick";

const a1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/a1.png`;
const a2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/a2.png`;
const a3 = `${import.meta.env.VITE_PUBLIC_URL}/Home/a3.png`;  
const mobileBanner2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/mobile-banner-2.png`;
const mobileBanner3 = `${import.meta.env.VITE_PUBLIC_URL}/Home/mobile-banner-3.png`;

import banner3 from '../imgs/home-images/banner3.png'

const Carousel = () => {
     var settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
     };  

     var settings2 = {
      //  dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
     };
  return (
    <>
      <div className='hidden lg:block border  relative cursor-pointer'>
        <Slider {...settings} className=''>
          <div className=' w-full  items-center relative flex text-center'>
            <img src={a2} alt='' className='w-full' />

            <div className='absolute top-5 md:top-20 2xl:top-20  lg:left-10 left-5 text-5xl xl:text-6xl font-bold'>
              <p>Mitigating</p>
              <p>the impact of</p>

              <p>Adverse</p>
              <p>Childhood</p>
              <p>Experiences</p>
            </div>
          </div>

          <div className='w-full items-center relative flex'>
            <img src={a1} alt='' className='w-full' />
            <div className='absolute top-5 md:top-20 2xl:top-20  lg:left-10  left-5 text-5xl xl:text-6xl font-bold'>
              <p>Creating</p>
              <p>Ecosystems</p>
              <p>of Care</p>
            </div>
          </div>

          <div className='w-full items-center relative flex '>
            <img src={a3} alt='' className='w-full' />
            <div className='absolute top-5 md:top-20 2xl:top-20  lg:left-10 left-5 text-5xl xl:text-6xl  font-bold'>
              <p>Making</p>
              <p>India</p>
              <p>Trauma-</p>
              <p>Informed</p>
            </div>
          </div>
        </Slider>
      </div>

      <div className='border-b lg:hidden block  mt-20'>
        <Slider {...settings2} className=''>
          <div className=' w-full'>
            <img
              src={mobileBanner2}
              alt=''
              className='w-full h-[350px] object-contain'
            />
          </div>

          <div className=' w-full'>
            <img
              src={mobileBanner3}
              alt=''
              className='w-full h-[350px] object-contain'
            />
          </div>

          <div className='w-full text-center items-center justify-center pt-10 outline-none'>
            <h1 className='xs:4xl text-5xl font-bold flex flex-col gap-4 trauma-text'>
              <span>Making</span>
              <span>India </span>
              <span>Trauma-Informed</span>
            </h1>
            <img
              src={banner3}
              alt=''
              className='w-full h-[350px] object-contain'
            />
          </div>
        </Slider>
      </div>
    </>
  );
};


export default Carousel;
