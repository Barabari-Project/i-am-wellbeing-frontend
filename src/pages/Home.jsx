import React, { useEffect, useRef, useState } from "react";

const about = `${import.meta.env.VITE_PUBLIC_URL}/Home/about.png`;
const peoplenew = `${import.meta.env.VITE_PUBLIC_URL}/Home/peoplenew.png`;
const yellowbgnew1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/yellow-bg.png`;
const design = `${import.meta.env.VITE_PUBLIC_URL}/Home/design.png`;
const video = `${import.meta.env.VITE_PUBLIC_URL}/Home/vd.mp4`; 
const intro = `${import.meta.env.VITE_PUBLIC_URL}/Home/intro.png`;
const bg = `${import.meta.env.VITE_PUBLIC_URL}/Home/bg.png`;
// console.log(about);


import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import AboutUsCarousel from "../components/AboutUsCarousel";
import ClientCarousel from "../components/ClientCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [num1, setNum1] = useState(0); // State for the first counter
  const [num2, setNum2] = useState(0); // State for the second counter
  const counterOne = useRef(null);
  const counterTwo = useRef(null);
  const hasScrolledToSectionOne = useRef(false);
  const hasScrolledToSectionTwo = useRef(false);

  const animateCounter = (target, setNum, ref, hasScrolled) => {
    if (ref.current && !hasScrolled.current) {
      const rect = ref.current.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        hasScrolled.current = true; // Mark as scrolled to section

        const startTime = performance.now();
        const duration = 2000; // Duration of the animation in milliseconds
        const initialValue = 0;

        const incrementCounter = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Ensure it doesn't exceed 1

          const currentValue = Math.floor(
            initialValue + (target - initialValue) * progress
          );
          setNum(currentValue);

          if (progress < 1) {
            requestAnimationFrame(incrementCounter);
          }
        };

        requestAnimationFrame(incrementCounter); // Start the animation
      }
    }
  };

  const handleScroll = () => {
    animateCounter(3346, setNum1, counterOne, hasScrolledToSectionOne);
    animateCounter(100844, setNum2, counterTwo, hasScrolledToSectionTwo);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='main w-full'>
      <Carousel />
      <section className='section about-us py-8'>
        <div className='max-w-6xl 2xl:max-w-7xl  mx-auto'>
          <div className='flex flex-col lg:flex-row '>
            <div className='w-full lg:w-1/2 xl:w-1/3'>
              <img
                className='d-block w-[80%] m-auto h-full lg:w-full'
                src={about}
                alt='About Us'
              />
            </div>
            <div className='w-full lg:w-1/2 xl:w-2/3 p-4'>
              <p className='text-lg text-black'>
                <span className='text-6xl'>T</span>rauma is the most unaddressed
                and invisibilized epidemic in today’s time. 7 out of 10 children
                in India experience some form of adversity at an early age. If
                left unaddressed, these painful experiences can haunt them for
                the rest of their lives leaving a deep impact on their mental,
                emotional, and physical wellbeing.
                <br />
                <br />
                I Am Wellbeing (Nairatmya Foundation) is a mental health
                not-for-profit organization dedicated to supporting such young
                people struggling with adverse childhood experiences and
                building an ecosystem of trusted available trained adults.
                <br />
                <br />
                We believe in the power of compassion, connection, and care in
                order to develop a healthy and happy nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bottom-background relative w-[90%] lg:max-w-6xl mx-auto'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='bottom-background__img w-full'>
              <img
                src={peoplenew}
                alt='People'
                className='w-full lg:-[200px] h-full object-cover'
              />
            </div>
            <div className='bottom-background__img'>
              <img
                src={yellowbgnew1}
                alt='Yellow Background gai'
                className='w-full h-[50px] lg:h-[130px] object-cover'
              />
            </div>
          </div>

          <div className=' -mt-10 lg:-mt-20 flex gap-8 flex-wrap lg:flex-nowrap'>
            {/* Event Item 1 */}
            <div className='w-full md:w-1/2 lg:w-1/3 text-xl border bg-white p-2'>
              <div className='event-item text-center'>
                <div className='event-item__content w-full m-auto border-[#029390] border-4 py-5'>
                  <h3 className='event-item__title'>
                    <Link to='/programs' className='text-4xl font-[300]'>
                      Anubhoo
                    </Link>
                  </h3>
                  <h6 className='event-item__title text-md font-[400]'>
                    <a className='text-gray-700 cursor-default'>
                      Trauma-Informed care <br />
                      training
                    </a>
                  </h6>
                  <Link
                    to='/programs'
                    className='button gallery__button button--primary mt-8 inline-block border-2 rounded-full border-orange-300 py-2 px-6 text-sm'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Item 2 */}
            <div className='w-full md:w-1/2 lg:w-1/3 text-xl bg-white border p-2'>
              <div className='event-item text-center'>
                <div className='event-item__content w-full m-auto border-[#029390] border-4 py-5'>
                  <h3 className='event-item__title'>
                    <Link to='/programs' className='text-4xl font-[300]'>
                      Udaan
                    </Link>
                  </h3>
                  <h6 className='event-item__title text-md font-[400]'>
                    <a className='text-gray-700 cursor-default'>
                      Individual counselling and
                      <br /> therapy
                    </a>
                  </h6>
                  <Link
                    to='/programs'
                    className='button gallery__button button--primary mt-8 inline-block border-2 rounded-full border-orange-300 py-2 px-6 text-sm'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Item 3 */}
            <div className='w-full md:w-1/2 lg:w-1/3 text-xl border p-2 bg-white'>
              <div className='event-item text-center'>
                <div className='event-item__content w-full m-auto border-[#029390] border-4 py-5'>
                  <h3 className='event-item__title'>
                    <Link to='/programs' className='text-4xl font-[300]'>
                      Project Arya
                    </Link>
                  </h3>
                  <h6 className='event-item__title text-md font-[400]'>
                    <a className='text-gray-700 cursor-default'>
                      Trauma-informed social- <br />
                      emotional learning
                    </a>
                  </h6>
                  <Link
                    to='/programs'
                    className='button gallery__button button--primary mt-8 inline-block border-2 rounded-full border-orange-300 py-2 px-6 text-sm'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section about-us py-16 '>
        <div className='container mx-auto'>
          <div className='flex flex-wrap md:flex-nowrap  items-start md:justify-between justify-center gap-5 md:gap-0'>
            <div className='hidden lg:block lg:w-1/12'></div>
            <div className='max-w-sm  flex items-start justify-between'>
              <video
                preload='none'
                controls
                className='max-w-sm h-[400px]'
                poster={intro}
              >
                <source type='video/mp4' src={video} />
              </video>
            </div>

            <div className='lg:w-4/12 xl:w-6/12  flex items-center flex-col h-full '>
              <div className=' flex'>
                <img src={design} alt='Design' className='w-[300px] m-auto' />
              </div>

              <div className='lg:mb-6 mb-6'>
                <div className='counter-item flex flex-col gap-2 text-center'>
                  <div className='counter-item__lower'>
                    <span
                      ref={counterOne}
                      className='js-counter text-6xl font-bold'
                      data-target='3346'
                    >
                      {num1}
                    </span>
                  </div>
                  <div className='counter-item__top ml-10'>
                    <h6 className='counter-item__title text-lg text-center'>
                      Professionals Trained
                    </h6>
                  </div>
                </div>
              </div>

              <div className='text-center flex flex-col mt-6'>
                <div className='counter-item counter-item--style-1'>
                  <div className='counter-item__lower ml-10'>
                    <span
                      ref={counterTwo}
                      className='js-counter text-6xl font-bold'
                      data-target='100844'
                    >
                      {num2}
                    </span>
                  </div>
                  <div className='counter-item__top'>
                    <h6 className='counter-item__title text-lg'>
                      Lives Impacted
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='section elements bg-yellow-300 relative h-[100px] lg:h-[120px] '
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "bottom left",
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-x",
        }}
      >
        <div className='row absolute top-2'>
          <div className='ml-4 mt-10 md:mt-0'>
            <h2 className='lg:text-6xl text-2xl lg:mt-0 font-semibold'>
              <span className='letter-spacing'>Why we do what we do?</span>
            </h2>
          </div>
        </div>
      </section>

      <AboutUsCarousel className='max-w-xl' />

      <section
        className='section elements bg-yellow-300 h-[100px] lg:h-[120px] relative'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "bottom left",
          backgroundSize: "100% auto",
          backgroundRepeat: "repeat-x",
        }}
      >
        <div className='row mb-4 absolute top-2'>
          <div className='ml-4 mt-10 md:mt-0'>
            <h2 className='lg:text-6xl text-2xl lg:mt-0 font-semibold'>
              <span className='letter-spacing'>Clients & Partners?</span>
            </h2>
          </div>
        </div>
      </section>

      <ClientCarousel />
      <Testimonials />
    </div>
  );
};

export default Home;
