import React from 'react';
import angerImg from "../imgs/mediaImg/anger.png";

import backpainImg from "../imgs/mediaImg/backpain.png";

import beathingImg from "../imgs/mediaImg/beathing.png";

import helplessnessImg from "../imgs/mediaImg/helplessness.png";


import safeImg from "../imgs/mediaImg/safe.png";


import selfImg from "../imgs/mediaImg/self.png";


const Media = () => {
  const data = [
    {
      video: "https://res.cloudinary.com/dulsc0xrw/video/upload/v1732541803/backpain_degkwa.mp4",
      img: backpainImg,
      name:"EFT Back Pain"
    },
    {
      video: "https://res.cloudinary.com/dulsc0xrw/video/upload/v1732541663/helplessness_aohsgg.mp4",
      img: helplessnessImg,
       name:"EFT Helplessness"
    },
    {
      video: "https://res.cloudinary.com/dulsc0xrw/video/upload/v1732541542/beathing_fnaq1s.mp4",
      img: beathingImg,
       name:"Breathing Exercises"
    },
    {
      video: "https://res.cloudinary.com/dulsc0xrw/video/upload/v1732545005/safe_1_kugvfm.mp4",
      img: safeImg,
       name:"Safe Space Visualisation"
    },
    {
      video: "https://res.cloudinary.com/dulsc0xrw/video/upload/v1732541269/self_fljo0n.mp4",
      img: selfImg,
       name:"EFT Self Worth"
    },
  ]
  return (
    <div className="lg:flex py-[3%] px-[3%] pt-[100px] md:pt-[4.5%] lg:gap-3 m-auto w-[99%] 2xl:px-[10%]">
  {/* Left side */}
  <div className="lg:flex-1 lg:px-1">
  <video preload="none" controls poster={angerImg} className="lg:h-[82%] lg:w-full lg:px-[2%] ">
    <source
      type="video/mp4"
      src="https://res.cloudinary.com/dulsc0xrw/video/upload/v1732542071/anger_vr1f5b.mp4"
    />
  </video>
  <h1 className="text-center font-bold text-3xl p-2">EFT for Anger</h1>
      </div>
      

  {/* Right side */}
  <div className="lg:flex lg:flex-wrap lg:flex-row  lg:flex-1 ">
    {data.map((item, index) => (
      <div
        key={index}
        className="lg:w-1/2 lg:pr-10 lg:pl-4"
      >
        <video
          preload="none"
          controls
          poster={item.img}
          className="w-full h-auto "
        >
          <source type="video/mp4" src={item.video} />
        </video>
        <h1 className="text-center font-bold text-3xl p-2">{item.name}</h1>
      </div>
    ))}
  </div>
</div>

  )
}

export default Media