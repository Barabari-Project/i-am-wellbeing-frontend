import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
// import img from "../imgs/3a.png";

const ticp2Img = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/2.png`;
const ticp3Img = "/imgs/home-images/flow-chart.png";
const ticp4Img = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/2aa.png`;

const trainer1 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer1.png`;
const trainer2 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer2.png`;
const trainer3 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer3.png`;
const trainer4 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer4.png`;
// const trainer5 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer5.png`;
import trainer5 from "../imgs/home-images/trainer5.png";

import graidingImg from "../imgs/home-images/graiding.png";

const trainer6 = `${import.meta.env.VITE_PUBLIC_URL}/home-images/trainer6.png`;

const banner = `${import.meta.env.VITE_PUBLIC_URL}/ticp-images/ticp5.png`;
import flowChart from "../imgs/home-images/flow-chart.png";

import Faq from "../components/Faq";
import Model from "../components/Model";

import groupImag from "../imgs/home-images/ticp.png";
import CurriculumTable from "../components/CurriculumTable";
import ScheduleTable from "../components/TableContent";
// import Timeline from "../components/FlowChart";
const Ticp = () => {
  const [team] = useState([
    {
      imgSrc: trainer1,
      name: "Akanksha Chandele",
      smallImgSrc: "trainer1-small.png",
      designation: "Director / Senior supervisor",
      description:
        "Akanksha is a Holistic Trauma Therapist actively engaged in working with survivors of abuse and trauma. Their practice is rooted in building interconnectedness and compassion for all beings and they believe in the power of mind-body-spirit healing in order to thrive and grow. Akanksha has an MA in Counselling Psychology, a diploma in Rehabilitation Psychology, and a diploma in Arts-Based Therapy.They are trained in EMDR, IEMT, Somatic Practices, and psychological first-aid. They also use Bach remedies, Access consciousness, and are a Reiki Master Practitioner.With a deep inclination to support the mental wellbeing of marginalised and vulnerable communities, they started I Am Wellbeing (Nairatmya Foundation), an organisation dedicated to trauma healing and prevention. I Am Wellbeing works with survivors of adverse life experiences and equips mental health professionals, caregivers, and educators in providing trauma-informed care to those in need",
    },
    {
      imgSrc: trainer2,
      name: "Pallavi Singh",
      smallImgSrc: "trainer2-small.png",
      designation: "Program Manager / Therapist",
      description:
        "Pallavi is a Trauma and Grief-Informed therapist driven to support people in overcoming personal obstacles. She is passionate about bringing healing to people who have been through traumatic life experiences. Her work focuses on building a client's self-worth & how they view their value as human beings. With the belief that connection is the key to trauma healing, she uses multiple trauma-informed approaches in her work with children at risk & young adults living in under-resourced communities. Equipped in working with children in institutional care, she has in-depth knowledge of the ecosystem of childcare homes, stakeholders, and legal frameworks. She is trained in providing psychological first- aid in the event of emergencies. She offers guidance on psychosocial care provided while supporting people & holds a Master's degree in applied psychology with a specialisation in clinical psychology from Jamia Millia Islamia University.",
    },
    {
      imgSrc: trainer3,
      name: "Maitreyi Nigwekar",
      smallImgSrc: "trainer3-small.png",
      designation: "Consultant, Curriculum Development",
      description:
        "Maitreyi has an MSc in Psychological Approaches to Health from the University of Leeds (UK, 2009), and an MA in Counseling Psychology from SNDT University (India, 2012). She also holds a Diploma in Arts-Based Therapy and is an NLP Practitioner, a Reiki Master-Teacher, and a Clinical Hypnotherapist. Most of her work experience has been in the developmental sector, working with patients and caregivers of chronic conditions, children, and women. She has also worked with Aangan Trust, an NGO that works toward child protection. Currently, she works with teens, young adults, caregivers, and individuals from dysfunctional families surviving struggling from trauma and abuse in her private practice.",
    },
    {
      imgSrc: trainer4,
      name: "Shambhavi Singh",
      smallImgSrc: "trainer4-small.png",
      designation: "Trainer",
      description:
        "Shambhavi has studied Child and Adolescent Psychologist at Queen's University, Belfast. She is a Trauma Informed Arts Based Therapist; Solution Focussed Brief Therapist Who expertises in Social-Emotional Concerns and Parenting. She has been working since 13 years and uses Arts based mediums to work with trauma and learn regulation. In her personal life, she lives by Buddhist philosophy, enjoys coloring, cleaning and reality TV in her free time.",
    },
    {
      imgSrc: trainer5,
      name: "Ishi Agarwal",
      smallImgSrc: "trainer5-small.png",
      designation: "Missing",
      description:
        "Ishi is a Trauma-Informed Mental Health Practitioner with a deep curiosity for creative and somatic tools. She practices the principle of     'Slow is Fast' in all aspects of her life. She enjoys exploring different dimensions of art, creativity, and movement to regulate the nervous system and is on a journey to becoming a certified Arts-Based Practitioner. She is also a firm believer in writing as a tool for accessing, processing, and releasing emotions.",
    },
    {
      imgSrc: trainer6,
      name: "Preeta Ganguli",
      smallImgSrc: "trainer6-small.png",
      designation: "Consultant, Research",
      description:
        "Veena Hari is a Mental Health Practitioner with a Master's in Clinical Psychology and around 10 years of experience across the mental health and development sector. She is also the founder of Bhavati Foundation, a not-for-profit organisation working on reproductive mental health in India. She has also completed an advanced perinatal psychotherapy course. Veena, mother to a three-year-old, is also the host of the podcast Mothering and describes herself as a passionate and imperfect feminist.",
    },
  ]);

  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedTeamMember={selectedTeamMember}
      />
      <div
        className={`ticp-banner flex items-center mt-10 justify-center w-full  md:mt-0 `}
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="text-content bg-[rgba(255,222,89)] opacity-80 w-full p-8 mt-10 flex items-center gap-2 justify-center flex-col">
          <h2 className="text-black text-4xl font-bold text-center max-md:text-3xl">
            Certificate course on Trauma-Informed Care Practices
            <sup
              className="text-xl font-bold text-black m-2"
              // style={{ verticalAlign: "super" }}
            >
              ©
            </sup>
          </h2>

          <p className="text-[20px] lg:text-md">First-of-its-kind in India</p>
        </div>
      </div>

      <div className="container w-full sm:max-w-7xl  lg:max-w-7xl  m-auto lg:bg-white pt-2">
        <div className="about-us text-xl">
          <h2 className="title text-4xl font-bold  max-md:text-3xl pl-2 max-md:px-5">
            About us
          </h2>
          <div className="px-4 pb-4 pl-2 max-xl:p-6 max-md:p-5 text-xl max-md:text-lg">

          <p className="mt-2 leading-8 text-justify lg:text-wrap w-[95%] m-auto lg:w-full max-md:m-0 max-md:w-full">
            Trauma is the most unaddressed and unseen epidemic in today’s time.
            Seven out of ten children in India experience some form of adversity
            at an early age. If left unaddressed, these painful experiences can
            haunt them for the rest of their lives, deeply impacting their
            mental, emotional, and physical wellbeing.
          </p>

          <p className="leading-8 text-justify w-[95%] m-auto lg:w-full  max-md:m-0 max-md:w-full max-md:mt-3">
            I Am Wellbeing (Nairatmya Foundation) is a mental health not-for-
            profit organization dedicated to supporting such young lives
            struggling with adverse childhood experiences and building an
            ecosystem of trusted, available, trained adults. We believe in the
            power of compassion, connection, and care to develop a healthy and
            happy nation.
          </p>
          </div>
          <div className="bg-[#FFDE59]  p-4 pl-2 max-xl:p-6 max-md:p-5 text-xl max-md:text-lg">
            <h2 className="title text-4xl font-bold mb-5 max-md:text-3xl">Rationale</h2>
            <p className="mb-3 leading-8 text-justify">
              While the last decade has highlighted the significant need for
              mental health interventions, it has also{" "}
              <b>
                <i>exposed the scarcity of trained professionals</i>
              </b>{" "}
              compared to the staggeringly high number of people in need of
              mental health care and support in India. With each passing day we
              get to witness a new statistic or data related to
              <b>
                <i>
                  {" "}
                  increasingly high number of deaths by suicide, depression
                  rate, severe mental health and physical health concerns like
                  chronic illnesses, heart problems, and autoimmune diseases.
                </i>
              </b>
            </p>
            <p className="leading-8 text-justify">
              The key to mitigating the impact of the perpetually increasing
              wellbeing concerns in our country is to look beyond the presenting
              symptoms of an individual and work towards the root cause through
              a holistic and trauma- informed outlook.
            </p>
            <p className="leading-8 text-justify">
              We strive to fulfill this unmet need of quality mental health care
              by{" "}
              <b>
                <i>building the capacity of professionals</i>
              </b>{" "}
              towards adapting a trauma- informed approach that is inclusive,
              contextualised, and de-stigmatising. To bring this shift in
              managing mental health concerns, we have designed a{" "}
              <b>
                <i>6 months long coursework</i>
              </b>{" "}
              on trauma- informed care practices. Experts from the field will
              support the participants to build a trauma-informed lens for
              intervention planning.
            </p>

            <p>
              The course will create an understanding of evidence-based holistic
              tools used to process deep-rooted trauma.
            </p>
          </div>
        </div>
        <div className="Activities px-4 pl-2 max-xl:p-6 max-md:p-5 text-xl max-md:text-lg">
          <h2 className="title text-4xl font-bold mb-1 py-4 max-md:text-3xl max-md:text-left">
            Course Activities & Duration
          </h2>
          <p className="leading-8 text-justify w-[95%] m-auto lg:w-full  max-md:m-0 max-md:w-full max-md:mt-3">
            {/* The course will encompass various activities like learning sessions,
            group discussions, assignments, case conceptualisation, roleplays &
            supervision. There are a total of <b>six modules</b> to be covered
            over a period of <b>two months</b>. Upon completion of each module,
            the participants will submit <b>graded assignments.</b> The end of
            the theory sessions will embark on the beginning of{" "}
            <b>four months of trauma-informed supervision </b>with experts from
            the field. As the supervision commences, participants will attend a{" "}
            <b>viva</b> and submit
            <b> case studies.</b> The intensive process is designed to ensure
            the learning and application of trauma- informed care practices
            successfully. */}
            The coursework will encompass various activities like online
            learning/theory sessions, practical and viva, assignments, project
            submission and class discussions. There are a total of five modules
            in the coursework. Each module will be covered over a period of
            one/two weeks, and upon completion, the participants will submit a
            credited assignment related to that module. Week 5 and Week 8 will
            be integration weeks where the participants will be allowed time to
            process the knowledge acquired and discuss doubts with the trainers.
            Once all the modules are complete, all the assignments submitted by
            the participants will be graded, and a buffer period to complete
            pending assignments will be allotted. After completing all
            assignments, the participants will be asked to design a practical
            program for utilising the knowledge gained throughout the
            coursework, along with a final submission date. Post this, a viva
            exam will be scheduled where the participants will discuss their
            projects and share their learning points. The intensive process is
            designed to ensure the learning and application of the components
            successfully.
          </p>

          <div className="activit-list flex flex-wrap justify-between mt-5 p-4">
            <div className="table-list  text-md text-center font-bold  flex lg:flex-row flex-col gap-2 lg:gap-0 items-center justify-between  w-full">
              <table className="table-list text-md text-center font-bold border-[#029390] border-2 lg:w-[500px] ">
                <tr>
                  <td className="p-4 border-4 border-[#029390] ">
                    2 Months of <br /> Theory Sessions
                  </td>
                  <td className="p-4 border-4  border-[#029390]">
                    4 Months of <br /> Supervision
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-4 border-[#029390] ">
                    Module-based <br /> Assignments
                  </td>
                  <td className=" p-4 border-4 border-[#029390] ">
                    Five Case <br /> Submissions
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="border-4 p-4 border-[#029390]">
                    Knowledge Based Viva Assessment
                  </td>
                </tr>
              </table>

              <div>
                <img src={groupImag} alt="group-img" />
              </div>
            </div>

            <LazyLoadImage
              src="https://www.iamwellbeing.org/imgs/ticp4.png"
              alt="teammate"
              className="w-[500px]  lg:mt-0"
              effect="blur" // Blur effect while loading
              placeholder={<BlurryImages imgUrl="Home/ticimage1-small.jpg" />}
            />
          </div>

          <CurriculumTable />
          {/* <TrainingSchedule/> */}
          <ScheduleTable />
        </div>
        <div className="beyond pl-2  w-[95%] max-md:p-5 max-md:w-full">
          <h1 className="title text-3xl font-bold mt-3">Beyond Level-1</h1>
          <p className="text-[15px] lg:text-[20px] mt-3  text-black text-justify w-[95%] lg:w-full">
            Successful completion of level 1 will qualify you to apply for Level
            2 This level is a more specialized coursework, which will focus upon
            topics like:
          </p>

          <ul className="ml-8 mt-6 list-disc text-md lg:text-xl grid lg:grid-cols-2">
            <li className="lg:mb-3 mb-1">Gender, sexuality, & trauma</li>
            <li className="lg:mb-3 mb-1">Relational trauma</li>
            <li className="lg:mb-3 mb-1">Accidents and trauma</li>
            <li className="lg:mb-3 mb-1">Trauma and addiction</li>
            <li className="lg:mb-3 mb-1">Complex trauma</li>
            <li>Religious trauma</li>
          </ul>
        </div>

        <div className="course policy mt-4 bg-[#FFDE59] p-6 max-md:p-5">
          <h1 className="title text-4xl font-bold mb-1 max-md:text-3xl">Course Policies</h1>
          <h1 className="title text-2xl font-bold mb-3 ">Contribution*</h1>
          <div className=" flex flex-col gap-5 text-xl max-md:text-lg">
            <p>
              The contribution amount is payable in advance as per the
              application process protocols.
            </p>
            <p className="text-justify">
              {" "}
              The amount can be paid online (NEFT/IMPS)
            </p>
            <p className="text-justify">
              Following details will be required to complete the payment
              process:Pan card and Aadhar Card**
            </p>
            <p className="text-justify">
              {" "}
              *All contribution will be utilised for Nairatmya Foundation's work
              with under-resourced communities
            </p>
            <p className="text-justify">
              {" "}
              **It is mandatory to submit Pan and Aadhar details of the person
              who has made the money transfer.
            </p>
          </div>
          <h1 className="title text-2xl font-bold mt-2">Refund Policy</h1>
          <p className="text-justify text-xl max-md:text-lg">
            In case the participant wants to withdraw from the course before it
            begins, 50% of the contribution amount shall be returned upon
            connecting with the organisation 15 days before the course
            commencement.
          </p>
          <h1 className="title text-2xl font-bold mt-3">Attendance</h1>
          <ul className="list-disc ml-6 mt-3 text-xl max-md:text-lg">
            <li className="mb-2">
              It is mandatory to attend all course classes.
            </li>
            <li className="mb-2">
              Regularity in attendance shall be taken into account for final
              course credits and certification.
            </li>
            <li>Extra class in lieu of missed class shall not be provided</li>
          </ul>
          <h1 className="title text-2xl font-bold mb-3 mt-5">Assignments</h1>
          <ul className=" list-disc ml-6 text-xl max-md:text-lg">
            <li className="mb-2">
              After each module, a reflective assignment is required to be
              submitted by the participants for evaluation.
            </li>
            <li className="mb-2">
              On completion of the course module, all assignments need to be
              submitted as per the assigned due date.
            </li>
            <li className="mb-2">
              Assignments play an important role in fulfilling the total credits
              required for the completion of the course.
            </li>

            <li className="mb-2">
              Assignments play an important role in fulfilling the total credits
              required for the completion of the course.
            </li>
            <li>Late submissions shall not be accepted.</li>
          </ul>
          <h1 className="title text-2xl font-bold mt-3">Evaluation</h1>
          <p className="text-justify text-xl max-md:text-lg">
            To evaluate a student's performance, a written assignment will be
            submitted after the completion of each module. Along with
            assignments, participants will be required to submit 5 case studies.
            The trainer will assess the student's performance based on the
            assignment, classroom interaction, and case submissions. After
            completing the course, a viva will be conducted to assess
            participants' knowledge and skills.
          </p>
          <h1 className="title text-3xl font-bold mt-3 max-md:text-2xl">Grading Criteria</h1>
          <div className=" mt-2 text-xl max-md:text-lg">
            <p className="mb-2 text-justify">
              Following grading criteria is used for evaluation of both
              assignments and overall course:
            </p>
            <p className="mb-2">Above 85%- 5( Excellent) </p>
            <p className="mb-2">70-85% - 4 (Good) </p>
            <p className="mb-2">51-65% - 3( Above Average)</p>
            <p className="mb-2">31-50- 2 (Average) </p>
            <p className="mb-2">&lt;30%- 1 (Below Average) </p>
          </div>

          <h1 className="title text-3xl font-bold mb-3 max-md:text-2xl">
            Overall Passing criteria
          </h1>
          <div className="text-xl max-md:text-lg">
            <li className="mb-2">All classes must be attended </li>
            <li className="mb-2">Timely assignment submission </li>
            <li className="mb-2">Complete supervision hours </li>
            <li className="mb-2">Case submission and presentation</li>
          </div>
          <h1 className="title text-2xl font-bold mb-3">
            Criteria for grading assignments
          </h1>
{/* *************** that is much clear then before ************** */}
          <div className='text-center w-10/12 flex items-center justify-center mx-auto max-md:w-full'>
          <LazyLoadImage
            // className="w-full m-auto text-center border-4 graiding-img"
            src={flowChart}
            alt="ticp4Img"
            effect="blur" // Blur effect while loading
            placeholder={<BlurryImages imgUrl={flowChart} />}
          />
          </div>
          <h1 className="title text-3xl font-bold mb-3 max-md:text-2xl">Eligibility</h1>
          <ul className=" list-disc ml-6 mt-4  text-xl max-md:text-lg">
            <li className="mt-4">
              Students from psychology and allied field background
              (undergraduate and postgraduate)
            </li>
            {/* <li className='mt-4'>
              Develop an understanding of evidence-based holistic tools used for
              processing of deep-rooted trauma.{" "}
            </li> */}
            <li className="mt-4">Working mental health practitioners</li>
          </ul>
          {/* <p className='text-xl text-justify'>
            Working mental health practitioners
          </p> */}

          <h1 className="title text-3xl font-bold mt-3 max-md:text-2xl">Scholarship Policy</h1>
          <p className="mt-2 text-justify text-xl max-md:text-lg">
            We strongly believe that resources play a major role in shaping
            one’s life and no life should struggle to get what they deserve.
            Keeping our mission at the heart of this, we are gladly announcing a
            few scholarship slots to students/professionals from under-resourced
            communities. If you meet the criteria, 50% of your total course fees
            will be waived off
          </p>
          <h1 className="title text-3xl font-bold mt-4 max-md:text-2xl">How To Apply?</h1>
          <div className="text-xl max-md:text-lg">
            <p className="mt-2 text-justify">
              Step-1: Fill out the application form. Check if you are eligible
              for scholarship
            </p>
            <p className="mt-2 text-justify">
              Step 2: Upon receiving an email from our side, write a cover
              letter extensively covering the details mentioned in the email
            </p>
            <p className="mt-2 text-justify">
              Step 3: If selected, appear for the personal interview
            </p>
            <p className="mt-2 text-justify">
              Step 4: If you meet the criteria, 50% of your total course fees
              will be waived off
            </p>
          </div>
          <h1 className="title text-3xl font-bold mt-4 max-md:text-2xl">Impact </h1>
          <p className="text-xl max-md:text-lg mt-3 text-justify">
            Trauma is a near universal experience of individuals with behavioral
            health problems. The present times have brought to light the hidden
            concerns and traumas of individuals across the globe. The course
            will provide participants with a foundational understanding of
            trauma, effects on the brain, culturally sensitive & evidence based
            approaches and resources to equip mental health professionals in
            trauma-informed care and therapy. This understanding would further
            lead to:
          </p>
          <ul className="list-disc ml-6 text-xl mt-6 max-md:text-lg">
            <li className="mt-2">
              A culture of safety, empowerment, and healing in these tough
              times.
            </li>
            <li className="mt-2">
              Access to quality intervention support and care to individuals.
            </li>
            <li className="mt-2">Reduction in re-traumatization. </li>
            <li className="mt-2">Cost-effective treatment.</li>
            <li className="mt-2">
              Elimination of stereotypes and labelling culture for mental health
              concerns.{" "}
            </li>
            <li className="mt-2">
              Shift to holistic interventions that caters to the
            </li>
            <li className="mt-2">Connection between mind, body and soul</li>
          </ul>

          <h1 className="title text-3xl font-bold mt-3 max-md:text-2xl">Key Takeaways</h1>
          <ul className=" list-disc ml-6 mt-4 text-xl max-md:text-lg">
            <li className="mt-4">
              Get equipped with trauma-informed counselling skills for practical
              application.{" "}
            </li>
            <li className="mt-4">
              Develop an understanding of evidence-based holistic tools used for
              processing of deep-rooted trauma.{" "}
            </li>
            <li className="mt-4">
              Build a trauma-informed care lens for intervention planning.
            </li>
            <li className="mt-4">
              Become a trauma-informed Mental health practitioner.{" "}
            </li>
            <li className="mt-4">
              Develop an understandingof trauma in the Indian context.
            </li>
          </ul>
        </div>

        <div className="know-your-trainner pl-2 mt-5">
          <h1 className="text-4xl font-bold max-md:text-3xl max-md:text-center">Know Your Trainers</h1>
          <div className="trainners grid  items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-white max-w-3xl m-auto mt-10">
            {team.map((trainer, index) => {
              return (
                <div
                  key={trainer.name}
                  className="trainner-card cursor-pointer flex item-center justify-center flex-col "
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedTeamMember(trainer);
                  }}
                >
                  <LazyLoadImage
                    className={`${
                      index == 4 ? "w-[175px]" : "w-[200px]"
                    } h-[150px] m-auto object-cover`}
                    src={trainer.imgSrc}
                    alt="trainner-img"
                    effect="blur" // Blur effect while loading
                    placeholder={
                      <BlurryImages
                        imgUrl={`home-images/${trainer.smallImgSrc}`}
                      />
                    }
                  />
                  <div className="flex flex-col items-center justify-center w-full gap-3">
                    <h1 className="text-xl text-center  font-[600] mt-2 uppercase">
                      {trainer.name}
                    </h1>
                    <button className="text-center bg-[#029390] p-1 px-2 text-xs rounded-md text-white">
                      Know More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="btns max-w-3xl flex flex-wrap items-center gap-5 lg:gap-20 justify-center m-auto mt-10">
            <button className="btn p-3 transition-all duration-300 bg-white font-[700] text-gray-600 px-8 text-xs rounded-full border-yellow-400 border-2">
              <a
                href="https://drive.google.com/file/d/1nlYozsui-13TPcixr76VMVPlbwPmQRst/view?usp=sharing"
                target="_blank"
              >
                DOWNLOAD THE BROCHURE
              </a>
            </button>
            <button className="p-3 transition-all duration-300 btn bg-white font-[700] text-gray-600 px-8 text-xs rounded-full border-yellow-400 border-2">
              <a
                href="https://docs.google.com/forms/d/1XndjGihgSJNstgCGXm1J1shpAJeRuGz1C9foyq-Lljc/closedform?pli=1"
                target="_blank"
              >
                APPLY NOW
              </a>
            </button>
          </div>
        </div>

        <Faq />
      </div>
    </>
  );
};

export default Ticp;
