import React from "react";
import WalkingPerson from "../components/WalkingPerson";


const peoplenew = `${import.meta.env.VITE_PUBLIC_URL}/Home/peoplenew.png`;
const yellowbgnew1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/yellowbgnew1.png`;
const greenbg = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/greenbg.png`;





const anubho1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/1.svg`;
const anubho2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho2.png`
const anubho3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho3.png`
const anubho4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho4.png`
const anubho5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho5.png`
const anubho6 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho6.png`
const anubho7 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho7.png`



const udan1 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan1.png`;
const udan2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan2.png`
const udan3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan3.png`
const udan4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan4.png`
const udan5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan5.png`




const arya1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/5.svg`;
const arya2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya2.png`
const arya3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya3.png`
const arya4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya4.png`
const arya5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya5.png`
const arya6 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya6.png`
const arya7 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya7.png`





//animations
import animation1 from '../imgs/program-images/animation1.gif'
import peopleAnubho from '../imgs/program-images/peopleAnubho.jpg'
import textBorder from '../imgs/program-images/text-border.png'


const Programe = () => {
  return (
    <>
      {/* programe first page */}
      <section className="bottom-background relative w-[100%] lg:max-w-[100%] lg:my-14 mx-auto mb-9 pt-[22%] sm:pt-6 px-[8%]  xxxl:px-[13%] xxxl:pt-[6%]">
        <div className="container mx-auto  md:w-[93%]">
          <div className="flex flex-col items-center">
            <div className="bottom-background__img w-full">
              <img loading="lazy"
                src={peoplenew}
                alt="People"
                className="w-full lg:-[100px] h-full object-cover "
              />
            </div>
            <div className="bottom-background__img w-full">
              <img loading="lazy"
                src={yellowbgnew1}
                alt="Yellow Background"
                className="w-full h-[50px] lg:h-[130px] object-cover "
              />
            </div>
          </div>

          <div className=" -mt-10 lg:-mt-20 flex gap-7 flex-wrap lg:flex-nowrap ">
            {/* Event Item 1 Anubhoo*/}
            <div className="w-full  lg:w-1/3 text-xl border bg-white p-2 m-auto">
              <div className="event-item text-center">
                <div className="event-item__content w-full m-auto border-[#029390] border-4 py-7 ">
                  <h3 className="event-item__title mb-2">
                    <a href="#" className="text-4xl font-[300]">
                      Anubhoo
                    </a>
                  </h3>
                  <h6 className="event-item__title text-md font-[400]">
                    <a href="#" className="">
                      Trauma-Informed care <br />
                      training
                    </a>
                  </h6>
                  <a
                    className="button gallery__button button--primary mt-8 inline-block border-2 rounded-full border-orange-300 py-2 px-6 text-sm"
                    href="#anubho"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Event Item 2 Udaan*/}
            <div className="w-full  lg:w-1/3 text-xl bg-white border p-2 m-auto">
              <div className="event-item text-center">
                <div className="event-item__content w-full m-auto border-[#029390] border-4 py-7">
                  <h3 className="event-item__title mb-2">
                    <a href="#" className="text-4xl font-[300]">
                      Udaan
                    </a>
                  </h3>
                  <h6 className="event-item__title text-md font-[400] ">
                    <a href="#" className="">
                      Individual counselling and
                      <br /> therapy
                    </a>
                  </h6>
                  <a
                    className="button gallery__button button--primary mt-8 inline-block border-2 rounded-full border-orange-300 py-2 px-6 text-sm"
                    href="#udaan"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Event Item 3 arya */}
            <div className="w-full lg:w-1/3 text-xl border p-2 bg-white m-auto">
              <div className="event-item text-center">
                <div className="event-item__content w-full m-auto border-[#029390] border-4 py-7">
                  <h3 className="event-item__title mb-2">
                    <a href="#" className="text-4xl font-[300]">
                      Project Arya
                    </a>
                  </h3>
                  <h6 className="event-item__title text-md font-[400]">
                    <a href="#" className="">
                      Trauma-informed social- <br />
                      emotional learning
                    </a>
                  </h6>
                  <a
                    className="button gallery__button button--primary mt-8 inline-block border-2 rounded-full border-orange-300 py-2 px-6 text-sm"
                    href="#arya"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anubhoooo page */}
      <section id="anubho" className="mb-9 ">
        {/* header of anubho */}
        <div
          className="bg-cover  px-5 pt-5 pb-16 "
          style={{ backgroundImage: `url(${yellowbgnew1})` }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-6xl align-text-bottom">Anubhoo</h1>
        </div>
        <div className=" p-4 lg:p-4 px-[8%] xxxl:px-[14%]  ">
          {/* top img of anubho */}
        <div className="lg:flex m-auto  px-4 lg:px-11 lg:gap-4 ">
          <div className="m-auto">
            <img loading="lazy" src={anubho1} alt="anubho image"></img>
          </div>
          <div className="w-full sm:p-3  ">
            <h1 className="text-right w-[99%] font-bold text-4xl pb-4">
              Creating ecosystems of care
            </h1>
            <p className="text-[22px] leading-9 text-justify ">
              With the dream of Making India Trauma-Informed, Anubhoo is a
              training and skill building initiative which focuses on equipping
              and training all the stakeholders, like psychologists, social
              workers, teachers, parents, and caregivers, who are directly
              involved in working with young survivors of abuse and neglect in
              trauma informed care practices (TICP)
            </p>
          </div>
        </div>

          

        {/* 3slides of anubho */}
        <div className="flex flex-wrap justify-center gap-10 m-auto mb-10">
  {/* Card 1 */}
  <div className="flex flex-col justify-center items-center xs:h-auto xs:w-[70%] sm:w-[28%] md:w-[24%] lg:w-[24%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-xl  md:p-4 lg:text-2xl lg:p-8">
      Specialized curriculum for trauma-informed training
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col justify-center items-center xs:w-[70%] sm:w-[28%] md:w-[24%] lg:w-[24%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium  text-2xl p-14  sm:text-sm sm:p-2 md:text-xl  md:p-4 lg:text-2xl lg:p-8">
    Rooted in the socio-cultural context of India 
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col justify-center items-center xs:w-[70%] sm:w-[28%] md:w-[24%] lg:w-[24%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-xl md:p-4 lg:text-2xl lg:p-8">
    Identification, assessment, and working with trauma 
    </p>
            </div>
            
            <div className="px-4 lg:px-11">
          <h1 className="text-4xl font-bold">Corporate and Institutional Trainings</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            
            <p className="text-justify text-[20px] font-thin">
            In addition to training mental health professionals in the field, we are dedicated to creating a holistic system of support for anyone engaging in meaningful interactions with other human beings. Our efforts extend beyond traditional mental health settings to include the facilitation of diverse corporate and institutional training programs aimed at enhancing individual and collective well-being. <br/> <br/>

For corporate settings, we provide specialized training such as POSH (Prevention of Sexual Harassment) to ensure safe and inclusive workplaces, training aimed at Team Building and Communication to strengthen interpersonal dynamics, and developing a Healthy Work Environment to boost productivity and team satisfaction. <br/> <br/>

In educational and institutional contexts, we prioritize the well-being of all individuals by offering programmes focused on Teachers' Well-being, equipping them with Emotional Regulation Tools to navigate stress, build mindfulness, and foster a healthier and safer environment for both students and teachers. <br/> <br/>

Our comprehensive approach acknowledges that mental and emotional health are integral to every aspect of human interaction. By addressing these areas, we aim to cultivate environments where individuals and teams can feel a sense of safety and security and thrive both personally and professionally.
            </p>
          </div>
          
         
            
           
        </div>

</div>

          {/* content data */}
          
       
        </div>
      </section>



      {/* udaan page */}
      <section id="udaan" className="mb-9">
         {/* header of udan */}
        <div
          className="bg-cover bg-center px-5 pt-5 pb-16"
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-6xl text-white">Udaan</h1>
        </div>
        
        <div className=" p-4 lg:p-4 px-[8%] xxxl:px-[14%] ">
           {/* top img of udan */}
        <div className="lg:flex m-auto  p-2 lg:px-4 lg:gap-4 ">
          <div className="w-full sm:p-6  ">
            <h1 className=" w-[99%] font-bold text-4xl pb-4">
              Quality therapeutic intervention
            </h1>
            <p className="text-[20px] leading-9 text-justify tracking-wider ">
            Through Udaan, we build a safe therapeutic space for individuals from marginalized communities. Trauma-focussed therapy aims at establishing safety & then progresses towards processing deep-rooted trauma stemming from experiences of marginalisation and adversities from a young age. Our low-cost therapy initiative aims to reach a diverse audience, providing a safe and supportive environment for many individuals. Our team of trauma-informed therapists offer regular sessions tailored to young and middle-aged adults facing mental health challenges.
            </p>
          </div>
          <div className="w-[100%] lg:w-[70%] sm:pr-10  m-auto ">
            <img loading="lazy" src={udan1} alt="anubho image"></img>
          </div>
        </div>
         {/* 3slides of udan */}
         <div className="flex flex-wrap justify-center gap-10 m-auto mb-10">
  {/* Card 1 */}
  <div className="flex flex-col justify-center items-center xs:h-auto xs:w-[70%] sm:w-[28%] md:w-[24%] lg:w-[24%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-[18px]  md:p-4 lg:text-2xl lg:p-6">
    Holistic, long-term and consistent therapeutic support
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col justify-center items-center xs:w-[70%] sm:w-[28%] md:w-[24%] lg:w-[24%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium  text-2xl p-14  sm:text-sm sm:p-2 md:text-[18px] md:p-4 lg:text-2xl lg:p-6">
    Safe, supportive, and compassionate space for the clients
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col justify-center items-center xs:w-[70%] sm:w-[28%] md:w-[24%] lg:w-[24%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-[18px] md:p-4 lg:text-2xl lg:p-6">
    Exploring and processing deep-rooted underlying trauma
    </p>
            </div>
            </div>
        {/* content data */}
        <div className="px-4 lg:px-14">
          <h1 className="text-5xl font-bold text-right">Story of change</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-10">
            <img loading="lazy"
              src={udan5}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
            <p className="text-justify text-[22.5px] font-thin">
              “14-year-old Chandni (name changed) used to be a young spirited
              girl until she was abandoned by her mother and physically and
              sexually abused by her own father and uncle. She was held captive
              in her own house. The home was not a safe space for her. The walls
              of her house which saw her grow into a young girl was now a
              witness to her pain and suffering.
            </p>
          </div>
          {/* ------------------------------------ */}
          <div className="sm:flex mt-[1%] gap-5 leading-9 mb-[3%]">
            <p className="text-justify text-[22px] font-thin ">
              And then came a day when she decided to finally break free from
              the abusive environment she was in and escape. To her, it was the
              end of her suffering and a new beginning as she entered a safe
              abode of a child care institution. Although her external
              environment changed, the imprint of trauma remained in her mind
              and body. Living there, Chandni started giving out what she had
              received and began hitting other children, fighting with the staff
              members, wanting to run away, not trusting anyone, and was
              minimally participative and involved in activities.
              <br /> For adults around her, Chandni’s behaviour was disruptive
              and required disciplinary action. In her eyes, she was not
              understood for what she was going through. Everyone failed to
              understand that she was still trying to fight the danger that was
              not there anymore.
              <br /> It was only after she was sent for trauma-informed therapy
              and intensive work, she started finding safety within her body and
              experienced safety with other people. Trauma Research and studies
              indicate that having one trusted available adult can mitigate the
              impact of Adverse Childhood Experiences. She was able to find out
              that one trusted available adult in the ecosystem facilitated her
              journey of healing. She started using dance as a way to express
              herself. She did run away but got in touch with her trusted
              anchors to bring her back. These little shifts gradually helped
              her to take academic support, develop peer relations, participate
              in activities and stay at the institution. With support and
              intervention, Chandni started to take charge of her life and
              became a hero of her own story rather than being on an autopilot
              mode.”
            </p>
          </div>
          {/* ---------------------------------------- */}
        </div>
        </div>
      </section>



                           {/* project arya page */}
      <section id="arya" className="mb-9">
{/* header of arya */}
        <div
          className="bg-cover  px-5 pt-5 pb-16"
          style={{ backgroundImage: `url(${yellowbgnew1})` }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-6xl">Project Arya</h1>
        </div>
        <div  className="  p-4 lg:p-4 px-[8%] xxxl:px-[14%] border-blue-500">
           {/* top img of arya */}
        <div className="lg:flex m-auto  px-4 lg:px-11 lg:gap-3">
          <div className="w-[100%] lg:w-[70%] ">
            <img loading="lazy" src={arya1} alt="anubho image"></img>
          </div>
          <div className="w-full sm:p-3  ">
            <h1 className="text-right w-[99%] font-bold text-4xl pb-4">
            Bio-Psycho-Socio Wellbeing
            </h1>
            <p className="text-[22px] leading-9 text-justify">
            Individuals facing adversities require specific support to enhance their overall development. Project Arya is a unique Social-Emotional Learning program based on the CASEL framework with a trauma-informed lens that caters to the particular needs of marginalized young lives. We support our participants in navigating unprecedented challenges through art, play, drama, music, and movement to facilitate holistic development, foster safe connections, and build social skills, creativity and self-expression.
            </p>
          </div>
        </div>
         {/* 3slides of arya */}
         <div className="flex flex-wrap justify-center gap-10 m-auto mb-10">
  {/* Card 1 */}
  <div className="flex flex-col justify-center items-center xs:h-auto xs:w-[70%] sm:w-[28%] md:w-[26%] lg:w-[26%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-[18px]  md:p-4 lg:text-2xl lg:p-6">
    Trauma-informed group work for holistic wellbeing
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col justify-center items-center xs:w-[70%] sm:w-[28%] md:w-[26%] lg:w-[26%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium  text-2xl p-14  sm:text-sm sm:p-2 md:text-[18px] md:p-4 lg:text-2xl lg:p-6">
    Creating a system for support and a community safety net
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col justify-center items-center xs:w-[70%] sm:w-[28%] md:w-[26%] lg:w-[27%] relative">
    <img
      loading="lazy"
      src={textBorder}
      alt="img"
      className="sm:w-full"
    />
    <p className="absolute inset-0 flex justify-center items-center text-center text-black font-medium text-2xl p-8 sm:text-sm sm:p-2 md:text-[18px] md:p-2 lg:text-2xl lg:p-6">
    Designed specifically for people from different marginalised communities 
    </p>
            </div>
            </div>
        {/* content data */}
        <div className="px-4 lg:px-11">
          <h1 className="text-5xl font-bold">Community level change</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            
            <p className="text-justify text-[20px] font-thin">
            We are creating ripples of change at diverse developmental stages in life. Each program is designed specifically to address the needs of different populations, be it students from middle school or individuals engaged in daily labour. The idea is to impact the community and build a safety net at each level. From being unable to speak up at all, to expressing in front of the entire group, there has been an immense shift in self-confidence, emotional understanding and regulation in our participants. We plant a seed of openness and curiosity by making them feel safe and encouraging them to explore the intricacies of their selves. Starting from building awareness about their bodies we delve deeper into the concept and different parts of the self, slowly building a connection to others, how relationships impact our mental health, and how we can support ourselves. Taking young individuals and turning them into leaders of the society thereby fulfilling our mission of #makingindiatraumainformed. 
            </p>
          </div>
          {/* ------------------------------------ */}
         
            {/* <img src={ animation1 } alt="animation"/> */}
            <WalkingPerson/>
        </div>
        </div>
      </section>
      
    </>
  );
};

export default Programe;
