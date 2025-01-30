import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Location icon
import { motion } from "framer-motion"; // Framer Motion for animation
import WalkingPerson from "../components/WalkingPerson";
import ResponsiveCardSlider from "../components/CardCarousel";
const peoplenew = `${import.meta.env.VITE_PUBLIC_URL}/Home/peoplenew.png`;
// const yellowbgnew1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/6.svg`;
// const greenbg = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/2.svg`;
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const anubho1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/1.svg`;
const anubho2 = `${
  import.meta.env.VITE_PUBLIC_URL
}/programPageData/anubho2.png`;
const anubho3 = `${
  import.meta.env.VITE_PUBLIC_URL
}/programPageData/anubho3.png`;
const anubho4 = `${
  import.meta.env.VITE_PUBLIC_URL
}/programPageData/anubho4.png`;
const anubho5 = `${
  import.meta.env.VITE_PUBLIC_URL
}/programPageData/anubho5.png`;
const anubho6 = `${
  import.meta.env.VITE_PUBLIC_URL
}/programPageData/anubho6.png`;
const anubho7 = `${
  import.meta.env.VITE_PUBLIC_URL
}/programPageData/anubho7.png`;

const udan1 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan1.png`;
const udan2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan2.png`;
const udan3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan3.png`;
const udan4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan4.png`;
const udan5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/udan5.png`;

const arya1 = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/5.svg`;
const arya2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya2.png`;
const arya3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya3.png`;
const arya4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya4.png`;
const arya5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya5.png`;
const arya6 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya6.png`;
const arya7 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya7.png`;

const peoples = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/4.svg`;

const yelloShadow = `${import.meta.env.VITE_PUBLIC_URL}/phase-2/bg.svg`;

//animations
import animation1 from "../imgs/program-images/animation1.gif";

import textBorder from "../imgs/program-images/text-border.png";

import map from "../imgs/program-images/map.png";

import CollageImage from "../components/CollageImage";
import BodyImagePart from "../components/BodyImagePart";
import yellowbgnew1 from "../imgs/program-images/yellowBgNew.png";
import greenbg from "../imgs/program-images/greenbg.png";

