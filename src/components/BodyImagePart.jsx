import React, { useEffect, useState, useRef } from 'react';
import 'aos/dist/aos.css';
import body from '../imgs/program-images/body.png';
import nerves from '../imgs/program-images/nertb.png';

const BodyImagePart = () => {
  const [isInView, setIsInView] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the parent is in view
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) {
        observer.unobserve(parentRef.current);
      }
    };
  }, []);

  return (
    <div className="flex-[50%]">
      <div
        ref={parentRef}
        className="relative h-screen flex justify-center items-center max-md:my-10"
      >
        {/* Body Background */}
        <div
          style={{ backgroundImage: `url(${body})` }}
          className="absolute inset-0 bg-contain bg-no-repeat bg-center xl:w-full xl:h-full max-xl:bg-BackgroundSize max-sm:bg-positionSmaller"
        />

        {/* Nerves Image */}
        <img
          src={nerves}
          alt="nerves"
          className={`relative z-10 -left-3 max-sm:-left-2 -top-16 sm:w-10/12  lg:w-[95%] md:w-full xl:w-[75%] h-auto object-contain w-full transition-transform duration-1000 ${
            isInView ? 'scale-105' : 'scale-75'
          }`}
        />
      </div>
    </div>
  );
};

export default BodyImagePart;
