
import Slider from "react-slick";
const out1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/out1.png`;
const out3 = `${import.meta.env.VITE_PUBLIC_URL}/Home/out3.png`;
const out5 = `${import.meta.env.VITE_PUBLIC_URL}/Home/out5.png`;



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
      <div className='w-full flex items-center relative'>
        <img src={out1} alt='' />
      </div>

      <div className='w-full flex items-center relative'>
        <img src={out3} alt='' className='' />
      </div>

      <div className=' w-full flex items-center relative'>
        <img src={out5} alt='' />
      </div>
    </Slider>
  );
};

export default AboutUsCarousel;