const Programe = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const cardSection1 = [
    {
      text: 'Specialized curriculum for trauma-informed training',
    },
    {
      text: 'Rooted in the socio-cultural context of India',
    },
    {
      text: 'Identification, assessment, and working with trauma',
    },
  ];
  
  const cardSection2 = [
    {
      text: "Holistic, long-term and consistent therapeutic support",
    },
    {
      text: "Safe, supportive, and compassionate space for the clients",
    },
    {
      text: "Exploring and processing deep-rooted underlying trauma",
    },
  ];
  const cardSection3 = [
    {
      text: "Trauma-informed group work for holistic wellbeing",
    },
    {
      text: "Creating a system for support and a community safety net",
    },
    {
      text: "Designed specifically for people from different marginalised communities",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {/* programe first page */}
      <section className="bottom-background relative w-[100%] lg:max-w-[100%] lg:my-14 mx-auto mb-9 pt-[22%] sm:pt-6 px-[8%]  xxxl:px-[13%] xxxl:pt-[6%] max-md:px-0">
        <div className="container mx-auto  md:w-[93%]">
          <div className="flex flex-col items-center">
            <div className="bottom-background__img w-full">
              <img
                loading="lazy"
                src={peoplenew}
                alt="People"
                className="w-full lg:-[100px] h-full object-cover "
              />
            </div>
            <div className="bottom-background__img w-full">
              <img
                loading="lazy"
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
          className="  px-5 pt-10 pb-16  bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${yellowbgnew1})` }}
        >
          <h1 className="max-md:text-[40px] font-bold text-5xl align-text-bottom">
            Anubhoo
          </h1>
        </div>
        <div className=" p-4 lg:p-4 px-4 xxxl:px-[14%] max-md:px-5 ">
          {/* top img of anubho */}
          <div className="lg:flex m-auto  px-4 lg:px-11 lg:gap-4 max-md:p-0">
            <div className="m-auto">
              <img loading="lazy" src={anubho1} alt="anubho image"></img>
            </div>
            <div className="w-full sm:p-3  ">
              <h1 className="text-right w-[99%] font-bold text-4xl max-md:text-3xl max-md:text-center pb-4">
                Creating ecosystems of care
              </h1>
              <p className="leading-9 text-justify text-xl max-md:text-lg ">
                With the dream of Making India Trauma-Informed, Anubhoo is a
                training and skill building initiative which focuses on
                equipping and training all the stakeholders, like psychologists,
                social workers, teachers, parents, and caregivers, who are
                directly involved in working with young survivors of abuse and
                neglect in trauma informed care practices (TICP)
              </p>
            </div>
          </div>

          {/* 3slides of anubho */}
          <ResponsiveCardSlider
  cards={cardSection1}
/>


          <h1 className="text-4xl font-bold px-4 lg:px-11 max-md:text-3xl max-md:text-center">Depth of change</h1>

          <div className="px-4 lg:pl-11 flex flex-col-reverse  md:flex-row max-md:p-0 ">
            <div className="mt-6 leading-8 max-md:p-0 flex-[50%] text-xl max-md:text-lg">
              <p className="text-justify  font-thin">
                The change we aim to bring through our training initiatives,
                especially the TICP course reaches the depths of the nervous
                system. Shifts observed over the past cohorts have been nothing
                short of transformative. From individual shifts to professional
                growth to relational health, the participants have observed a
                complete change in their perspective and procedures. This course
                works at a deeper level, building a strong foundation for those
                just starting out and a whole new lens of understanding for
                experienced professionals. <br />
                <br />
                Additionally, our Short Training programme has been a successful
                capsule for introducing young professionals in the field to
                different modalities of intervention. These trainings have
                provided a safe space for individuals to explore how their
                nervous systems interact with different approaches.
              </p>
            </div>
              <BodyImagePart className="w-full h-auto object-cover" />
          </div>

          <div className="px-4 lg:px-11 pt-4 max-md:pt-6 max-md:px-0">
          <h1 className="text-left w-[99%] font-bold text-4xl max-md:text-3xl max-md:text-center">
          Corporate and Institutional Trainings
            </h1>
            {/* ------------------------------- */}
            <div className="sm:flex mt-6 gap-5 leading-8 mb-4 text-xl max-md:text-lg">
              <p className="text-justify  font-thin">
                In addition to training mental health professionals in the
                field, we are dedicated to creating a holistic system of support
                for anyone engaging in meaningful interactions with other human
                beings. Our efforts extend beyond traditional mental health
                settings to include the facilitation of diverse corporate and
                institutional training programs aimed at enhancing individual
                and collective well-being. <br /> <br />
                For corporate settings, we provide specialized training such as
                POSH (Prevention of Sexual Harassment) to ensure safe and
                inclusive workplaces, training aimed at Team Building and
                Communication to strengthen interpersonal dynamics, and
                developing a Healthy Work Environment to boost productivity and
                team satisfaction. <br /> <br />
                In educational and institutional contexts, we prioritize the
                well-being of all individuals by offering programmes focused on
                Teachers' Well-being, equipping them with Emotional Regulation
                Tools to navigate stress, build mindfulness, and foster a
                healthier and safer environment for both students and teachers.{" "}
                <br /> <br />
                Our comprehensive approach acknowledges that mental and
                emotional health are integral to every aspect of human
                interaction. By addressing these areas, we aim to cultivate
                environments where individuals and teams can feel a sense of
                safety and security and thrive both personally and
                professionally.
              </p>
            </div>
            {/* collage image */}
            {/* <img src={collage} alt="collage" className="md:w-[80%] md:h-[30%] object-cover m-auto mt-10"/> */}

            <CollageImage />

            <div></div>
          </div>

          {/* content data */}
        </div>
      </section>
      <div
        style={{ backgroundImage: `url(${yelloShadow})` }}
        className=" h-[5vh] sm:h-[10vh] md:h-[20vh] w-[100vw] bg-cover bg-repeat"
      ></div>

      {/* udaan page */}
      <section id="udaan">
        {/* header of udan */}
        <div
          className=" px-5 pt-10 pb-16 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          <h1 className="max-md:text-[40px] font-bold text-5xl align-text-bottom text-white">
            Udaan
          </h1>
        </div>

        <div className=" p-4 lg:p-4 px-4 xxxl:px-[14%] max-md:px-5 ">
          {/* top img of udan */}
          <div className="lg:flex m-auto  p-2 lg:px-4 lg:gap-4 max-md:px-0">
            <div className="w-full sm:p-6  ">
              <h1 className=" w-[99%] font-bold text-4xl pb-4 max-md:text-3xl max-md:text-center">
                Quality therapeutic intervention
              </h1>
              <p className="text-xl leading-9 text-justify tracking-wider max-md:text-lg">
                Through Udaan, we build a safe therapeutic space for individuals
                from marginalized communities. Trauma-focussed therapy aims at
                establishing safety & then progresses towards processing
                deep-rooted trauma stemming from experiences of marginalisation
                and adversities from a young age. Our low-cost therapy
                initiative aims to reach a diverse audience, providing a safe
                and supportive environment for many individuals. Our team of
                trauma-informed therapists offer regular sessions tailored to
                young and middle-aged adults facing mental health challenges.
              </p>
            </div>
            <div className="w-[100%] lg:w-[70%] sm:pr-0  m-auto max-md;:w-full max-md:pr-0 max-md:m-auto">
              <img loading="lazy" src={udan1} alt="anubho image " className="max-md:m-auto"/>
            </div>
          </div>
          {/* 3slides of udan */}
          <ResponsiveCardSlider
  cards={cardSection2}
/>

          {/* content data */}
          <div className="px-4 lg:px-14 max-md:px-0">
            <h1 className="text-4xl font-bold mb-[3%] max-md:text-3xl max-md:text-center">Reach of change</h1>
            {/* ------------------------------- */}

            {/* ------------------------------------ */}
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              {/* Left Section with Map */}
              <div className="relative w-full lg:w-1/2 max-md:w-2/3 max-md:m-auto max-xs:w-full">
                {/* Map Image */}
                <img
                  src={map}
                  alt="Map Illustration"
                  className="w-full h-full "
                />

                {/* Location Icons */}
                {[
                  { top: "15%", left: "24%", duration: 1 },
                  { top: "25%", left: "35%", duration: 1.5 },
                  { top: "37%", left: "60%", duration: 2 },
                  { top: "45%", left: "26%", duration: 2.5 },
                  { top: "45%", left: "55%", duration: 3 },
                  { top: "55%", left: "45%", duration: 3.5 },
                  { top: "60%", left: "18%", duration: 4 },
                  { top: "65%", left: "39%", duration: 4.5 },
                  { top: "70%", left: "30%", duration: 5 },
                  { top: "75%", left: "24%", duration: 5.5 },
                  { top: "80%", left: "32%", duration: 6 },
                  { top: "85%", left: "30%", duration: 6.5 },
                  // Additional Location Icons
                  { top: "32%", left: "16%", duration: 1.8 },
                  { top: "40%", left: "20%", duration: 2.2 },
                  { top: "34%", left: "78%", duration: 2.7 },
                  { top: "50%", left: "60%", duration: 3.3 },
                  { top: "35%", left: "45%", duration: 3.9 },
                  { top: "7%", left: "30%", duration: 4.5 },
                ].map(({ top, left, duration }, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ top, left }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    transition={{ duration }}
                    variants={iconVariants}
                  >
                    <FaMapMarkerAlt className="text-blue-500 text-xl sm:text-2xl lg:text-3xl" />
                  </motion.div>
                ))}
              </div>

              {/* Right Section with Text and Illustration */}
              <div className="w-full lg:w-1/2">
                <p className="text-justify text-xl font-light max-md:text-lg">
                  People from different demographics of the country reached out
                  to us, from Tier-2 cities like Rourkela and Suratgarh to
                  Metropolitans like Bengaluru and Mumbai.
                </p>
                <p className="text-justify text-xl font-light mt-4 max-md:text-lg">
                  We are breaking cycles of intergenerational trauma and
                  rebuilding trust for so many people through the process and
                  the profession of therapy. Individuals are able to reconnect
                  with different versions of their self, body, and mind,
                  reconceptualize their concerns, and feel a sense of compassion
                  and empowerment.
                </p>
                <div className="mt-4 lg:mt-[28%]">
                  <img
                    src={peoples} // Replace with a random illustration image URL
                    alt="Illustration"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* ---------------------------------------- */}
          </div>
        </div>
      </section>
      <div
        style={{ backgroundImage: `url(${yelloShadow})` }}
        className="h-[5vh] sm:h-[10vh] md:h-[20vh] w-[100vw] bg-cover bg-repeat"
      ></div>

      {/* project arya page */}
      <section id="arya" className="mb-9">
        {/* header of arya */}
        <div
          className=" px-5 pt-10 pb-16 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${yellowbgnew1})` }}
        >
          <h1 className=" max-md:text-3xl max-md:text-[40px] font-bold text-5xl ">
            Project Arya
          </h1>
        </div>
        <div className="  p-4 lg:p-4 px-4 xxxl:px-[14%] border-blue-500 max-md:px-1">
          {/* top img of arya */}
          <div className="lg:flex m-auto  px-4 lg:px-11 lg:gap-3">
            <div className="w-[100%] lg:w-[70%] ">
              <img loading="lazy" src={arya1} alt="anubho image"></img>
            </div>
            <div className="w-full sm:p-3  ">
              <h1 className="text-right w-[99%] font-bold text-4xl pb-4 max-md:text-3xl max-md:text-center">
                Bio-Psycho-Socio Wellbeing
              </h1>
              <p className="text-xl leading-9 text-justify max-md:text-lg">
                Individuals facing adversities require specific support to
                enhance their overall development. Project Arya is a unique
                Social-Emotional Learning program based on the CASEL framework
                with a trauma-informed lens that caters to the particular needs
                of marginalized young lives. We support our participants in
                navigating unprecedented challenges through art, play, drama,
                music, and movement to facilitate holistic development, foster
                safe connections, and build social skills, creativity and
                self-expression.
              </p>
            </div>
          </div>
          {/* 3slides of arya */}
          <ResponsiveCardSlider
  cards={cardSection3} 

