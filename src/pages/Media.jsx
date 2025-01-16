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

import greenbg from "../imgs/program-images/greenbg.png"
const calendarBg=`${import.meta.env.VITE_PUBLIC_URL}/phase-2/calender%20bg.svg`


import calendar from '../imgs/program-images/calendar.webp'
import support from '../imgs/program-images/support.webp'


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
        <section  className="mb-9 pt-[24%] xs:pt-[14%] sm:pt-[0%]">
{/* header of arya */}
        <div
          className="bg-cover  px-5 pt-10 pb-16  bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${greenbg})` }}
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
          {/* Grief Support Booklet  */}
          <div className="px-4 lg:px-11 mt-6">
          <h1 className="text-5xl font-bold">Grief Support Booklet </h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            
            <p className="text-justify text-[20px] font-thin">
            Grief is an ocean that is ever-consuming and ever-flowing. It is not something to get rid of and definitely not easy to live with. There is no right way to work with it. All we can try is to hold space for it, be gentle with it, and allow it to move at its own pace. 
            </p>
            </div>
            <div className='flex mt-8 gap-8 mb-0  '>

              <div className='w-[40%] mt-6  '>
                <p className='text-justify text-[20px] font-thin '>Here is a booklet that we have designed to add a drop of support in the ocean of this unknown. This booklet is for anyone supporting a dear one through their journey with grief.</p>
              </div>
              <div className='w-[60%] mt-6  p-3' style={{backgroundImage:`url(${calendarBg})`}} >
                <img loading="lazy" src={support} alt="support" className='sm:h-[70%] w-[100%] '/>
              </div>
            </div>
           
          {/* ------------------------------------ */}
         
          </div>
          
          {/* Self-Care Calendar  */}

          <div className="px-4 lg:px-11 sm:-mt-[20%]">
          <h1 className="text-5xl font-bold">Self-Care Calendar </h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            
            <p className="text-justify text-[20px] font-thin">
            Self-Care Calendar, as the name suggests, is a thoughtfully designed tool that can be used by anyone to support them in their healing journey. It incorporates the mind-body-spirit triad and focuses on regulation and slow integration.  Whether you are looking for some grounding exercises or just simple ways of connecting with yourself, this self-care calendar takes you on a journey that slowly enhances your ability to support yourself. <br/><br/>

Taking care of ourselves is the truest form of self-acknowledgement and acceptance. It is a step we take not to change anything about ourselves but to allow our body to receive rest, compassion, and nurturance. <br/><br/>

Build in this 30-day Self-Care routine and allow yourself to soak in rest and slowness. If you find this helpful, write to us at info@iamwellbeing.in with your feedback and suggestions. <br/><br/>
            </p>
            </div>

            <div style={{backgroundImage:`url(${calendarBg})`}} className='p-10' >
            <img loading="lazy" src={calendar} alt="selfcare" className='md:w-[80%] h-[80vh] m-auto'/>
          </div>
            <div>
              
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