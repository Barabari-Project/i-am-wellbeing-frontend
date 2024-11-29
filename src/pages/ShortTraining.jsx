import React from "react";

import stp0 from "../imgs/stp data/stp0.png";
import stp1 from "../imgs/stp data/stp1.png";
import stp3 from "../imgs/stp data/stp3.png";
import stp4 from "../imgs/stp data/stp4.png";
import stp5 from "../imgs/stp data/stp5.png";
import stp6 from "../imgs/stp data/stp6.png";
import videoposter from "../imgs/stp data/stpvideo1.png";

const ShortTraining = () => {
  return (
    <>
      {/* ---------------opening page------------------------------------ */}
      <section className={`bg-no-repeat bg-cover bg-center h-auto pt-[200px] pb-10  `} style={{ backgroundImage: `url(${stp0})`,  }}>
        <div className="bg-customPeach opacity-80  w-full text-center ">
         
          <h1 className="text-[38px] font-black tracking-wider mt-3 ">Short Trainings Program</h1>
          <p className="text-[#109ca2] mb-[3%]">Bridging the gap from theory to practice</p>
        </div>
        {/* ---------------------------buttons----------------------------- */}
       
        <div className="w-[78%] m-auto md:flex md:flex-wrap  mt-24">
        
          <button className="bg-white px-[60px] py-[10px] rounded-md font-bold text-[18px] mr-6 mb-2">
            <a href="#objectives">Objectives</a>
          </button>
         
          <button className="bg-white px-[60px] py-[10px] rounded-md font-bold text-[18px] mr-6 mb-2">
            <a href="#Key-Features">Key Features</a>
            </button>
         
         
          <button className="bg-white px-[60px] py-[10px] rounded-md font-bold text-[18px] mr-6 mb-2">
            <a href="#training">Training Schedule</a>
            </button>
        
         
          <button className="bg-white px-[60px] py-[10px] rounded-md font-bold text-[18px]  mb-2">
            <a href="#eligibilty">Eligibilty</a>
          </button>
        
        </div>
        <div className=" mx-[40%] my-7">
        <button className="bg-customPeach  text-white px-[62px] py-[12px] rounded-md font-extrabold text-[18px]   ">
            <a href="">APPLY NOW</a>
          </button>
        </div>
        <div className="bg-[#000000ab] opacity-90  text-white p-2 mx-[10%] lg:mx-[4%]  font-bold text-[25px]  ">
          <p>Questions before registering? Please read through this page. If you still have questions, please send us an email at info@iamwellbeing.in</p>
        </div>
      
      </section>
      {/* ---------------------------------intention----------------------------- */}
      <section className="mx-[10%] lg:mx-[3.5%] py-16  ">
        <h1 className="text-[40px] mb-2 font-black">Intention</h1>
        <p className="text-justify leading-9 text-[22px]">With the intention of building the capacity of young mental health professionals and students towards trauma-informed practices and holistic healing, I Am Wellbeing has designed a series of short trainings which will be conducted by experts from the field.<br/>
          The primary intent is to bridge the gap between academic knowledge and practical experience through the medium of experiential training that is backed by years of experience and research while being financially accessible.</p>
          <video preload="none" controls poster={videoposter} className=" w-[68%] m-auto mt-4">
    <source
      type="video/mp4"
      src="https://res.cloudinary.com/dulsc0xrw/video/upload/v1732819022/stpzv_pjfoqa.mp4"
    />
  </video>
      </section>
      {/* -------------------------------------objectives-------------------------- */}
      <section id="objectives" className="px-[10%] lg:px-[3.5%] py-7 bg-customPeach ">
        <h1 className="text-[40px] mb-2 font-black">Objectives</h1>
        <img src={stp1} alt="img"/>
      </section>
      {/* ----------------------------------------key features------------------------------ */}
      <section id="Key-Features" className="px-[10%] lg:px-[3.5%] py-16 ">
        <h1 className="text-[40px] mb-2 font-black">key features</h1>
        <img src={stp4} alt="img" className="md:w-[98%]"/>
      </section>
      {/* ----------------------------------training--------------------------------- */}
      <section id="training"  className="px-[10%] lg:px-[3.5%] py-7 ">
        <h1 className="text-[40px] mb-6 font-black">Training schedule</h1>
        <img src={stp3} alt="img" className="md:w-[64%]"/>
      </section>
      {/* ----------------------------Eligibility------------------------------- */}
      <section id="eligibilty" className="px-[10%] lg:px-[3.5%] py-7 bg-customPeach">
        <h1 className="text-[40px] mb-2 font-black">Eligibility</h1>
        <ul class="list-disc pl-[4%] text-justify leading-9 text-[22px]">
  <li>Students from psychology and allied fields (postgraduate students only).</li>
  <li>Working mental health practitioners.</li>
</ul>
      </section>
      {/* -------------------------------contribution--------------------------- */}
      <section  className="px-[10%] lg:px-[3.5%] py-7 ">
        <h1 className="text-[40px] mb-2 font-black">Contribution*</h1>
        <ul class="list-disc pl-[4%] text-justify leading-9 text-[22px]">
  <li>Kindly note that the minimum contribution per training is INR 500 (Five Hundred Rupees Only). However, you can choose to contribute more.</li>
          <li>If you choose to attend more than one training, the amount to be paid should be INR 500 multiplied by the number of trainings you have selected.</li>
          <li>Following details will be required to complete the payment process: Pan card, address, and a screenshot of the payment.</li>
          <li>The amount can be paid via online transaction (NEFT/IMPS):</li>
        </ul>
        <p className="text-justify leading-9 text-[22px] pt-6">All contributions will be utilised for Nairatmya Foundation's work with under- resourced communities...</p>
      </section>
      {/* ----------------------------know your trainers--------------------------- */}
      <section  className="px-[10%] lg:px-[3.5%] py-7 bg-customPeach">
        <h1 className="text-[40px] mb-2 font-black">Know Your Trainers</h1>
        <img src={stp5} alt="img"/>
      </section>
      <section className="px-[10%] lg:px-[3.5%] py-7 ">
        <img src={stp6} alt="img" />
        <div>
          <button className="border-2 border-customPeach">REGISTER HERE</button>
          <button className="border-2 border-customPeach">DOWNLOAD THE BROCHURE </button>
       </div>
      </section>
    </>
  );
};

export default ShortTraining;
