import React, { useState } from 'react'
import borderImg from '../imgs/aboutus-images/about-us-bg.png'
import AkanshaChandrel from '../imgs/aboutus-images/worker1.png'
import s7 from '../imgs/aboutus-images/s7.jpg'
import greenBg from '../imgs/aboutus-images/greenbg.png'

// team images
import team1 from '../imgs/aboutus-images/ttt1.png'
import team2 from '../imgs/aboutus-images/ttt2.png'
import team3 from '../imgs/aboutus-images/ttt3.png'
import team4 from '../imgs/aboutus-images/ttt4.png'
import team5 from '../imgs/aboutus-images/tttt5.png'
import team6 from '../imgs/aboutus-images/ttt6.png'

// consultant images
import consultant1 from '../imgs/aboutus-images/aaaa1.png'
import consultant2 from '../imgs/aboutus-images/aaaa2.png'
import consultant3 from '../imgs/aboutus-images/aaaa3.png'
import consultant4 from '../imgs/aboutus-images/aaaa4.png'
import consultant5 from '../imgs/aboutus-images/aaaa5.png'
import consultant6 from '../imgs/aboutus-images/aaaa6.png'
import consultant7 from '../imgs/aboutus-images/aaaa7.png'
import consultant8 from '../imgs/aboutus-images/aaaa8.png'
import consultant9 from '../imgs/aboutus-images/aaaa9.png'

// annual reports images
import annualReport1 from '../imgs/aboutus-images/annualreport1.png'
import annualReport2 from '../imgs/aboutus-images/annualreport2.png'
import annualReport3 from '../imgs/aboutus-images/annualreport3.png'
import annualReport4 from '../imgs/aboutus-images/annualreport4.jpeg'
import { Modal } from 'bootstrap'



