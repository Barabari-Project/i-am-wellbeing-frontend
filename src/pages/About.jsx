import Model from "../components/Model";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import { useState } from "react";
import { motion } from "framer-motion";

// team images
const team1 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/Akanshaa.png`;
const team2 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/Pallavii.png`;
const team3 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/Atufa.png`;
const team4 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/Ishi.png`;
const team5 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/Shubhi.png`;

// consultant images
// consultant images
const consultant1 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Preeta.png`;
const consultant2 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Maitreyi.png`;
const consultant3 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Veena.png`;
const consultant4 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Rakshita.png`;
const consultant5 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Shambhavi.png`;
const consultant6 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Yasha.png`;
const consultant7 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Nishita.png`;
const consultant8 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Sakshi.png`;
const consultant9 = ``;
const consultant10 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Shiraz.png`;
const consultant11 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Anurag.png`;
const consultant12 = `${
  import.meta.env.VITE_PUBLIC_URL
}/aboutus-images/Anupam.png`;

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

const breathe = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const teams = [
  {
    name: "Akankshaa Chandele",
    imgSrc: team1,
    smallImgSrc: "team_1-small.png",
    designation: "Director / Senior Supervisor",
    specialist: "Program Manager / Therapist",
    description:
      "Akanksha is a Holistic Trauma Therapist committed to supporting survivors of abuse and trauma. Their work is deeply rooted in compassion, interconnectedness, and the belief that true healing happens when the mind, body, and spirit are in harmony.\n\nWith an MA in Counselling Psychology, a diploma in Rehabilitation Psychology, and training in Arts-Based Therapy, Akanksha has cultivated a diverse and integrative approach to healing. They are a certified Somatic Experiencing Practitioner, EMDR Therapist, Integral Eye Movement Therapist, and Reiki Master Practitioner, in addition to being trained in Psychological First-Aid, Bach Remedies, and Access Consciousness.\n\nDriven by a deep commitment to the holistic well-being of marginalized and vulnerable communities, Akanksha founded I Am Wellbeing (Nairatmya Foundation)—an organization dedicated to making India trauma-informed. Through their work, I Am Wellbeing provides direct support to survivors and equips mental health professionals, caregivers, and educators with the tools to offer trauma-informed care.",
  },
  {
    name: "Pallavi Singh",
    imgSrc: team2,
    smallImgSrc: "team_2-small.png",
    designation: "Program Manager / Therapist",
    specialist: "Program Manager / Therapist",
    description:
      "Pallavi is a Trauma and Grief-Informed therapist driven to support people in overcoming personal obstacles. She is passionate about bringing healing to people who have been through traumatic life experiences. Her work focuses on building a client's self-worth & how they view their value as human beings. With the belief that connection is the key to trauma healing, she uses multiple trauma-informed approaches in her work with children at risk & young adults living in under-resourced communities. \n\nEquipped in working with children in institutional care, she has in-depth knowledge of the ecosystem of childcare homes, stakeholders, and legal frameworks. She is trained in providing psychological first- aid in the event of emergencies. She offers guidance on psychosocial care provided while supporting people & holds a Master's degree in applied psychology with a specialisation in clinical psychology from Jamia Millia Islamia University.",
  },
  {
    name: "Atufa Khan",
    imgSrc: team3,
    smallImgSrc: "team_3-small.png",
    designation: "Research Coordinator / Therapist",
    specialist: "Counselling Psychologist",
    description:
      "Atufa holds a Master’s degree in Psychology from Delhi University and is deeply committed to destigmatizing mental health while building inclusive, compassionate, and safe spaces for individuals. With a specialization in health and culture, she values a holistic approach to understanding people, recognizing the complex interplay between psychological well-being, societal influences, and lived experiences.\n\nAtufa is also a dedicated researcher and heads the research department at I Am Wellbeing. She is passionate about bridging the gap in available information on Adverse Childhood Experiences (ACEs) in India and is actively working on creating a comprehensive database to inform further research and optimize resource allocation. Through her work, she strives to ensure that data-driven insights translate into meaningful, trauma-informed interventions.\n\nHer expertise extends to active and compassionate listening, group therapy and session facilitation, working with adverse childhood experiences, and grief in psychotherapy. Atufa’s mission is to empower individuals while strengthening the research foundation necessary to drive systemic change across the globe.",
  },
  {
    name: "Ishi Agarwal",
    imgSrc: team4,
    smallImgSrc: "team_4-small.png",
    designation: "Content Manager/ Therapist",
    specialist: "Content Manager, Therapist",
    description:
      "Ishi holds a Master’s degree in Psychology and has received various trainings in counselling, Trauma-informed care, working with grief, Internal Family Systems, relationship dynamics, and working with addiction. She believes that self-awareness and reconnecting with the body are the first steps toward healing, guiding individuals to build healthier relationships with themselves and others. \n\nShe contributes to awareness initiatives as a Content Creator and helps present the impact of trauma-informed work, making mental health conversations more accessible and engaging. She is also a certified Arts-Based Therapist and encourages writing, visual art, music, play, and other artistic avenues as powerful outlets for processing emotions. She integrates these into her personal and professional life as a pathway to self-discovery and holistic well-being.",
  },
  {
    name: "Shubhi Bankawat",
    imgSrc: team5,
    smallImgSrc: "team_5-small.png",
    designation: "Therapist",
    specialist: "Therapist",
    description:
      "Shubhi is a psychologist with a master’s degree in Clinical Psychology, deeply passionate about supporting individuals in understanding their mind and emotions. Her journey in the field has taken her through diverse roles in clinical and counseling spaces. She feels strongly about advocating for mental health, breaking the stigma around emotional well-being, and is committed to reflect that in both her therapeutic work and public engagement. \n\nWith a deep belief in the power of safe and non-judgmental spaces, she is dedicated to creating a therapeutic environment where people can exist how they want to. She envisions therapy not just as a space for healing, but as a collaborative journey of self-exploration, where individuals feel seen. When she’s not engaging in conversations about mental well-being, you’re likely to find her immersed in the pages of a good book.",
  },
];

const consultants = [
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
    name: "Shambhavi Singh",
    designation: "Training",
    imgSrc: consultant5,
    smallImgSrc: "consultant_5-small.png",
  },
  {
    name: "Yasha Malhotra",
    designation: "Operations",
    imgSrc: consultant6,
    smallImgSrc: "consultant_6-small.png",
  },
  {
    name: "Dr. Nishtha Lamba",
    designation: "Research",
    imgSrc: consultant7,
    smallImgSrc: "consultant_7-small.png",
  },
  {
    name: "Sakshi Gaba",
    designation: "Facilitation",
    imgSrc: consultant8,
    smallImgSrc: "consultant_8-small.png",
  },
  {
    name: "Avanti Tewari",
    designation: "Legal",
    imgSrc: consultant9,
    smallImgSrc: "consultant_9-small.png",
  },
  {
    name: "Dr. Shiraz",
    designation: "Psychiatrist",
    imgSrc: consultant10,
    smallImgSrc: "consultant_10-small.png",
  },
  {
    name: "Anurag Chaubey",
    designation: "Content",
    imgSrc: consultant11,
    smallImgSrc: "consultant_11-small.png",
  },
  {
    name: "Anupam Parashar",
    designation: "Finance",
    imgSrc: consultant12,
    smallImgSrc: "consultant_12-small.png",
  },
];

const founder = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/founder.png`;

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  return (
    <section className="section about py-16 ">
      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedTeamMember={selectedTeamMember}
      />
      {/* code model */}

      {/* mobile-tab */}
      <div className="flex flex-col gap-4 lg:hidden overflow-hidden items-center italic tab:-mt-14">
        <motion.div
          variants={breathe}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="w-[130dvw] px-10 "
        >
          <img className="" src={founder} alt="Akansha" />
        </motion.div>

        <div className="flex flex-col gap-4 text-justify font-medium text-base tab:text-xl p-4 tab:px-14 -mt-20 tab:-mt-32">
          <p>
            “From the very first day I entered this field, the dark realities
            have been unfolding one after another. As a new counsellor at a
            childcare home, standing in front of 55 young girls, each a survivor
            of sexual abuse, violence, and neglect, I realized that none of my
            degrees had prepared me for this. Being a survivor of sexual abuse,
            I understood the deep impact of trauma and the failure of systems
            meant to protect us. It was a moment of reckoning that shifted the
            course of my life. It pushed me to seek deeper training, take
            intensive supervision, and become the kind of therapist I once
            needed. Working with trauma meant unlearning what I knew and
            building a whole new skill set, one that is rooted in presence,
            compassion, and connection.
          </p>
          <p>
            They say it takes a village, but our village was broken. I found
            only a few professionals who truly embodied trauma-informed care.
            But for a country like India, that wasn't enough.{" "}
          </p>
          <p>
            This sense of scarcity and urgency gave birth to I Am Wellbeing,
            where healing is not just an individual journey, but a collective
            endeavour.
          </p>
          <p>
            Because with time, trauma doesn’t end, it passes on. And we believe
            it’s time to break that cycle.”
          </p>
          <p className="py-2">-From the Founder&apos;s Desk</p>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex flex-col max-w-4xl mx-auto text-xl text-justify italic font-medium">
        <p className="">
          “From the very first day I entered this field, the dark realities have
          been unfolding one after another. As a new counsellor at a childcare
          home, standing in front of 55 young girls, each a survivor of sexual
          abuse, violence, and neglect, I realized that none of my degrees had
          prepared me for this. Being a survivor of sexual abuse, I understood
          the deep impact of trauma and the failure of systems meant to protect
          us. It was a moment of reckoning that shifted the course of my life.
          It pushed me to seek deeper training, take intensive supervision, and
          become the kind of therapist I once needed. Working with trauma meant
          unlearning what I knew and building a whole new skill set, one that is
          rooted in presence, compassion, and connection.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4  w-3/4    ">
            <p>
              They say it takes a village, but our village was broken. I found
              only a few professionals who truly embodied trauma-informed care.
              But for a country like India, that wasn't enough.{" "}
            </p>
            <p>
              This sense of scarcity and urgency gave birth to I Am Wellbeing,
              where healing is not just an individual journey, but a collective
              endeavour.
            </p>
            <p>
              Because with time, trauma doesn’t end, it passes on. And we
              believe it’s time to break that cycle.”
            </p>
            <p className="pt-4">-From the Founder&apos;s Desk</p>
          </div>

          <motion.div
            variants={breathe}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=""
          >
            <img className="w-full" src={founder} alt="Akansha" />
          </motion.div>
        </div>
      </div>

      <section className="mt-10">
        <div className=" bg-customGreen w-[90%] tab:pl-32 p-6 rounded-br-full bg-no-repeat bg-bottom  flex items-center  ">
          <h1 className="text-3xl tab:text-5xl lg:text-6xl font-bold  text-white drop-shadow-lg ">
            Core Team
          </h1>
        </div>

        <div className="team-container flex flex-wrap justify-center items-center max-w-[70rem] m-auto min-h-screen">
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
                    className="w-full h-full object-cover "
                    placeholder={
                      <BlurryImages
                        imgUrl={`home-images/${team.smallImgSrc}`}
                      />
                    }
                  />
                </div>
                <div className="details text-center py-2 -mt-10 relative z-10">
                  <h6 className="font-bold uppercase text-lg text-black">
                    {team.name}
                  </h6>
                  <p className="text text-gray-700 font-[500] text-md">
                    {team.designation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="our-consultant mt-10">
        <div className=" bg-customGreen w-[90%] tab:pl-32 p-6 rounded-br-full bg-no-repeat bg-bottom  flex items-center  ">
          <h1 className="text-3xl tab:text-5xl lg:text-6xl font-bold  text-white drop-shadow-lg ">
            Our Consultants
          </h1>
        </div>

        <div className="team-container grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl m-auto gap-14 mt-10">
          {consultants.map((consultant, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-56 h-56">
                  <LazyLoadImage
                    src={consultant.imgSrc}
                    alt={consultant.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="details -mt-6 ">
                  <h6 className="font-bold text-black uppercase text-lg">
                    {consultant.name}
                  </h6>
                  <p className="text text-gray-800 font-[500] text-lg">
                    {consultant.designation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="annual-reports mt-14">
        <div className=" bg-customGreen w-[90%] tab:pl-32 p-6 rounded-br-full bg-no-repeat bg-bottom  flex items-center  ">
          <h1 className="text-3xl tab:text-5xl lg:text-6xl font-bold  text-white drop-shadow-lg ">
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
      </section>
    </section>
  );
};

export default About;
