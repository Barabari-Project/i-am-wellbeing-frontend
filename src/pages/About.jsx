import React, { useState } from 'react'

const borderImg = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/about-us-bg.png`;
const AkanshaChandrel = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/worker1.png`;
const s7 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/s7.jpg`;
const greenBg = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/greenbg.png`;

// team images
// const team1 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/ttt1.png`;
// const team2 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/ttt2.png`;
// const team3 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/ttt3.png`;
// const team4 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/ttt4.png`;
// const team5 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/tttt5.png`;
// const team6 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/ttt6.png`;

// import team1 from '../imgs/home-images/team_1.png'
import team2 from '../imgs/home-images/team_2.png';
import team3 from '../imgs/home-images/team_3.png';
import team4 from '../imgs/home-images/team_4.png';
// import team5 from '../imgs/home-images/team_5.png';
import team6 from '../imgs/home-images/team_6.png';






// consultant images
// const consultant1 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa1.png`;
// const consultant2 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa2.png`;
// const consultant3 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa3.png`;
// const consultant4 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa4.png`;
// const consultant5 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa5.png`;
// const consultant6 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa6.png`;
// const consultant7 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa7.png`;
// const consultant8 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa8.png`;
// const consultant9 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/aaaa9.png`;

import consultant1 from '../imgs/home-images/consultant_1.png';
import consultant2 from '../imgs/home-images/consultant_2.png';
import consultant3 from '../imgs/home-images/consultant_3.png';
import consultant4 from '../imgs/home-images/consultant_4.png';
import consultant5 from '../imgs/home-images/consultant_5.png';
import consultant6 from '../imgs/home-images/consultant_6.png';
import consultant7 from '../imgs/home-images/consultant_7.png';
import consultant8 from '../imgs/home-images/consultant_8.png';
import consultant9 from '../imgs/home-images/consultant_9.png';
import consultant10 from '../imgs/home-images/consultant_10.png';
// annual reports images
const annualReport1 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/annualreport1.png`;
const annualReport2 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/annualreport2.png`;
const annualReport3 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/annualreport3.png`;
const annualReport4 = `${import.meta.env.VITE_PUBLIC_URL}/aboutus-images/annualreport4.jpeg`;

import Model from '../components/Model'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';


const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeamMember , setSelectedTeamMember] = useState(null);

   const [teams] = useState([
     {
       name: "Akanksha Chandele",
       imgSrc: team2,
       designation: "Director/Senior Supervisor",
       specialist: "Program Manager / Therapist",
       description:
         "Akanksha is a Holistic Trauma Therapist actively engaged in working with survivors of abuse and trauma. Their practice is rooted in building interconnectedness and compassion for all beings and they believe in the power of mind-body-spirit healing in order to thrive and grow. Akanksha has an MA in Counselling Psychology, a diploma in Rehabilitation Psychology, and a diploma in Arts-Based Therapy.They are trained in EMDR, IEMT, Somatic Practices, and psychological first-aid. They also use Bach remedies, Access consciousness, and are a Reiki Master Practitioner.With a deep inclination to support the mental wellbeing of marginalised and vulnerable communities, they started I Am Wellbeing (Nairatmya Foundation), an organisation dedicated to trauma healing and prevention. I Am Wellbeing works with survivors of adverse life experiences and equips mental health professionals, caregivers, and educators in providing trauma-informed care to those in need.",
     },

     {
       name: "Pallavi Singh",
       imgSrc: team3,
       designation: "Program Manager / Therapist",
       specialist: "Program Manager / Therapist",
       description:
         "Pallavi is a Trauma and Grief-Informed therapist driven to support people in overcoming personal obstacles. She is passionate about bringing healing to people who have been through traumatic life experiences. Her work focuses on building a client's self-worth & how they view their value as human beings. With the belief that connection is the key to trauma healing, she uses multiple trauma-informed approaches in her work with children at risk & young adults living in under-resourced communities. Equipped in working with children in institutional care, she has in-depth knowledge of the ecosystem of childcare homes, stakeholders, and legal frameworks. She is trained in providing psychological first- aid in the event of emergencies. She offers guidance on psychosocial care provided while supporting people & holds a Master's degree in applied psychology with a specialisation in clinical psychology from Jamia Millia Islamia University.",
     },
     {
       name: "Atufa Khan",
       imgSrc: team4,
       designation: "Reasearch Coordiinator / Therapist",
       specialist: "Counselling Psychologist",
       description:
         "Atufa holds a Master’s degree in psychology from Delhi University. She is passionate about destigmatizing mental health. She aims towards creating an inclusive, compassionate and safe space for individuals. Specializing in health and culture, she values a holistic approach to understanding people. She has undergone a considerable amount of training in various areas like listening skills, group therapy sessions, adverse childhood experiences, trauma awareness and grief in psychotherapy.",
     },

    //  {
    //    name: "Yasha Malhotra",
    //    imgSrc: team5,
    //    designation: "Training Coordinator / Therapist",
    //    specialist: "Counselling Psychologist",
    //    description:
    //      "Yasha Malhotra is a psychologist with a master’s degree in clinical psychology. She uses a comprehensive approach, emphasizing on both physical and mental health, and has experience working in a variety of clinical and counseling settings. Her vision is to create an environment that is both spiritually and emotionally mindful.",
    //  },
     {
       name: "Ishi Agarwal",
       imgSrc: team6,
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
      {name : "Preeta Ganguli" , designation : "Training", imgSrc : consultant1},
      {name : "Maitreyi Nigwekar" , designation : "Training", imgSrc : consultant2},
      {name : "Venna Hari" , designation : "Training", imgSrc : consultant3},
      {name : "Rakshita Goel" , designation : "Training", imgSrc : consultant4},
      {name : "Dr Shiraz" , designation : "Psychiatrist", imgSrc : consultant5},
      {name : "Sukun Chandele" , designation : "Legal", imgSrc : consultant6},
      {name : "Faseeh Amin" , designation : "Research", imgSrc : consultant7},
      {name : "Anupam Parashar" , designation : "Finace", imgSrc : consultant8},
      {name : "Shambhavi Singh" , designation : "Training", imgSrc : consultant9},
      {name : "Yasha Malhotra" , designation : "Training Coordiinator/Therapist", imgSrc : consultant10},
    ])

  
  return (
    <>
      <section className='section about py-16 '>
        <Model
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedTeamMember={selectedTeamMember}
        />
        {/* code model */}

        <div className='flex w-[90%] md:max-w-6xl flex-wrap md:flex-nowrap  m-auto mt-10 md:mt-0'>
          <div className='m-auto'>
            <div
              className={`p-5 max-w-7xl`}
              style={{
                borderWidth: "3px" /* Set the border width */,
                borderStyle: "solid" /* Set the border style */,
                borderImageSource: `url(${borderImg})` /* Path to your image */,
                borderImageSlice: 100 /* Adjust this value as needed */,
                borderImageWidth: 10 /* Adjust this value as needed */,
                borderImageOutset: 0 /* Optional: Adjust spacing */,
              }}
            >
              <p className='text-xl leading-8 text-justify'>
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

          <div className=''>
          
            <LazyLoadImage
              src={AkanshaChandrel}
              alt='img'
              effect="blur"
              className='max-w-sm h-auto '
              placeholder={<BlurryImages imgUrl="aboutus-images/worker1-small.png"/>}
            />
            <h6
              className='text-center bg-cover bg-repeat-round font-bold'
              style={{ backgroundImage: `url(${s7})` }}
            >
              Akanksha Chandele, Director
            </h6>
          </div>
        </div>
        <div className='our-team mt-10'>
          <div
            className='text-4xl md:text-6xl text-white font-bold relative p-1 h-[80px] lg:h-[120px]'
            style={{
              backgroundColor: "#029390",
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
            }}
          >
            <h1 className='absolute  top-4 lg:top-5 left-2'>Core Team</h1>
          </div>

          <div className='team-container grid xs:grid-cols-2 sm:grid-cols-3 gap-6  md:grid-cols-3 max-w-3xl m-auto  mt-10'>
            {teams.map((team) => {
              return (
                <div
                  className='team-card w-[100%]  m-auto cursor-pointer '
                  key={team.name}
                  onClick={() => {
                    setSelectedTeamMember(team);
                    setIsOpen(true);
                  }}
                >
                  <img src={team.imgSrc} alt='team' className='w-full' />
                  <div className='details text-center'>
                    <h6 className='font-bold uppercase'>{team.name}</h6>
                    <p className='text text-gray-600 font-[600] text-sm'>
                      {team.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='our-consultant mt-10'>
          <div
            className='text-4xl md:text-6xl text-white font-bold relative h-[80px] lg:h-[120px]'
            style={{
              backgroundColor: "#029390",
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
            }}
          >
            <h1 className='absolute  top-4 lg:top-5 left-2'>Our consultants</h1>
          </div>

          <div className='team-container grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl m-auto gap-6 mt-10'>
            {consultants.map((consultant , index) => {
              return (
                <div key={index}>
                  <img
                    src={consultant.imgSrc}
                    alt='consultant1'
                    className='w-[350px] h-auto'
                  />

                  <div className='details text-center'>
                    <h6 className='font-bold uppercase'>
                      {consultant.name}
                    </h6>
                    <p className='text text-gray-600 font-[600] text-md '>
                      {consultant.designation}
                    </p>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>

        <div className='annual-reports mt-3'>
          <div
            className='text-4xl md:text-6xl text-white font-bold relative h-[80px] lg:h-[120px]'
            style={{
              backgroundColor: "#029390",
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
            }}
          >
            <h1 className='absolute  top-4 lg:top-5 left-2'>Annual Reports</h1>
          </div>

          <div className='annual-container  grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:max-w-5xl w-[90%] m-auto gap-8 mt-10'>
            <a
              href='https://drive.google.com/file/d/1O2lsC6jPYwwu_HR-qmm7_vgxRpKYNBDu/view?usp=sharing&embedded=true'
              target='_blank'
              className='cursor-pointer'
            >
              
              <LazyLoadImage
                src={annualReport1}
                alt='annualreport1'
                effect="blur"
                className='sm:w-[300px]'
                placeholder={<BlurryImages imgUrl="aboutus-images/annualreport1-small.png"/>}
              />
            </a>
            <a
              href='https://drive.google.com/file/d/14ayDznPPVbfQtQ2G802D8d-PEy6xQWzy/view?usp=sharing&embedded=true'
              target='_blank'
              className='cursor-pointer'
            >
              
              <LazyLoadImage
                src={annualReport2}
                alt='annualreport2'
                effect="blur"
                className='sm:w-[300px]'
                placeholder={<BlurryImages imgUrl="aboutus-images/annualreport2-small.png"/>}
              />
            </a>

            <a
              href='https://drive.google.com/file/d/11q4HwENy1-IsLeVGLVxrQn1hzyK_pnW3/view?usp=sharing&embedded=true'
              target='_blank'
              className='cursor-pointer'
            >
             
              <LazyLoadImage
                src={annualReport3}
                alt='annualreport3'
                effect="blur"
                className='sm:w-[300px]'
                placeholder={<BlurryImages imgUrl="aboutus-images/annualreport3-small.png"/>}
              />
            </a>

            <a
              href='https://drive.google.com/file/d/1sHhcyxUHjhX5kjdfWZ4ufhymyDqSBjap/view?usp=sharing&embedded=true'
              target='_blank'
              className='cursor-pointer'
            >
              
              <LazyLoadImage
                src={annualReport4}
                alt='annualreport4'
                effect="blur"
                className='sm:w-[300px]'
                placeholder={<BlurryImages imgUrl="aboutus-images/annualreport4-small.jpeg"/>}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About