const About = () => {

   const [teams, setTeam] = useState([
     {
       name: "Akanksha Chandele",
       imgSrc: team1,
       designation: "Program Manager / Therapist",
       description:
         "Akanksha is a Holistic Trauma Therapist actively engaged in working with survivors of abuse and trauma. Their practice is rooted in building interconnectedness and compassion for all beings and they believe in the power of mind-body-spirit healing in order to thrive and grow. Akanksha has an MA in Counselling Psychology, a diploma in Rehabilitation Psychology, and a diploma in Arts-Based Therapy.They are trained in EMDR, IEMT, Somatic Practices, and psychological first-aid. They also use Bach remedies, Access consciousness, and are a Reiki Master Practitioner.With a deep inclination to support the mental wellbeing of marginalised and vulnerable communities, they started I Am Wellbeing (Nairatmya Foundation), an organisation dedicated to trauma healing and prevention. I Am Wellbeing works with survivors of adverse life experiences and equips mental health professionals, caregivers, and educators in providing trauma-informed care to those in need.",
     },

     {
       name: "Pallavi Singh",
       imgSrc: team2,
       designation: "Program Manager / Therapist",
       description:
         "Pallavi is a Trauma and Grief-Informed therapist driven to support people in overcoming personal obstacles. She is passionate about bringing healing to people who have been through traumatic life experiences. Her work focuses on building a client's self-worth & how they view their value as human beings. With the belief that connection is the key to trauma healing, she uses multiple trauma-informed approaches in her work with children at risk & young adults living in under-resourced communities. Equipped in working with children in institutional care, she has in-depth knowledge of the ecosystem of childcare homes, stakeholders, and legal frameworks. She is trained in providing psychological first- aid in the event of emergencies. She offers guidance on psychosocial care provided while supporting people & holds a Master's degree in applied psychology with a specialisation in clinical psychology from Jamia Millia Islamia University.",
     },
     {
       name: "Atufa Khan",
       imgSrc: team3,
       designation: "Counselling Psychologist",
       description:
         "Atufa holds a Master’s degree in psychology from Delhi University. She is passionate about destigmatizing mental health. She aims towards creating an inclusive, compassionate and safe space for individuals. Specializing in health and culture, she values a holistic approach to understanding people. She has undergone a considerable amount of training in various areas like listening skills, group therapy sessions, adverse childhood experiences, trauma awareness and grief in psychotherapy.",
     },

     {
       name: "Yasha Malhotra",
       imgSrc: team4,
       designation: "Counselling Psychologist",
       description:
         "Yasha Malhotra is a psychologist with a master’s degree in clinical psychology. She uses a comprehensive approach, emphasizing on both physical and mental health, and has experience working in a variety of clinical and counseling settings. Her vision is to create an environment that is both spiritually and emotionally mindful.",
     },
     {
       name: "Ishi Agarwal",
       imgSrc: team5,
       designation: "Content Manager, Therapist",
       description:
         "She has completed her Master's in Psychology and received training in different sectors of mental health such as counseling, relationship concerns, and addiction and recovery. She believes that building a deeper understanding of 'self' is the first and the most important step toward healing. She aims to help individuals build a healthier relationship with themselves and those around them. She is also a big supporter of writing and other creative activities as an outlet for pent-up emotions and tries to integrate these practices into her personal and professional life.",
     },
     {
       name: "Laasya Mangalampalli",
       imgSrc: team6,
       designation: "Counselor",
       description:
         "Laasya Mangalampalli is a mental health counselor who holds a Master’s Degree in counseling psychology from SNDT University, Mumbai. She is passionate about creating safe and nurturing spaces for everyone. She has an ardent passion for working with people who have undergone adverse life experiences. In her work, her focus is on building a sense of connection, safety, and compassion. With a strong inclination towards working for the overall well-being of children and young adults from under-resourced communities, she is presently trying to train in multiple approaches to counseling and equip herself with in-depth knowledge about working with children in institutional care and the legal frameworks involved.",
     },
   ]);  

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  
  return (
    <>
      <section className='section about py-16 '>
        {/* model */}
        <div
          className={`fixed  bg-[rgba(0,0,0,0.8)] top-0 z-20 transition-all duration-300 ease-in-out inset-0 ${
            isOpen ? "h-full" : "h-0"
          } overflow-hidden`}
        >
          <div
            className='logo-close w-full text-right p-5 font-bold text-white'
            onClick={() => setIsOpen(false)}
          >
            <i className='fas fa-times font-bold text-2xl cursor-pointer'></i>
          </div>

          <div className='model-content w-[90%]  md:max-w-3xl m-auto  '>
            <div className='bg-white text-black p-8 max-h-[550px] md:max-h-auto overflow-y-scroll md:overflow-hidden'>
              <h2 className='text-2xl font-semibold mb-2'>
                {selectedTeamMember?.name}
              </h2>
              <h3 className='text-xl font-semibold mb-2'>
                {selectedTeamMember?.designation}
              </h3>
              <p className='md:text-lg text-md'>
                {selectedTeamMember?.description}
              </p>
            </div>
          </div>
        </div>
        {/* code model */}

        <div className='flex w-[90%] md:max-w-6xl flex-wrap md:flex-nowrap  m-auto '>
          <div className=' m-auto'>
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
              <p className='text-xl leading-10'>
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
            <img src={AkanshaChandrel} alt='img' className='max-w-sm h-auto ' />
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
            className='text-xl md:text-5xl text-white font-bold relative'
            style={{
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
              height: "140px",
            }}
          >
            <h1 className='absolute top-[100px] sm:top-12 md:top-5 left-2'>
              Our Team
            </h1>
          </div>

          <div className='team-container grid xs:grid-cols-2 sm:grid-cols-3  md:grid-cols-3 max-w-4xl m-auto gap-10 mt-10'>
            {teams.map((team) => {
              return (
                <div
                  className='team-card w-[90%] m-auto cursor-pointer'
                  key={team.name}
                  onClick={() => {
                    setSelectedTeamMember(team);
                    setIsOpen(true);
                  }}
                >
                  <img src={team.imgSrc} alt='team' className='w-full' />
                </div>
              );
            })}
          </div>
        </div>

        <div className='our-consultant mt-10'>
          <div
            className='text-2xl md:text-6xl text-white font-bold relative'
            style={{
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
              height: "140px",
            }}
          >
            <h1 className='absolute top-[100px]  md:top-5 left-2'>
              Our consultants
            </h1>
          </div>

          <div className='team-container grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-5xl m-auto gap-10 mt-10'>
            <img
              src={consultant1}
              alt='consultant1'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant2}
              alt='consultant2'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant3}
              alt='consultant3'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant4}
              alt='consultant4'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant5}
              alt='consultant5'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant6}
              alt='consultant6'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant7}
              alt='consultant7'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant8}
              alt='consultant8'
              className='w-[350px] h-auto'
            />
            <img
              src={consultant9}
              alt='consultant9'
              className='w-[350px] h-auto'
            />
          </div>
        </div>

        <div className='annual-reports'>
          <div
            className=' text-2xl md:text-6xl text-white font-bold relative'
            style={{
              backgroundImage: `url(${greenBg})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom left",
              height: "140px",
            }}
          >
            <h1 className='absolute top-[100px] sm:top-20 md:top-4 left-2'>
              Annual Reports
            </h1>
          </div>

          <div className='annual-container  grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:max-w-5xl w-[90%] m-auto gap-10 mt-10'>
         <a href="../imgs/aboutus-images/annual-reports-images/I Am Wellbeing_Annual Report_2020-2021.pdf" target='_blank' download className='cursor-pointer'>
            <img
              src={annualReport1}
              alt='annualreport1'
              className='sm:w-[300px]'
            />
            </a>
            <img
              src={annualReport2}
              alt='annualreport2'
              className='sm:w-[300px]'
            />
            <img
              src={annualReport3}
              alt='annualreport3'
              className='sm:w-[300px]'
            />
            <img
              src={annualReport4}
              alt='annualreport4'
              className='sm:w-[300px]'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About



