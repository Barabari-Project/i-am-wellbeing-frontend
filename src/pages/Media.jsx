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

const yellowbgnew1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/yellowbgnew1.png`;


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
    <>
        <section id="arya" className="mb-9 pt-[24%] xs:pt-[14%] sm:pt-[0%]">
{/* header of arya */}
        <div
          className="bg-cover  px-5 pt-5 pb-16"
          style={{ backgroundImage: `url(${yellowbgnew1})` }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-6xl">Resources</h1>
        </div>
        <div  className="  p-4 lg:p-4 px-[8%] xxxl:px-[14%] border-blue-500">
           {/* top img of arya */}
       
         {/* 3slides of arya */}
        
        {/* content data */}
        <div className="px-4 lg:px-11">
          <h1 className="text-5xl font-bold">Emotional Freedom Technique</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            
            <p className="text-justify text-[20px] font-thin">
            Just like physical energy is stored in the body, emotional energy is also stored in the body. Think about how anger feels in the body, temperature rises, fists might curl up, heartbeat might increase or completely slow down. Any number of reactions might take place, proving the premise that emotions are felt and stored in the body. <br></br><br></br>

However, for many reasons like invalidation from others, unavailability of means or space for expression, or simply lack of awareness, the process of experiencing an emotion might not be completed, creating stagnation. This unprocessed emotional energy then gets stuck in the body. <br></br><br></br>

EFT or Emotional Freedom Technique is a brief novel intervention combining elements of exposure and cognitive therapy and somatic stimulation. This self-help modality can release emotions that are stored within our bodies. It is often referred to as “tapping” as it uses a two-finger tapping process on known acupuncture points, leading to a gradual release. <br></br><br></br>

Try it for yourself. Make sure to sit in a comfortable place and have some water next to you. 
Take breaks and enter this space with curiosity!  
            </p>
          </div>
          {/* ------------------------------------ */}
         
            
            
        </div>
        </div>
      </section>
    </>










//     <div className="lg:flex py-[3%] px-[3%] pt-[100px] md:pt-[4.5%] lg:gap-3 m-auto w-[99%] 2xl:px-[10%]">
      
//   {/* Left side */}
//   <div className="lg:flex-1 lg:px-1">
//   <video preload="none" controls poster={angerImg} className="lg:h-[82%] lg:w-full lg:px-[2%] ">
//     <source
//       type="video/mp4"
//       src={angervideo}
//     />
//   </video>
//   <h1 className="text-center font-bold text-3xl p-2">EFT for Anger</h1>
//       </div>
      

//   {/* Right side */}
//   <div className="lg:flex lg:flex-wrap lg:flex-row  lg:flex-1 ">
//     {data.map((item, index) => (
//       <div
//         key={index}
//         className="lg:w-1/2 lg:pr-10 lg:pl-4"
//       >
//         <video
//           preload="none"
//           controls
//           poster={item.img}
//           className="w-full h-auto "
//         >
//           <source type="video/mp4" src={item.video} />
//         </video>
//         <h1 className="text-center font-bold text-3xl p-2">{item.name}</h1>
//       </div>
//     ))}
//   </div>
    // </div>
    

  )
}

export default Media