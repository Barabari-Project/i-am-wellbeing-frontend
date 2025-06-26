import Slider from "react-slick";
const clientOneImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/1.png`;
const clientTwoImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/2.png`;
const clientThreeImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/3.png`;
const clientFourImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/4.png`;
const clientFiveImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/5.png`;
const clientSixImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/6.jpeg`;
const clientSevenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/7.png`;
const clientEightImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3929.GIF`;
const clientNineImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3930.JPG`;
const clientTenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3931.PNG`;
const clientElevenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_3932.WEBP`;
const clientTwelveImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5236.PNG`;
const clientThirteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5237.JPG`;
const clientFourteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5238.PNG`;
const clientFifteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5239.PNG`;
const clientSixteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5240.PNG`;
const clientSeventeenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5241.PNG`;
const clientEighteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5242.PNG`;
const clientNineteenImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5243.PNG`;
const clientTwentyImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5244.JPG`;
const clientTwentyOneImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/IMG_5245.JPG`;



const ClientCarousel = () => {
  const clientImg = [
    clientOneImg,
    clientTwoImg,
    clientThreeImg,
    clientFourImg,
    clientFiveImg,
    clientSixImg,
    clientSevenImg,
    clientEightImg,
    clientNineImg,
    clientTenImg,
    clientElevenImg,
    clientTwelveImg,
    clientThirteenImg,
    clientFourteenImg,
    clientFifteenImg,
    clientSixteenImg,
    clientSeventeenImg,
    clientEighteenImg,
    clientNineteenImg,
    clientTwentyImg,
    clientTwentyOneImg,
  ]; 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
          <div key={i} className='h-40 flex justify-center items-center p-4'>
            <img loading="lazy"
              className='h-28 object-contain'
              src={img}
              alt=''
            />
          </div>
        ))}
      </Slider>

      <Slider {...settings2} className='m-auto max-w-xs mobile mt-10 mb-10 pb-16'>
        {clientImg.map((img , i) => (
          <div key={i} className='h-32 w-full flex items-center p-4'>
            <img loading="lazy"
              className='h-24 object-contain m-auto'
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
