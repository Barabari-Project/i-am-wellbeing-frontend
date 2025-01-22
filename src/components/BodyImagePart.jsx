import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import body from '../imgs/program-images/body.png';
import nerves from '../imgs/program-images/nerves.png';

const BodyImagePart = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      // Whether to animate only once when scrolling
    });
  }, []);
  return (
    <div className="">
  <div
    style={{ backgroundImage: `url(${body})` }}
    className="h-screen bg-contain bg-no-repeat bg-center flex justify-center items-center  pr-4 sm:pr-8 "
      >
        <img src={nerves} alt="nerves"   data-aos="fade-in" className='h-[80%] w-full'/>
    {/* Nerve Image */}
    {/* <div className="w-[60%]">
      <img src={nerves} alt="nerves" className="w-full h-auto" />
    </div>

    {/* Text Elements */}
    {/* <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 text-center">
      {/* Top Text */}
      {/* <div className="absolute left-[20%] top-[20%] text-[16px] font-light max-w-[110px]">
        <p>Deeper self-awareness and compassion</p>
      </div>
      <div className="absolute top-[20%] right-[20%] text-[16px] font-light max-w-[110px]">
        <p>Impact of trauma on brain and body</p>
      </div>

      {/* Middle Text */}
      {/* <div className="absolute left-[4%] top-[35%] text-[16px] font-light max-w-[110px]">
        <p>TIC principles in daily interactions</p>
      </div>
      <div className="absolute right-[4%] top-[35%] text-[16px] font-light max-w-[110px]">
        <p>Felt sense of safety with self and the group</p>
      </div>

      {/* Bottom Text */}
      {/* <div className="absolute bottom-[35%] left-[3%] text-[16px] font-light max-w-[110px]">
        <p>Stronger connection and trust with others</p>
      </div>
      <div className="absolute bottom-[35%] right-[3%] text-[16px] font-light max-w-[110px]">
        <p>Holistic integration of TIC</p>
      </div>
      <div className="absolute bottom-[20%] left-[18%] text-[16px] font-light max-w-[110px]">
        <p>Non-judgmental and curious approach to life</p>
      </div>
      <div className="absolute bottom-[20%] right-[18%] text-[16px] font-light max-w-[110px]">
        <p>Efficient emotional regulation</p>
      </div> */}
    {/* </div>    */}
  </div>
</div>



  )
}

export default BodyImagePart




{/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 border-2 border-black flex-1">
      {/* Container for the diagram */}
      {/* <div className="relative w-[400px] h-[600px]"> */}
        {/* Central human figure (can replace with an SVG or image) */}
        {/* <div className="absolute inset-0 flex justify-center">
                  <div className="w-[50%] h-full justify-center  " style={{ backgroundImage: `url(${body})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <img src={nerves} alt="nerves" className="mt-[60%] border-2 border-black" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 text-center">
          <p className="text-sm font-semibold">Deeper self-awareness and compassion</p>
        </div>

        <div className="absolute top-20 left-0 text-right">
          <p className="text-sm font-semibold">TIC principles in daily interactions</p>
        </div>

        <div className="absolute top-40 right-0 text-left">
          <p className="text-sm font-semibold">Impact of trauma on brain and body</p>
        </div> */}

        {/* <div className="absolute top-60 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm font-semibold">Felt sense of safety with self and the group</p>
        </div>

        <div className="absolute bottom-20 left-0 text-right">
          <p className="text-sm font-semibold">Non-judgmental and curious approach to life</p>
        </div>

        <div className="absolute bottom-20 right-0 text-left">
          <p className="text-sm font-semibold">Efficient emotional regulation</p>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-center">
          <p className="text-sm font-semibold">Stronger connection and trust with others</p>
        </div>
                    
          </div> */}
        {/* </div> */}

        {/* Labels and descriptions */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 text-center">
          <p className="text-sm font-semibold">Deeper self-awareness and compassion</p>
        </div>

        <div className="absolute top-20 left-0 text-right">
          <p className="text-sm font-semibold">TIC principles in daily interactions</p>
        </div>

        <div className="absolute top-40 right-0 text-left">
          <p className="text-sm font-semibold">Impact of trauma on brain and body</p>
        </div>

        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm font-semibold">Felt sense of safety with self and the group</p>
        </div>

        <div className="absolute bottom-20 left-0 text-right">
          <p className="text-sm font-semibold">Non-judgmental and curious approach to life</p>
        </div>

        <div className="absolute bottom-20 right-0 text-left">
          <p className="text-sm font-semibold">Efficient emotional regulation</p>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-center">
          <p className="text-sm font-semibold">Stronger connection and trust with others</p>
        </div> */}
      {/* </div>
    </div>  */}