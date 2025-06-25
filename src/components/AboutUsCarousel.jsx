import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import circle1 from "../imgs/Home/circle_1.webp";
import circle2 from "../imgs/Home/circle_2.webp";
import circle3 from "../imgs/Home/circle_3.webp";
import circle4 from "../imgs/Home/circle_4.webp";
import circle5 from "../imgs/Home/circle_5.webp";
import circle6 from "../imgs/Home/circle_6.webp";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const AboutUsCarousel = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const getScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenSize);
    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, [screenSize]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="py-16">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-center  w-fit mx-auto px-4">
            {/* 1. Circular Image */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-40 h-40 tab:w-72 tab:h-72">
                <LazyLoadImage
                  src={circle1}
                  alt="People working together"
                  className="w-full h-full object-cover"
                  effect="blur"
                />
              </div>
            </div>

            {/* 2. SVG Connector */}
            <div className="flex-shrink-0">
              <SvgIcon className="h-20 tab:h-48" />
            </div>

            {/* 3. Text Box */}
            <div className="border-2 border-black rounded-3xl p-4 w-full min-h-32 tab:w-72 tab:min-h-48 flex items-center justify-center">
              <p className="text-center text-base tab:text-2xl font-semibold">
                To break the cycle of intergenerational trauma
              </p>
            </div>
          </div>
        </div>
        {/* Slide 2*/}
        <div>
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-center  w-fit mx-auto px-4">
            {/* 1. Circular Image */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-40 h-40 tab:w-72 tab:h-72">
                <LazyLoadImage
                  src={circle2}
                  alt="People working together"
                  className="w-full h-full object-cover"
                  effect="blur"
                />
              </div>
            </div>

            {/* 2. SVG Connector */}
            <div className="flex-shrink-0">
              <SvgIcon className="h-20 tab:h-48" />
            </div>

            {/* 3. Text Box */}
            <div className="border-2 border-black rounded-3xl p-4 w-full min-h-32 tab:w-72 tab:min-h-48 flex items-center justify-center">
              <p className="text-center text-base tab:text-2xl font-semibold">
                To achieve UN SDG Goal 3.4, to reduce the rate of early death
                caused by suicide, heart diseases & lung diseases
              </p>
            </div>
          </div>
        </div>
        {/* Slide 3*/}
        <div>
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-center  w-fit mx-auto px-4">
            {/* 1. Circular Image */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-40 h-40 tab:w-72 tab:h-72">
                <LazyLoadImage
                  src={circle3}
                  alt="People working together"
                  className="w-full h-full object-cover"
                  effect="blur"
                />
              </div>
            </div>

            {/* 2. SVG Connector */}
            <div className="flex-shrink-0">
              <SvgIcon className="h-20 tab:h-48" />
            </div>

            {/* 3. Text Box */}
            <div className="border-2 border-black rounded-3xl p-4 w-full min-h-32 tab:w-72 tab:min-h-48 flex items-center justify-center">
              <p className="text-center text-base tab:text-2xl font-semibold">
                To work through the challenges of addiction and other high-risk
                coping mechanisms adopted by survivors.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Slide 4*/}
        <div>
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-center  w-fit mx-auto px-4">
            {/* 1. Circular Image */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-40 h-40 tab:w-72 tab:h-72">
                <LazyLoadImage
                  src={circle4}
                  alt="People working together"
                  className="w-full h-full object-cover"
                  effect="blur"
                />
              </div>
            </div>

            {/* 2. SVG Connector */}
            <div className="flex-shrink-0">
              <SvgIcon className="h-20 tab:h-48" />
            </div>

            {/* 3. Text Box */}
            <div className="border-2 border-black rounded-3xl p-4 w-full min-h-32 tab:w-72 tab:min-h-48 flex items-center justify-center">
              <p className="text-center text-base tab:text-2xl font-semibold">
                To reduce the instances of crime and violence in vulnerable
                communities
              </p>
            </div>
          </div>
        </div>
        {/* Slide 5*/}
        <div>
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-center  w-fit mx-auto px-4">
            {/* 1. Circular Image */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-40 h-40 tab:w-72 tab:h-72">
                <LazyLoadImage
                  src={circle5}
                  alt="People working together"
                  className="w-full h-full object-cover"
                  effect="blur"
                />
              </div>
            </div>

            {/* 2. SVG Connector */}
            <div className="flex-shrink-0">
              <SvgIcon className="h-20 tab:h-48" />
            </div>

            {/* 3. Text Box */}
            <div className="border-2 border-black rounded-3xl p-4 w-full min-h-32 tab:w-72 tab:min-h-48 flex items-center justify-center">
              <p className="text-center text-base tab:text-2xl font-semibold">
              To create a Community of Mental Healthcare workers across the globe
              </p>
            </div>
          </div>
        </div>
        {/* Slide 6*/}
        <div>
          <div className="grid grid-cols-[auto_auto_auto] items-center justify-center  w-fit mx-auto px-4">
            {/* 1. Circular Image */}
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-40 h-40 tab:w-72 tab:h-72">
                <LazyLoadImage
                  src={circle6}
                  alt="People working together"
                  className="w-full h-full object-cover"
                  effect="blur"
                />
              </div>
            </div>

            {/* 2. SVG Connector */}
            <div className="flex-shrink-0">
              <SvgIcon className="h-20 tab:h-48" />
            </div>

            {/* 3. Text Box */}
            <div className="border-2 border-black rounded-3xl p-4 w-full min-h-32 tab:w-72 tab:min-h-48 flex items-center justify-center">
              <p className="text-center text-base tab:text-2xl font-semibold">
              To reduce the gap between survivors and available support by training mental health professionals               </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const SvgIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 243 397"
    fill="none"
    stroke="#000"
    strokeWidth="4"
    className={className}
    {...props}
  >
    <path d="M0 275.265h90.29c13.254 0 24-10.745 24-24V24.475C114.29 12.064 124.351 2 136.764 2s22.476 10.063 22.476 22.476v352.458a17.766 17.766 0 0 0 17.766 17.767 17.766 17.766 0 0 0 17.766-17.767v-79.67c0-13.254 10.746-24 24-24h24" />
  </svg>
);

SvgIcon.propTypes = {
  className: PropTypes.string,
};

export default AboutUsCarousel;
