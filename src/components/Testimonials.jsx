import React from "react";
import Slider from "react-slick";

const testimonialsImg = `${import.meta.env.VITE_PUBLIC_URL}/Home/testimonialImg.png`;

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
      <div
        className='testimonials-slider-container text-center m-auto md:w-[100%] lg:w-[100%] h-auto min-h-[500px]  lg:h-[600px] flex items-center justify-center'
        style={{
          backgroundPositionX: "center",
          backgroundImage: `url(${testimonialsImg})`,
          ObjeectFit: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <Slider
          {...settings}
          className=' max-w-[80%]  pb-0 flex  flex-col justify-center items-center '
        >
          <div className='testimonials-slider__item max-w-3xl mx-auto lg:mt-10'>
            <div className='testimonials-slider__icon text-5xl font-bold text-left'>
              “
            </div>
            <div className='testimonials-slider__text text-center'>
              <p className='text-2xl leading-[40px] '>
                This was a very thought-provoking experience. Was really
                inspired by the passion you guys have for this cause. p.s- still
                processing all the quotes that were mentioned in the session.
              </p>
              <div className='testimonials-slider__author mt-10 text-xl'>
                <span className='testimonials-slider__name font-bold text-[#029390] text-center'>
                  Project Arya Fellow
                </span>
              </div>
            </div>
          </div>

          <div className='testimonials-slider__item max-w-2xl mx-auto '>
            <div className='testimonials-slider__icon text-5xl text-left font-bold'>
              “
            </div>
            <div className='testimonials-slider__text text-center'>
              <p className='text-2xl leading-[40px] '>
                Loved the way the session was conducted and facilitated. The
                safe space that was created and the way explanations were given
                for complex concepts without dumbing them down, was commendable.
              </p>
              <div className='testimonials-slider__author mt-10 lg:ml-20 text-xl'>
                <span className='testimonials-slider__name font-bold text-[#029390] text-center'>
                  Light Up Caregiver & Mentor
                </span>
              </div>
            </div>
          </div>

          <div className='testimonials-slider__item max-w-2xl mx-auto '>
            <div className='testimonials-slider__icon text-5xl text-left font-bold'>
              “
            </div>
            <div className='testimonials-slider__text text-center'>
              <p className='text-2xl leading-[40px] lg:ml-20'>
                It was a great experience working with you. I am a facilitator
                and a single mother, and your sessions help me in both contexts.
                They help me understand kids' behavior, their needs, and their
                actions.
              </p>
              <div className='testimonials-slider__author mt-10 lg:ml-20 text-xl'>
                <span className='testimonials-slider__name font-bold text-[#029390] text-center'>
                  Manzil Mystics Facilitator
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
  );
};

export default Testimonials;
