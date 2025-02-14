import React, { useState } from "react";

const borderImg = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/about-us-bg.png`;
const AkanshaChandrel = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/worker1.png`;
const s7 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/s7.jpg`;
const greenBg = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/greenbg.png`;
const greenBackground = "/src/imgs/program-images/greenbg2.png";
// team images
const team1 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/team_1.png`;
const team2 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/team_2.png`;
const team3 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/team_3.png`;
const team4 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/team_4.png`;
const team5 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/team_5.png`;

// consultant images
const consultant1 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_1.png`;
const consultant2 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_2.png`;
const consultant3 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_3.png`;
const consultant4 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_4.png`;
const consultant5 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_5.png`;
const consultant6 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_6.png`;
const consultant7 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_7.png`;
const consultant8 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_8.png`;
const consultant9 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_9.png`;
const consultant10 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_10.png`;
const consultant11 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_11.png`;
const consultant12 = `${
  import.meta.env.VITE_PUBLIC_URL
}/home-images/consultant_12.png`;

// annual reports images
const annualReport1 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/annualreport1.png`;
const annualReport2 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/annualreport2.png`;
const annualReport3 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/annualreport3.png`;
const annualReport4 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/annualreport4.jpeg`;

import Model from "../components/Model";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const [teams] = useState([
    {
      name: "Akanksha Chandele",
      imgSrc: team1,
      smallImgSrc: "team_1-small.png",
      designation: "Director/Senior Supervisor",
      specialist: "Program Manager / Therapist",
      description:
        "Akanksha is a Holistic Trauma Therapist actively engaged in working with survivors of abuse and trauma. Their practice is rooted in building interconnectedness and compassion for all beings and they believe in the power of mind-body-spirit healing in order to thrive and grow. Akanksha has an MA in Counselling Psychology, a diploma in Rehabilitation Psychology, and a diploma in Arts-Based Therapy.They are trained in EMDR, IEMT, Somatic Practices, and psychological first-aid. They also use Bach remedies, Access consciousness, and are a Reiki Master Practitioner.With a deep inclination to support the mental wellbeing of marginalised and vulnerable communities, they started I Am Wellbeing (Nairatmya Foundation), an organisation dedicated to trauma healing and prevention. I Am Wellbeing works with survivors of adverse life experiences and equips mental health professionals, caregivers, and educators in providing trauma-informed care to those in need.",
    },

    {
      name: "Pallavi Singh",
      imgSrc: team2,
      smallImgSrc: "team_2-small.png",
      designation: "Program Manager / Therapist",
      specialist: "Program Manager / Therapist",
      description:
        "Pallavi is a Trauma and Grief-Informed therapist driven to support people in overcoming personal obstacles. She is passionate about bringing healing to people who have been through traumatic life experiences. Her work focuses on building a client's self-worth & how they view their value as human beings. With the belief that connection is the key to trauma healing, she uses multiple trauma-informed approaches in her work with children at risk & young adults living in under-resourced communities. Equipped in working with children in institutional care, she has in-depth knowledge of the ecosystem of childcare homes, stakeholders, and legal frameworks. She is trained in providing psychological first- aid in the event of emergencies. She offers guidance on psychosocial care provided while supporting people & holds a Master's degree in applied psychology with a specialisation in clinical psychology from Jamia Millia Islamia University.",
    },
    {
      name: "Atufa Khan",
      imgSrc: team3,
      smallImgSrc: "team_3-small.png",
      designation: "Research Coordinator / Therapist",
      specialist: "Counselling Psychologist",
      description:
        "Atufa holds a Master’s degree in psychology from Delhi University. She is passionate about destigmatizing mental health. She aims towards creating an inclusive, compassionate and safe space for individuals. Specializing in health and culture, she values a holistic approach to understanding people. She has undergone a considerable amount of training in various areas like listening skills, group therapy sessions, adverse childhood experiences, trauma awareness and grief in psychotherapy.",
    },

    {
      name: "Neeti Kaushal",
      imgSrc: team5,
      smallImgSrc: "team_5-small.png",
      designation: "Training Coordinator / Therapist",
      specialist: "Counselling Psychologist",
      description:
        "Neeti Kaushal is a Psychologist, with a Masters degree in Psychology from Delhi University. She has been working in the field of Psychology since the last two years. She is instrumental in Counselling and Psychological Testing. She also has experience in facilitating listening circles. She wished she had a listening ear in childhood to help her through personal struggles. She chose the field of Psychology as her career path to be that source of help and healing for children, adolescents, and young adults. She believes in the power of early intervention in childhood and breaking the cycle of intergenerational trauma.  As an individual, she is an empathetic person and a good listener. She is a creative soul who enjoys painting, music, and dance. She is equally passionate about fitness and sports. Some of the values she lives by are kindness, compassion, and honesty. ",
    },
    {
      name: "Ishi Agarwal",
      imgSrc: team4,
      smallImgSrc: "team_4-small.png",
      designation: "Content Manager/Therapist",
      specialist: "Content Manager, Therapist",
      description:
        "She has completed her Master's in Psychology and received training in different sectors of mental health such as counseling, relationship concerns, and addiction and recovery. She believes that building a deeper understanding of 'self' is the first and the most important step toward healing. She aims to help individuals build a healthier relationship with themselves and those around them. She is also a big supporter of writing and other creative activities as an outlet for pent-up emotions and tries to integrate these practices into her personal and professional life.",
    },
    //  {
    //    name: "Laasya Mangalampalli",
    //    imgSrc: team1,
    //    designation: "Therapist",
    //    specialist: "Counselor",
    //    description:
    //      "Laasya Mangalampalli is a mental health counselor who holds a Master’s Degree in counseling psychology from SNDT University, Mumbai. She is passionate about creating safe and nurturing spaces for everyone. She has an ardent passion for working with people who have undergone adverse life experiences. In her work, her focus is on building a sense of connection, safety, and compassion. With a strong inclination towards working for the overall well-being of children and young adults from under-resourced communities, she is presently trying to train in multiple approaches to counseling and equip herself with in-depth knowledge about working with children in institutional care and the legal frameworks involved.",
    //  },
  ]);

  const [consultants] = useState([
    {
      name: "Preeta Ganguli",
      designation: "Training",
      imgSrc: consultant1,
      smallImgSrc: "consultant_1-small.png",
    },
    {
      name: "Maitreyi Nigwekar",
      designation: "Training",
      imgSrc: consultant2,
      smallImgSrc: "consultant_2-small.png",
    },
    {
      name: "Veena Hari",
      designation: "Training",
      imgSrc: consultant3,
      smallImgSrc: "consultant_3-small.png",
    },
    {
      name: "Rakshita Goel",
      designation: "Training",
      imgSrc: consultant4,
      smallImgSrc: "consultant_4-small.png",
    },
    {
      name: "Dr Shiraz",
      designation: "Psychiatrist",
      imgSrc: consultant5,
      smallImgSrc: "consultant_5-small.png",
    },
    {
      name: "Sukun Chandele",
      designation: "Legal",
      imgSrc: consultant6,
      smallImgSrc: "consultant_6-small.png",
    },
    {
      name: "Faseeh Amin",
      designation: "Research",
      imgSrc: consultant7,
      smallImgSrc: "consultant_7-small.png",
    },
    {
      name: "Anupam Parashar",
      designation: "Finace",
      imgSrc: consultant8,
      smallImgSrc: "consultant_8-small.png",
    },
    {
      name: "Shambhavi Singh",
      designation: "Training",
      imgSrc: consultant9,
      smallImgSrc: "consultant_9-small.png",
    },
    {
      name: "Yasha Malhotra",
      designation: "Operations",
      imgSrc: consultant10,
      smallImgSrc: "consultant_10-small.png",
    },
    {
      name: "Dr Nishtha Lamba",
      designation: "Research",
      imgSrc: consultant11,
      smallImgSrc: "consultant_11-small.png",
    },
    {
      name: "Alisha Sethi",
      designation: "Outreach",
      imgSrc: consultant12,
      smallImgSrc: "consultant_12-small.png",
    },
  ]);

  return (
    <>
      <section className="section about py-16 ">
        <Model
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedTeamMember={selectedTeamMember}
        />
        {/* code model */}

        <div className="flex w-[90%] md:max-w-6xl flex-wrap md:flex-nowrap  m-auto mt-10 md:mt-0">
          <div className="m-auto">
            <div
              className={`p-5 max-w-7xl max-md:mt-[1rem]`}
              style={{
                borderWidth: "3px" /* Set the border width */,
                borderStyle: "solid" /* Set the border style */,
                borderImageSource: `url(${borderImg})` /* Path to your image */,
                borderImageSlice: 100 /* Adjust this value as needed */,
                borderImageWidth: 10 /* Adjust this value as needed */,
                borderImageOutset: 0 /* Optional: Adjust spacing */,
              }}
            >
              <p className="text-xl leading-8 text-justify max-md:text-lg">
                My very first day at work brought me face to face with 55 young
                girls living at a childcare home who had survived sexual abuse,
                physical abuse, and neglect at a very young age. Interacting
                with them I realised that all my education hadn’t equipped me to
                deal with any of it &amp; this required a whole other skill set.
                This realisation hit me hard. Being a survivor myself I was
                highly aware of the impact of risk factors and protective
                factors that existed within the system. This pushed me to
                further enhance my training by enrolling in courses, taking
                intensive supervision, and adding to my trauma therapy skill
                set. I went on to work with many different organizations and
                understood that while so many people could identify the
                prevalence and impact of trauma, there was no concrete
                intervention that could help mitigate this impact. There were so
                many gaps in the level of understanding and care. There were
                adults struggling with trauma themselves, trying to raise
                children who were struggling too. They say that it takes a
                village, and from my standpoint, that village was completely
                disconnected. This yearning for creating a network of
                compassion, connection, care, equipped with knowledge and
                expertise sowed the seed for the birth of I Am Wellbeing.
              </p>
            </div>
          </div>

          <div className="">
            <LazyLoadImage
              src={AkanshaChandrel}
              alt="img"
              effect="blur"
              className="max-w-sm h-auto "
              placeholder={
                <BlurryImages imgUrl="aboutus-images/worker1-small.png" />
              }
            />
            <h6
              className="text-center bg-cover bg-repeat-round font-bold"
              style={{ backgroundImage: `url(${s7})` }}
            >
              Akanksha Chandele, Director
            </h6>
          </div>
        </div>
        <div className="our-team mt-10">
          <div
            className="bg-cover bg-no-repeat bg-bottom h-32 flex items-center  px-5 pt-10 pb-16 max-lg:pb-10"
            style={{ backgroundImage: `url(${greenBackground})` }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Core Team
            </h1>
          </div>

          <div className="team-container flex flex-wrap justify-center items-center max-w-[70rem] m-auto mt-10 -mb-6 min-h-screen">
            {teams.map((team) => {
              return (
                <div
                  className="team-card flex-[0_0 49%] xs:flex-[0_0 48%] sm:flex-[0_0 31%] min-h-[300px] flex flex-col items-center justify-center cursor-pointer relative mr-4 mb-6"
                  key={team.name}
                  onClick={() => {
                    setSelectedTeamMember(team);
                    setIsOpen(true);
                  }}
                >
                  <div className="relative w-[300px] h-[300px]">
                    <LazyLoadImage
                      src={team.imgSrc}
                      alt="team"
                      className="w-full h-full object-cover rounded-full" // Image with full container size
                      placeholder={
                        <BlurryImages
                          imgUrl={`home-images/${team.smallImgSrc}`}
                        />
                      }
                    />
                    <div className="details absolute bottom-0 w-full text-center py-2">
                      <h6 className="font-bold uppercase text-lg text-black">
                        {team.name}
                      </h6>
                      <p className="text text-gray-700 font-[500] text-md">
                        {team.designation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="our-consultant mt-10">
        <div
            className="bg-cover bg-no-repeat bg-bottom h-32 flex items-center  px-5 pt-10 pb-16 max-lg:pb-10"
            style={{ backgroundImage: `url(${greenBackground})` }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Our Consultants
            </h1>
          </div>

          <div className="team-container grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl m-auto gap-6 mt-10">
            {consultants.map((consultant, index) => {
              return (
                <div
                  key={index}
                  className="min-h-[300px] flex flex-col items-center m-auto cursor-pointer relative"
                >
                  <LazyLoadImage
                    src={consultant.imgSrc}
                    alt="team"
                    className=" object-cover relative"
                    placeholder={
                      <BlurryImages
                        imgUrl={`home-images/${consultant.smallImgSrc}`}
                      />
                      // aboutus-images/worker1-small.png
                    }
                  />

                  <div className="details  details  w-full absolute lg:bottom-14 sm:bottom-14 bottom-10">
                    <h6 className="font-bold text-black uppercase text-lg text-center">
                      {consultant.name}
                    </h6>
                    <p className="text text-gray-800 font-[500] text-lg text-center">
                      {consultant.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="annual-reports mt-14">
          <div
            className="text-4xl md:text-6xl text-white font-bold relative h-[80px] lg:h-[120px]"
            style={{
              backgroundColor: "#029390",
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
            }}
          >
            <h1 className="absolute  top-4 lg:top-5 left-2 lg:text-5xl text-3xl lg:mt-0 font-semibold">
              Annual Reports
            </h1>
          </div>

          <div className="annual-container  grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:max-w-5xl w-[90%] m-auto gap-8 mt-10">
            <a
              href="https://drive.google.com/file/d/1O2lsC6jPYwwu_HR-qmm7_vgxRpKYNBDu/view?usp=sharing&embedded=true"
              target="_blank"
              className="cursor-pointer"
            >
              <LazyLoadImage
                src={annualReport1}
                alt="annualreport1"
                effect="blur"
                className="sm:w-[300px]"
                placeholder={
                  <BlurryImages imgUrl="aboutus-images/annualreport1-small.png" />
                }
              />
            </a>
            <a
              href="https://drive.google.com/file/d/14ayDznPPVbfQtQ2G802D8d-PEy6xQWzy/view?usp=sharing&embedded=true"
              target="_blank"
              className="cursor-pointer"
            >
              <LazyLoadImage
                src={annualReport2}
                alt="annualreport2"
                effect="blur"
                className="sm:w-[300px]"
                placeholder={
                  <BlurryImages imgUrl="aboutus-images/annualreport2-small.png" />
                }
              />
            </a>

            <a
              href="https://drive.google.com/file/d/11q4HwENy1-IsLeVGLVxrQn1hzyK_pnW3/view?usp=sharing&embedded=true"
              target="_blank"
              className="cursor-pointer"
            >
              <LazyLoadImage
                src={annualReport3}
                alt="annualreport3"
                effect="blur"
                className="sm:w-[300px]"
                placeholder={
                  <BlurryImages imgUrl="aboutus-images/annualreport3-small.png" />
                }
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1sHhcyxUHjhX5kjdfWZ4ufhymyDqSBjap/view?usp=sharing&embedded=true"
              target="_blank"
              className="cursor-pointer"
            >
              <LazyLoadImage
                src={annualReport4}
                alt="annualreport4"
                effect="blur"
                className="sm:w-[300px]"
                placeholder={
                  <BlurryImages imgUrl="aboutus-images/annualreport4-small.jpeg" />
                }
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