/>
          {/* content data */}
          <div className="px-4 lg:px-11 ">
            <h1 className="text-4xl font-bold max-md:text-3xl max-md:text-center">Community level change</h1>
            {/* ------------------------------- */}
            <div className="sm:flex mt-[4%] gap-5 leading-8 text-xl max-md:text-lg max-md:pb-8">
              <p className="text-justify font-thin">
                We are creating ripples of change at diverse developmental
                stages in life. Each program is designed specifically to address
                the needs of different populations, be it students from middle
                school or individuals engaged in daily labour. The idea is to
                impact the community and build a safety net at each level. From
                being unable to speak up at all, to expressing in front of the
                entire group, there has been an immense shift in
                self-confidence, emotional understanding and regulation in our
                participants. We plant a seed of openness and curiosity by
                making them feel safe and encouraging them to explore the
                intricacies of their selves. Starting from building awareness
                about their bodies we delve deeper into the concept and
                different parts of the self, slowly building a connection to
                others, how relationships impact our mental health, and how we
                can support ourselves. Taking young individuals and turning them
                into leaders of the society thereby fulfilling our mission of
                #makingindiatraumainformed.
              </p>
            </div>
            {/* ------------------------------------ */}

            {/* <img src={ animation1 } alt="animation"/> */}
            <WalkingPerson />
          </div>
        </div>
      </section>
      <div
        style={{ backgroundImage: `url(${yelloShadow})` }}
        className="h-[5vh] sm:h-[10vh] md:h-[20vh] w-[100vw] bg-cover bg-repeat"
      ></div>
    </>
  );
};

export default Programe;
