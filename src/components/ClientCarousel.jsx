
import Slider from "react-slick";

import  clientOneImg  from '../imgs/1.png';
import  clientTwoImg from '../imgs/2.png';   
import  clientThreeImg from '../imgs/3.png';
import  clientFourImg from '../imgs/4.png';
import  clientFiveImg from '../imgs/5.png';
import  clientSixImg from '../imgs/6.jpeg';
import  clientSevenImg from '../imgs/7.png';
import { useState } from "react";



const ClientCarousel = () => {
  const [clientImg , setClientImg] = useState([clientOneImg , clientTwoImg , clientThreeImg , clientFourImg , clientFiveImg , clientSixImg , clientSevenImg]);  
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
