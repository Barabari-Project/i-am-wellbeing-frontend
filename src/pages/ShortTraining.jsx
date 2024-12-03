import React from "react";

import stp0 from "../imgs/stp data/stp0.png";
import stp1 from "../imgs/stp data/stp1.png";
import stp3 from "../imgs/stp data/stp3.png";
import stp4 from "../imgs/stp data/stp4.png";
// import stp5 from "../imgs/stp data/stp5.png";
import stp6 from "../imgs/stp data/stp6.png";
import videoposter from "../imgs/stp data/stpvideo1.png";

import stpnew from "../imgs/stp data2/stp1.png";
import stp5 from "../imgs/stp data2/stp5.png";
import stp7 from "../imgs/stp data2/stp6.png";
import stpnew3 from "../imgs/stp data2/stpnew.png";
import stpnew2 from "../imgs/stp data2/stpnew2.png";

const ShortTraining = () => {
  return (
    <>
      {/* ---------------opening page------------------------------------ */}
      <section
        className="bg-no-repeat bg-cover bg-center h-auto pt-[200px] pb-10 w-full relative"
        style={{ backgroundImage: `url(${stp0})` }}
      >
        <div className="bg-customPeach opacity-80 w-full text-center">
          <h1 className="text-[38px] font-black tracking-wider my-2">
            Short Trainings Program
          </h1>
          <p className="text-[#109ca2] mb-[3%]">
            Bridging the gap from theory to practice
          </p>
        </div>

        {/* Buttons Section */}
        <div className="w-full  flex items-center justify-center ">
  <div className="w-[100%] sm:w-[78%] flex flex-col  md:flex-row flex-wrap justify-center items-center mt-[100px]">
    <button className="bg-[#fbf4e1] px-[60px] py-[10px] rounded-md font-bold text-[18px] mb-1 sm:mb-4 mx-2  max-w-[200px] xs:max-w-none">
      <a href="#objectives">Objectives</a>
    </button>
    <button className="bg-[#fbf4e1] px-[60px] py-[10px] rounded-md font-bold text-[18px] mb-1 sm:mb-4 mx-2 max-w-[200px] xs:max-w-none">
      <a href="#Key-Features">Key Features</a>
    </button>
    <button className="bg-[#fbf4e1] px-[60px] py-[10px] rounded-md font-bold text-[18px] mb-1 sm:mb-4 mx-2 max-w-[200px] xs:max-w-none">
      <a href="#training">Training Schedule</a>
    </button>
    <button className="bg-[#fbf4e1] px-[60px] py-[10px] rounded-md font-bold text-[18px] mb-1 sm:mb-4 mx-2 max-w-[200px] xs:max-w-none">
      <a href="#eligibilty">Eligibility</a>
    </button>
  </div>
</div>
        {/* Apply Now Button */}
        <div className="flex justify-center my-7">
          <button className="bg-customPeach text-white px-[62px] py-[12px] rounded-md font-extrabold text-[14px] md:text-[18px]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlYsPu5bOkK_Hm-r3LcUbdkYepqopCTgqja4UcC3AVMbPxXw/viewform"
              target="_blank"
            >
              APPLY NOW
            </a>
          </button>
        </div>

        <div className="bg-[#000000ab] opacity-90 text-white p-2 mx-[10%] lg:mx-[4%] font-bold text-[25px] 2xl:mx-[28%] leading-7">
          <p>
            Questions before registering? Please read through this page. If you
            still have questions, please send us an email at
            info@iamwellbeing.in
          </p>
        </div>
      </section>

      {/* ---------------------------------intention----------------------------- */}
      <section className="mx-[10%] lg:mx-[3.5%] py-16  2xl:px-[22%] ">
        <h1 className="text-[40px] mb-2 font-black">Intention</h1>
        <p className="text-justify leading-9 text-[22px] 2xl:text-[23px]">
          With the intention of building the capacity of young mental health
          professionals and students towards trauma-informed practices and
          holistic healing, I Am Wellbeing has designed a series of short
          trainings which will be conducted by experts from the field.
          <br />
          The primary intent is to bridge the gap between academic knowledge and
          practical experience through the medium of experiential training that
          is backed by years of experience and research while being financially
          accessible.
        </p>
        <video
          preload="none"
          controls
          poster={videoposter}
          className="w-screen sm:w-[68%] m-auto mt-4"
        >
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/dulsc0xrw/video/upload/v1732819022/stpzv_pjfoqa.mp4"
          />
        </video>
      </section>

      {/* -------------------------------------objectives-------------------------- */}
      <section
        id="objectives"
        className=" px-[4%] sm:px-[10%] lg:px-[3.5%] py-7 bg-customPeach 2xl:px-[26%] "
      >
        <h1 className="text-[40px] mb-2 font-black">Objectives</h1>
        <img
          src={stpnew}
          className=" pr-0 sm:pr-[20%] 2xl:pr-[20%]"
          alt="img"
        />
      </section>

      {/* ----------------------------------------key features------------------------------ */}
      <section
        id="Key-Features"
        className=" px-[4%] sm:px-[10%] lg:px-[3.5%] py-16  2xl:px-[26%] "
      >
        <h1 className="text-[40px] mb-2 font-black">key features</h1>
        {/* <img src={stp4} alt="img" className="md:w-[98%]"/> */}

        <div>
          <div className="bg-[#f6f0df] mt-5 flex text-[10px] xs:text-[14px] sm:text-[16px] m-auto md:text-[18px] xl:w-[80%] w-[97%] lg:text-[20px]  2xl:w-[97%] 2xl:text-[20px] rounded-md">
            <h1 className="w-[26%] py-6 text-center ">Who is it for?</h1>
            <div className="bg-customPeach w-[72%] my-3 px-4 flex flex-col justify-center rounded-md">
              <h1>
                Young mental health professionals and post graduate psychology
                students
              </h1>
            </div>
          </div>

          <div className=" bg-customPeach  mt-5 flex text-[10px] xs:text-[14px] sm:text-[16px] m-auto md:text-[18px] xl:w-[80%] w-[97%] lg:text-[20px] 2xl:w-[97%] 2xl:text-[20px] rounded-md">
            <h1 className="w-[26%] py-6 text-center ">Expert Facilitators</h1>
            <div className=" bg-[#f6f0df] w-[72%] my-3 px-4 flex flex-col justify-center rounded-md">
              <h1>
                Experienced mental health professionals and researchers with
                expertise in trauma-informed care
              </h1>
            </div>
          </div>

          <div className="bg-[#f6f0df] mt-5 flex text-[10px] xs:text-[14px] sm:text-[16px] m-auto  md:text-[18px] xl:w-[80%] w-[97%] lg:text-[20px] 2xl:w-[97%] 2xl:text-[20px] rounded-md">
            <h1 className="w-[26%] py-6 text-center ">Low-Cost Initiative</h1>
            <div className="bg-customPeach w-[72%] my-3 px-4 flex flex-col justify-center rounded-md">
              <h1>
                Each training is priced affordably to ensure that financial
                constraints are not a hindrance in learning
              </h1>
            </div>
          </div>

          <div className=" bg-customPeach mt-5 flex text-[10px] xs:text-[14px] sm:text-[16px]  m-auto md:text-[18px]  xl:w-[80%] w-[97%] lg:text-[20px] 2xl:w-[97%] 2xl:text-[20px] rounded-md">
            <h1 className="w-[26%] py-6 text-center ">Certificate</h1>
            <div className=" bg-[#f6f0df] w-[72%] my-3 px-4 flex flex-col justify-center rounded-md">
              <h1>
                Certificate of Participation/Completion will be provided at the
                end of each training
              </h1>
            </div>
          </div>

          <div className="bg-[#f6f0df] mt-5 flex text-[10px] xs:text-[14px] sm:text-[16px] m-auto  md:text-[18px] xl:w-[80%] w-[97%] lg:text-[20px] 2xl:w-[97%] 2xl:text-[20px] rounded-md">
            <h1 className="w-[26%] py-6 text-center ">Free Resources</h1>
            <div className="bg-customPeach w-[72%] my-3 px-4 flex flex-col justify-center rounded-md">
              <h1>
                Free reading material and meticulously researched resources will
                be provided by the trainers
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------training--------------------------------- */}
      <section
        id="training"
        className="px-[4%] sm:px-[10%] lg:px-[3.5%] py-5 2xl:px-[26%] "
      >
        <h1 className="text-[40px] mb-6 font-black">Training schedule</h1>
        <img src={stp3} alt="img" className="md:w-[64%] 2xl:w-[100%]" />
      </section>
      {/* ----------------------------Eligibility------------------------------- */}
      <section
        id="eligibilty"
        className="px-[4%] sm:px-[10%] lg:px-[3.5%] py-7 bg-customPeach 2xl:px-[26%] "
      >
        <h1 className="text-[40px] mb-2 font-black">Eligibility</h1>
        <ul class="list-disc pl-[4%]  leading-9 text-[22px]">
          <li>
            Students from psychology and allied fields (postgraduate students
            only).
          </li>
          <li>Working mental health practitioners.</li>
        </ul>
      </section>
      {/* -------------------------------contribution--------------------------- */}
      <section className="px-[4%] sm:px-[10%] lg:px-[3.5%] py-7 2xl:px-[26%] ">
        <h1 className="text-[40px] mb-2 font-black">Contribution*</h1>
        <ul class="list-disc pl-[4%]  leading-9 text-[22px]">
          <li>
            Kindly note that the minimum contribution per training is INR 500
            (Five Hundred Rupees Only). However, you can choose to contribute
            more.
          </li>
          <li>
            If you choose to attend more than one training, the amount to be
            paid should be INR 500 multiplied by the number of trainings you
            have selected.
          </li>
          <li>
            Following details will be required to complete the payment process:
            Pan card, address, and a screenshot of the payment.
          </li>
          <li>The amount can be paid via online transaction (NEFT/IMPS):</li>
        </ul>
        <p className="text-justify leading-9 text-[22px] pt-6">
          All contributions will be utilised for Nairatmya Foundation's work
          with under- resourced communities...
        </p>
      </section>
      {/* ----------------------------know your trainers--------------------------- */}
      <section className="px-[4%] sm:px-[10%] lg:px-[3.5%] py-7 bg-customPeach 2xl:px-[26%] ">
        <h1 className="text-3xl sm:text-[40px] mb-2 font-black">
          Know Your Trainers
        </h1>
        {/* <img src={stp5} alt="img"/> */}
        <div className="lg:px-[2%]">
          <div className="lg:flex mt-[4%] gap-5 leading-10">
            <img
              src={stp5}
              alt="img"
              className="justify-center h-[90%] w-[30%] lg:w-[15%] 2xl:w-[30%] m-auto"
            />

            <div className="md:ml-6 text-xl">
              <h2 className="text-lg md:text-2xl font-bold mb-2">
                Shambhavi Singh (She/Her)
              </h2>
              <p className=" text-justify  leading-relaxed">
                Shambhavi has studied Child and Adolescent Psychology at Queen's
                University, Belfast. She is a Trauma-Informed Arts-Based
                Therapist and Solution-Focused Brief Therapist with expertise in
                Social-Emotional Concerns and Parenting. She has been working
                for 13 years and uses arts-based mediums to work with trauma
                survivors. In her personal life, she lives by Buddhist
                philosophy, enjoys coloring, cleaning, and watching reality TV
                in her free time.
              </p>
            </div>
           
          </div>

          <div className="lg:flex mt-[4%] gap-5 leading-10">
            <img
              src={stp7}
              alt="img"
              className="justify-center h-[90%] w-[30%] lg:w-[15%]  2xl:w-[30%] m-auto"
            />

            <div className="md:ml-6 text-xl">
              <h2 className="text-lg md:text-2xl font-bold mb-2">
                Akanksha Chandele (They/Them)
              </h2>
              <p className=" text-justify  leading-relaxed">
                Akanksha is a Holistic Trauma Therapist actively engaged in
                working with survivors of abuse and trauma. Their practice is
                rooted in building interconnectedness and compassion for all.
                They are a certified Arts-Based Therapist and Somatic
                Practitioner. With a deep inclination to provide holistic
                support to people from vulnerable communities, they started I Am
                Wellbeing, an organisation dedicated to making India
                Trauma-Informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------know your trainers2--------------------------- */}
      <section className=" px-[4%] sm:px-[10%] lg:px-[3.5%] py-7 2xl:px-[26%]  ">
        <div className="lg:px-[2%]">
          <div className="lg:flex mt-[4%] gap-5 leading-10">
            <img
              src={stpnew3}
              alt="img"
              className="justify-center h-[90%] w-[30%] lg:w-[15%] 2xl:w-[30%] m-auto"
            />

            <div className="md:ml-6 text-xl">
              <h2 className="text-lg md:text-2xl font-bold mb-2">
                Rakshita Goel (She/Her)
              </h2>
              <p className="text-justify   leading-relaxed">
                Rakshita Goel is a Creative Arts therapist specialising in
                Dramatherapy, as well as a certified Emotional Freedom Technique
                (EFT) practitioner, with over 8 years of experience in mental
                health. For the past 5 years, she has been practicing as a
                therapist at her private practice, taptoheal. Additionally, she
                is affiliated with, Aagaz Theatre Trust, FAHI (Foundation of
                Arts and Health India), and serves on the Executive Board of the
                Drama Therapy Association of India (DTI).
              </p>
            </div>
          </div>

          <div className="lg:flex mt-[4%] gap-5 leading-10">
            <img
              src={stpnew2}
              alt="img"
              className="justify-center h-[90%] w-[30%] lg:w-[15%]  2xl:w-[30%] m-auto"
            />

            <div className="md:ml-6 text-xl">
              <h2 className="text-lg md:text-2xl font-bold mb-2">
                Maitreyi Nigwekar (She/her)
              </h2>
              <p className=" text-justify  leading-relaxed">
                Maitreyi is a Trauma-Informed Healer working with survivors of
                C-PTSD, abuse, & individuals moving through grief. Her approach
                involves working with different archetypes, belief systems,
                patterns and the body. Through her work, she hopes to create a
                world free of pain, where people are able to invite joy, freedom
                and safety into their lives.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:w-1/2 m-auto md:space-x-6 items-start my-8 ">
          <button className="border-2 border-customPeach text-[#333] font-bold py-3 px-6 rounded-50px transition duration-300 ease-in-out hover:bg-customPeach hover:shadow-2xl hover:-translate-y-1 text-[12px]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlYsPu5bOkK_Hm-r3LcUbdkYepqopCTgqja4UcC3AVMbPxXw/viewform"
              target="_blank"
            >
              REGISTER HERE
            </a>
          </button>
          <button className="border-2 border-customPeach text-[#333] font-bold py-3 px-6 rounded-50px mt-4 md:mt-0 transition duration-300 ease-in-out hover:bg-customPeach hover:shadow-2xl hover:-translate-y-1  text-[12px]">
            <a
              href="https://www.iamwellbeing.org/imgs/Short%20Trainings%20Brochure%20Final%20.pdf"
              target="_blank"
            >
              DOWNLOAD THE BROCHURE
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default ShortTraining;
