
import a1 from "../imgs/a1.png";
import a2 from "../imgs/a2.png";
import a3 from "../imgs/a3.png";
import Slider from "react-slick";

import mobileBanner1 from "../imgs/mobile-banner.png";
import mobileBanner2 from "../imgs/mobile-banner-2.png";
import mobileBanner3 from "../imgs/mobile-banner-3.png";

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
      <div className='hidden lg:block'>
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
              <p>Ecosystem</p>
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

          <div className=' w-full'>
            <img
              src={mobileBanner1}
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
