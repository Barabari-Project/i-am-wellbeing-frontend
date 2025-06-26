import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import { useState } from "react";

const miniMagic = `${
  import.meta.env.VITE_PUBLIC_URL
}/Home/mini_magick20190427-2009-ff1osr.png`;
const tic2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/tic2.png`;
const test1 = `${
  import.meta.env.VITE_PUBLIC_URL
}/ticp-images/quote-bg-green.png`;
const resistImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/resist.png`;
const realiseImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/realise.png`;
const recogniseImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/recognise.png`;
const respondImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/respond.png`;

const tic_1 = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/tic_1.png`
const tic_2 = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/tic_2.png`

const Tic = () => {
  const [cards] = useState([
    {
      id: 1,
      src: realiseImg,
      blurSrc: "Home/realise-small.png",
    },
    {
      id: 2,
      src: recogniseImg,
      blurSrc: "Home/recognise-small.png",
    },
    {
      id: 3,
      src: respondImg,
      blurSrc: "Home/respond-small.png",
    },
    {
      id: 4,
      src: resistImg,
      blurSrc: "Home/resist-small.png",
    },
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container m-auto pt-5 mt-10 md:mt-0">
      <div className="content  max-w-6xl m-auto mt-5 p-4 max-md:p-5 space-y-14 tab:space-y-20 ">
        {/* Undestadning Trauma */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32  w-full">
          {/* Text Section */}
          <div className="text-lg tab:text-xl flex-1 flex flex-col gap-6 text-justify max-w-xl">
            <h2 className="text-3xl tab:text-4xl font-bold drop-shadow-md">
              Understanding Trauma
            </h2>
            <p>
              Trauma is like invisible smoke, unseen but ever-present. Your body
              feels its weight, constantly working overtime to keep you safe,
              always on high alert for the next threat. It forces your organs
              into overdrive, disrupting normal functions while on the surface,
              everything appears fine.
            </p>
            <p>Until one day, it’s not...</p>
            <p>
              Your body falters, and instead of recognizing the toll trauma has
              taken, you end up blaming yourself. This is how deeply ingrained
              it gets in our system, eventually making our own selves
              accountable for what was never our fault, unknowingly perpetuating
              the cycle of intergenerational trauma.
            </p>
          </div>
          {/* Image + Quote */}
          <div className="flex flex-col items-center justify-center h-full lg:items-center ">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#545656] shadow-lg mb-4">
              <img
                className="w-full h-full object-cover"
                src={tic_1}
                alt="A Girl Painting"
              />
            </div>
            <p className="font-medium italic text-center lg:text-right text-xl mt-2">
              “It isn&apos;t about what&apos;s wrong with a person.
              <br />
              It&apos;s about what happened to a person…”
            </p>
          </div>
        </div>

        {/* Trauma-Informed Care */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-32  w-full">
          {/* Text Section */}
          <div className="text-lg tab:text-xl flex-1 flex flex-col gap-6 text-justify max-w-xl">
            <h2 className="text-3xl tab:text-4xl font-bold drop-shadow-md text-right">
              Trauma-informed care
            </h2>
            <p>
              Trauma-Informed Care (TIC) is about recognizing this invisible
              burden and reshaping the way we offer support. It is a
              human-centered approach that prioritizes safety, empowerment, and
              healing. Grounded in an understanding of trauma’s profound impact,
              TIC fosters physical, psychological, and emotional safety. not
              just for survivors, but for caregivers, professionals, and
              communities as well.
            </p>

            <p>
              It seeks to restore control, rebuild trust, and create spaces
              where survivors can reclaim their power breaking cycles of trauma,
              rather than unknowingly reinforcing them.
            </p>
          </div>
          {/* Image + Quote */}
          <div className="flex flex-col items-center justify-center h-full lg:items-center ">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#545656] shadow-lg mb-4">
              <img
                className="w-full h-full object-cover"
                src={tic_2}
                alt="A Girl Painting"
              />
            </div>
            {/* <p className="font-medium italic text-center lg:text-right text-lg mt-2">
              “It isn't about what's wrong with a person.
              <br />
              It's about what happened to a person…”
            </p> */}
          </div>
        </div>

        <div>
          <p className="font-medium text-xl italic text-center max-w-4xl mx-auto">
            “Trauma-Informed Care understands and considers the pervasive nature
            of trauma and promotes environments of healing and recovery rather
            than practices and services that may inadvertently re-traumatize.”
          </p>
        </div>

        <div className="lg:mt-10 mt-14  max-w-7xl m-auto ">
          <h2 className="text-4xl max-md:text-3xl  max-md:text-center max-md:mb-3 ml-2 font-bold lg:ml-12">
            Principles of TIC
          </h2>
          <div className="w-full mb-4 ">
            <LazyLoadImage
              src={miniMagic}
              alt=""
              effect="blur" // Blur effect while loading
              placeholder={
                <BlurryImages imgUrl="Home/mini_magick20190427-2009-ff1osr-small.png" />
              }
            />

            <LazyLoadImage
              src={tic2}
              alt=""
              className="text-center m-auto hidden md:block  pb-10"
              effect="blur" // Blur effect while loading
              placeholder={<BlurryImages imgUrl="Home/tic2-small.png" />}
            />
          </div>
        </div>
      </div>

      <div className="tic-cards flex md:hidden w-full outline-none">
        <Slider {...settings} className="m-auto w-[80%] overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={i}
              className=" w-full items-center relative py-6  outline-none"
            >
              <img
                loading="lazy"
                className="w-full h-[200px]"
                src={card.src}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* section */}

      <div className="w-ful">
        <div
          className="relative max-w-4xl mx-auto p-8 sm:p-12 md:p-16 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${test1})`,
          }}
        >
          <div className="text-center">
            <p className="text-lg md:text-xl lg:text-3xl italic lg:max-w-3xl  mx-auto text-gray-800 mb-4">
              “The most crucial aspect of therapy is the development of a good
              therapeutic alliance with a therapist who is trauma-informed and
              has a Spiritually open mindset.With this we create a place of
              safety where we offer information, make sure our clients are
              grounded, feel empowered, have a way to regulate emotions and feel
              cared for and respected.”
            </p>
            <div className="mt-8 text-xl">
              <span className="font-bold text-[#029390]">
                Teresa Naseba Marsh
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tic;
