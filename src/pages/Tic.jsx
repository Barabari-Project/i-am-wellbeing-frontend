import React, { useState } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";

const quoteLeft = `${import.meta.env.VITE_PUBLIC_URL}/Home/quote-left.png`;
const quoteRight = `${import.meta.env.VITE_PUBLIC_URL}/Home/quote-left1.png`;
const blueQuoteLeft = `${import.meta.env.VITE_PUBLIC_URL}/Home/blue-quote.png`;
const blueQuoteRight = `${
  import.meta.env.VITE_PUBLIC_URL
}/Home/blue-quote1.png`;
const ticImage = `${import.meta.env.VITE_PUBLIC_URL}/Home/ticimage1.jpg`;
const miniMagic = `${
  import.meta.env.VITE_PUBLIC_URL
}/Home/mini_magick20190427-2009-ff1osr.png`;
const tic2 = `${import.meta.env.VITE_PUBLIC_URL}/Home/tic2.png`;
const test1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/testimonialImg.png`;

// upload hona baki h
const resistImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/resist.png`;
const realiseImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/realise.png`;
const recogniseImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/recognise.png`;
const respondImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/respond.png`;

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
    <div className='container m-auto pt-5 mt-10 md:mt-0'>
      <div className='content max-w-6xl m-auto mt-5 p-4 max-md:p-5'>
        <div className='understanding trauma lg:grid  lg:grid-cols-12 items-center justify-between  '>
          <div className='left text-3xl font-semibold text-center  hidden lg:block lg:col-span-5 '>
            <LazyLoadImage
              src={quoteRight} // Image source
              alt='quoteRight' // Alt text
              effect='blur' // Blur effect while loading
              className='w-[50px] ml-20'
              placeholder={<BlurryImages imgUrl='Home/quote-left1-small.png' />}
            />
            It isn't about what's wrong
            <br /> with a person.
            <br /> It's about what happened <br />
            to a person
            <LazyLoadImage
              src={quoteLeft}
              alt='quote-left'
              effect='blur'
              className='w-[400px] ml-10'
              placeholder={<BlurryImages imgUrl='Home/quote-left-small.png' />}
            />
          </div>
          {/* mobile view */}
          <div className='left text-3xl w-[80%] m-auto font-semibold text-center   block lg:hidden  lg:col-span-5 '>
            <p className='relative'>
              <LazyLoadImage
                src={quoteRight}
                alt='quote-right'
                className='w-[40px]'
                effect='blur' // Blur effect while loading
                placeholder={
                  <BlurryImages imgUrl='Home/quote-left1-small.png' />
                }
              />
              It isn't about what's wrong with a person. It's about what
              happened to a person
              <LazyLoadImage
                src={quoteRight}
                alt='quote-left'
                className='w-[40px] absolute right-0 rotate-180'
                effect='blur' // Blur effect while loading
                placeholder={<BlurryImages imgUrl='Home/about-small.png' />}
              />
            </p>
          </div>
          {/* end mobile view */}
          {/* mobile image of teavhing students */}
          <div className='flex items-center justify-center lg:hidden mt-5  '>
            <LazyLoadImage
              src={ticImage}
              alt='quote-left'
              className='lg:w-[300px] w-[600px]'
              effect='blur' // Blur effect while loading
              placeholder={<BlurryImages imgUrl='Home/ticimage1-small.jpg' />}
            />
          </div>

          <div className='right lg:col-span-7 mt-5 lg:mt-0 p-2 m-auto lg:p-4 max-md:px-0'>
            <h1 className='text-4xl max-md:text-3xl max-md:text-center leading-none font-bold text-right p-2 lg:p-0 max-md:p-0'>
              Understanding Trauma
            </h1>
            <div className='p-2 lg:p-0 max-md:p-0'>
              <p className='text-xl leading-9 text-justify  mt-1 max-md:text-lg max-md:mt-3 '>
                The Substance Abuse and Mental Health Services Administration
                (SAMHSA) describes trauma as events or circumstances experienced
                by an individual as physically or emotionally harmful or
                life-threatening, which result in adverse effects on the
                individual’s functioning and well-being.
              </p>
            </div>
          </div>
        </div>

        {/* impact od trauma */}
        <div className='understanding trauma  lg:grid lg:grid-cols-12 lg:w-full p-2 lg:p-2 m-auto max-md:p-0 max-md:mt-3 '>
          <div className='left text-3xl text-center  hidden lg:flex justify-center font-semibold max col-span-5'>
            <LazyLoadImage
              src={ticImage}
              alt='quote-left'
              className='w-[350px]'
              effect='blur' // Blur effect while loading
              placeholder={<BlurryImages imgUrl='Home/ticimage1-small.jpg' />}
            />
          </div>
          <div className='right col-span-7'>
            <h1 className='text-4xl max-md:text-3xl max-md:text-center leading-none font-bold text-right m-0'>
              Impact of trauma on health
            </h1>
            <div className=''>
              <p className='text-xl leading-9 text-justify  p-2 max-md:p-0 max-md:text-lg max-md:mt-3'>
                The Adverse Childhood Experiences (ACE) Study, conducted by the
                CDC & Kaiser Permanente, revealed that the more an individual is
                exposed to a variety of stressful and potentially traumatic
                experiences, the greater the risk for chronic health conditions
                and health-risk behaviors later in life.
              </p>
            </div>
          </div>
        </div>
        {/* informed care */}
        <div className='understanding trauma lg:grid lg:grid-cols-12  p-2 lg:p-0 lg:w-full m-auto justify-center items-center max-md:p-0'>
          <div className='right col-span-9'>
            <h1 className='text-4xl max-md:text-3xl max-md:text-center leading-none font-bold lg:ml-4  p-2 lg:p-0'>
              Trauma-informed care
            </h1>
            <div className='m-auto'>
              <p className='text-xl leading-9 text-justify  w-[95%] m-auto max-md:m-0 max-md:w-full max-md:text-lg'>
                Trauma-informed care (TIC) is defined as practices that promote
                a culture of safety, empowerment, and healing. It is a strengths
                based framework that is grounded in an understanding of and
                responsiveness to the impact of trauma, that emphasizes
                physical, psychological, and emotional safety for both providers
                and survivors, and that creates opportunities for survivors to
                rebuild a sense of control and empowerment.
              </p>
            </div>
          </div>

          <div className='left text-lg text-center font-semibold w-full m-auto  lg:col-span-3 relative top-5 lg:top-0'>
            <LazyLoadImage 
              src={blueQuoteLeft}
              alt='quote-right'
              className='lg:w-[30px] w-[50px] '
              effect='blur' // Blur effect while loading
              placeholder={<BlurryImages imgUrl='Home/blue-quote-small.png' />}
            />
            <p className='text-2xl lg:text-2xl relative '>
              Trauma-Informed Care understands and considers the pervasive
              nature of trauma and promotes environments of healing and recovery
              rather than practices and services that may inadvertently
              re-traumatize.
            </p>

            {/* <LazyLoadImage
              src={blueQuoteRight}
              alt='quote-left'
              className='w-[400px] lg:w-[200px] absolute right-0'
              effect='blur' // Blur effect while loading
              placeholder={<BlurryImages imgUrl='Home/blue-quote1-small.png' />}
            /> */}
          </div>
        </div>

        <div className='lg:mt-10 mt-14  max-w-7xl m-auto '>
          <h2 className='text-4xl max-md:text-3xl max-md:text-center max-md:mb-3 ml-2 font-bold lg:ml-12'>
            Principles of TIC
          </h2>
          <div className='max-w-5xl m-auto mb-4'>
            <LazyLoadImage
              src={miniMagic}
              alt=''
              effect='blur' // Blur effect while loading
              placeholder={
                <BlurryImages imgUrl='Home/mini_magick20190427-2009-ff1osr-small.png' />
              }
            />

            <LazyLoadImage
              src={tic2}
              alt=''
              className='text-center m-auto hidden md:block'
              effect='blur' // Blur effect while loading
              placeholder={<BlurryImages imgUrl='Home/tic2-small.png' />}
            />
          </div>
        </div>
      </div>

      <div className='tic-cards flex md:hidden w-full outline-none'>
        <Slider
          {...settings}
          className='m-auto w-[80%] overflow-hidden'
        >
          {cards.map((card, i) => (
            <div key={i} className=' w-full items-center relative pb-4 outline-none'>
              <img
                loading='lazy'
                className='w-full h-[200px]'
                src={card.src}
                alt=''
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* section */}
      <section
        className='section testimonials--style-2 hidden lg:block'
        style={{ padding: "100px 0", backgroundImage: `url(${test1})` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-xl-10'>
              <div className='  slick-initialized slick-slider'>
                <div className='slick-list' style={{ height: "360px" }}>
                  <div
                    className='slick-track'
                    style={{
                      opacity: 1,
                      width: "970px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className='slick-slide slick-current slick-active'
                      data-slick-index='0'
                      aria-hidden='false'
                      style={{ width: "970px" }}
                    >
                      <div>
                        <div
                          className='testimonials-slider__item max-w-3xl ml-40 '
                          style={{ width: "90%", display: "inline-block" }}
                        >
                          <div className='testimonials-slider__icon text-7xl relative top-10 right-10'>
                            “
                          </div>
                          <div className='testimonials-slider__text'>
                            <p
                              style={{
                                textAlign: "center",
                                fontSize: "25px",
                                lineHeight: "50px",
                              }}
                            >
                              The most crucial aspect of therapy is the
                              development of a good therapeutic alliance with a
                              therapist who is trauma-informed and has a
                              Spiritually open mindset. With this we create a
                              place of safety where we offer information, make
                              sure our clients are grounded, feel empowered,
                              have a way to regulate emotions and feel cared for
                              and respected.
                            </p>
                            <div className='testimonials-slider__author text-center mt-2 text-xl'>
                              <span className='testimonials-slider__name text-center text-[#029390] font-bold'>
                                Teresa Naseba Marsh
                              </span>
                              <span className='testimonials-slider__position'></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile view */}

      <div
        className='testimonials-slider w-full  block lg:hidden justify-center mt-10  h-auto min-h-[400px] lg:h-[400px]'
        style={{
          backgroundImage: `url(${test1})`,
          backgroundPositionX: "center",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className='text-center max-w-[90%] m-auto lg:max-w-4xl   pb-0'>
          <div className='testimonials-slider__item max-w-3xl mx-auto'>
            <div className='testimonials-slider__icon text-5xl font-bold text-left mt-4'>
              “
            </div>
            <div className='testimonials-slider__text text-center'>
              <p className='text-md leading-[30px] md:mt-20'>
                {" "}
                The most crucial aspect of therapy is the development of a good
                therapeutic alliance with a therapist who is trauma-informed and
                has a Spiritually open mindset. With this we create a place of
                safety where we offer information, make sure our clients are
                grounded, feel empowered, have a way to regulate emotions and
                feel cared for and respected.
              </p>
              <div className='testimonials-slider__author mt-10 text-xl'>
                <span className='testimonials-slider__name font-bold text-[#029390]'>
                  Teresa Naseba Marsh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tic;
