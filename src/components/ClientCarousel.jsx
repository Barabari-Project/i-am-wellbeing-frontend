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

const clientImg = [
  clientOneImg, clientTwoImg, clientThreeImg, clientFourImg, clientFiveImg,
  clientSixImg, clientSevenImg, clientEightImg, clientNineImg, clientTenImg,
  clientElevenImg, clientTwelveImg, clientThirteenImg, clientFourteenImg,
  clientFifteenImg, clientSixteenImg, clientSeventeenImg, clientEighteenImg,
  clientNineteenImg, clientTwentyImg, clientTwentyOneImg,
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl m-auto py-10 px-4">
      <Slider {...settings}className="py-10
      ">
        {clientImg.map((img, i) => (
          <div key={i} className="h-40">
            <div className="h-full flex justify-center items-center p-4 mx-2 bg-white rounded-lg ">
              <img
                loading="lazy"
                className={`max-h-full object-contain lg:px-4  ${i < 7 ? 'lg:w-full lg:scale-[150%]' : (i === 15 || i === 17) ? 'lg:w-full  lg:scale-[150%]' : 'lg:w-4/3'}`}
                src={img}
                alt={`Client logo ${i + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientCarousel;
