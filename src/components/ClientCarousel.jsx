
import Slider from "react-slick";
const clientOneImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/1.png`;
const clientTwoImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/2.png`;
const clientThreeImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/3.png`;
const clientFourImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/4.png`;
const clientFiveImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/5.png`;
const clientSixImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/6.jpeg`;
const clientSevenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/7.png`;

import { useState } from "react";



const ClientCarousel = () => {
  const [clientImg] = useState([clientOneImg , clientTwoImg , clientThreeImg , clientFourImg , clientFiveImg , clientSixImg , clientSevenImg]);  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
  };
  return (
    <>
      <Slider {...settings} className=' max-w-6xl m-auto p-10 desktop'>
        {clientImg.map((img , i) => (
          <div key={i} className='w-full flex items-center relative'>
            <img
              className='w-[300px] h-auto object-contain'
              src={img}
              alt=''
            />
          </div>
        ))}
      </Slider>

      <Slider {...settings2} className='m-auto  max-w-xs mobile mt-10 mb-10'>
        {clientImg.map((img , i) => (
          <div key={i} className='w-full flex items-center relative'>
            <img
              className='w-[200px] h-auto m-auto object-contain'
              src={img}
              alt=''
            />
          </div>
        ))}
       
      </Slider>
    </>
  );
};

export default ClientCarousel;
