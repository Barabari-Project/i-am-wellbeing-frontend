
import Slider from "react-slick";
import out1 from '../imgs/out1.png';
import out3 from '../imgs/out3.png';
import out5 from '../imgs/out5.png';

const AboutUsCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className=' max-w-5xl m-auto'>
      <div className='bg-red-300 w-full flex items-center relative'>
        <img src={out1} alt='' />
      </div>

      <div className='bg-red-300 w-full flex items-center relative'>
        <img src={out3} alt='' className='' />
      </div>

      <div className='bg-red-300 w-full flex items-center relative'>
        <img src={out5} alt='' />
      </div>
    </Slider>
  );
};

export default AboutUsCarousel;
