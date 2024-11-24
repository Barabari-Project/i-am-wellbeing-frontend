import React from "react";
import Slider from "react-slick";
import testimonialsImg from '../imgs/testimonialImg.png'

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
      className='testimonials-slider w-full flex justify-center mt-10 h-auto min-h-[600px] lg:h-[400px]'
      style={{
        backgroundImage: `url(${testimonialsImg})`,
        backgroundPositionX: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Slider
        {...settings}
        className='text-center max-w-[80%] m-auto lg:max-w-4xl   pb-0'
      >
        <div className='testimonials-slider__item max-w-3xl mx-auto'>
          <div className='testimonials-slider__icon text-5xl font-bold text-left'>
            “
          </div>
          <div className='testimonials-slider__text text-center'>
            <p className=' text-xl lg:text-2xl leading-[30px]'>
              This was a very thought-provoking experience. Was really inspired
              by the passion you guys have for this cause. p.s- still processing
              all the quotes that were mentioned in the session.
            </p>
            <div className='testimonials-slider__author mt-10 text-xl'>
              <span className='testimonials-slider__name font-bold text-[#029390]'>
                Project Arya Fellow
              </span>
            </div>
          </div>
        </div>

        <div className='testimonials-slider__item max-w-2xl mx-auto'>
          <div className='testimonials-slider__icon text-5xl text-left font-bold'>
            “
          </div>
          <div className='testimonials-slider__text text-center'>
            <p className='text-2xl leading-[50px]'>
              Loved the way the session was conducted and facilitated. The safe
              space that was created and the way explanations were given for
              complex concepts without dumbing them down, was commendable.
            </p>
            <div className='testimonials-slider__author mt-10 text-xl'>
              <span className='testimonials-slider__name font-bold text-[#029390]'>
                Light Up Caregiver & Mentor
              </span>
            </div>
          </div>
        </div>

        <div className='testimonials-slider__item max-w-2xl mx-auto'>
          <div className='testimonials-slider__icon text-5xl text-left font-bold'>
            “
          </div>
          <div className='testimonials-slider__text text-center'>
            <p className='text-2xl leading-[50px]'>
              It was a great experience working with you. I am a facilitator and
              a single mother, and your sessions help me in both contexts. They
              help me understand kids' behavior, their needs, and their actions.
            </p>
            <div className='testimonials-slider__author mt-10 text-xl'>
              <span className='testimonials-slider__name font-bold text-[#029390]'>
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
