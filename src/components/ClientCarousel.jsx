
import Slider from "react-slick";

import  clientOneImg  from '../imgs/1.png';
import  clientTwoImg from '../imgs/2.png';   
import  clientThreeImg from '../imgs/3.png';
import  clientFourImg from '../imgs/4.png';
import  clientFiveImg from '../imgs/5.png';
import  clientSixImg from '../imgs/6.jpeg';
import  clientSevenImg from '../imgs/7.png';



const ClientCarousel = () => {
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
  };
  return (
    <>
      <Slider {...settings} className=' max-w-6xl m-auto p-10 desktop'>
        <div className='w-full flex items-center relative'>
          <img className='w-[300px] h-[150px]' src={clientOneImg} alt='' />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[300px] h-[200px] object-contain'
            src={clientTwoImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[300px] h-[150px] object-contain'
            src={clientThreeImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[300px] h-[150px] object-contain'
            src={clientFourImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[300px] h-[150px] object-contain'
            src={clientFiveImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img className='size-300 object-contain' src={clientSixImg} alt='' />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[300px] h-[150px] object-contain'
            src={clientSevenImg}
            alt=''
          />
        </div>
      </Slider>

      <Slider {...settings2} className='m-auto  max-w-xs mobile mt-10'>
        <div className='w-full flex items-center relative mb-5'>
          <img
            className='w-[200px] h-[150px] m-auto'
            src={clientOneImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[200px] h-[150px] m-auto object-contain'
            src={clientTwoImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[200px] h-[150px] m-auto object-contain'
            src={clientThreeImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[200px] h-[150px] m-auto object-contain'
            src={clientFourImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[200px] h-[150px] m-auto object-contain'
            src={clientFiveImg}
            alt=''
          />
        </div>

        <div className='w-full flex items-center relative'>
          <img
            className='w-[200px] h-[150px] m-auto object-contain'
            src={clientSixImg}
            alt=''
          />
        </div>

        <div className='w-full text-center relative'>
          <img
            className='w-[200px] h-[150px] m-auto  object-contain'
            src={clientSevenImg}
            alt=''
          />
        </div>
      </Slider>
    </>
  );
};

export default ClientCarousel;
