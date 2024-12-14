import React from 'react';


const angerImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/anger.png`;

const backpainImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/backpain.png`;

const beathingImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/beathing.png`;

const helplessnessImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/helplessness.png`;

const safeImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/safe.png`;

const selfImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/self.png`;

const angervideo = `${import.meta.env.VITE_PUBLIC_URL}/mediavideos/anger.mp4`;
const backpainvideo = `${import.meta.env.VITE_PUBLIC_URL}/mediavideos/backpain_degkwa.mp4`;
const beathingvideo = `${import.meta.env.VITE_PUBLIC_URL}/mediavideos/beathing_fnaq1s.mp4`;
const helplessnessvideo = `${import.meta.env.VITE_PUBLIC_URL}/mediavideos/helplessness_aohsgg.mp4`;
const safevideo = `${import.meta.env.VITE_PUBLIC_URL}/mediavideos/safe_1_kugvfm.mp4`;
const selfvideo=`${import.meta.env.VITE_PUBLIC_URL}/mediavideos/self_fljo0n.mp4`;



const Media = () => {
  const data = [
    {
      video: backpainvideo,
      img: backpainImg,
      name:"EFT Back Pain"
    },
    {
      video: helplessnessvideo,
      img: helplessnessImg,
       name:"EFT Helplessness"
    },
    {
      video: beathingvideo,
      img: beathingImg,
       name:"Breathing Exercises"
    },
    {
      video: safevideo,
      img: safeImg,
       name:"Safe Space Visualisation"
    },
    {
      video: selfvideo,
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
      src={angervideo}
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