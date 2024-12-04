import React from "react";


const peoplenew = `${import.meta.env.VITE_PUBLIC_URL}/Home/peoplenew.png`;
const yellowbgnew1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/yellowbgnew1.png`;
const greenbg = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/greenbg.png`;




const anubho1 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/anubho1.png`;
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




const arya1 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya1.png`;
const arya2 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya2.png`
const arya3 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya3.png`
const arya4 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya4.png`
const arya5 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya5.png`
const arya6 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya6.png`
const arya7 = `${import.meta.env.VITE_PUBLIC_URL}/programPageData/arya7.png`




const Programe = () => {
  return (
    <>
      {/* programe first page */}
      <section className="bottom-background relative w-[100%] lg:max-w-[100%] lg:my-14 mx-auto mb-9 pt-[22%] sm:pt-6 px-[8%]  xxxl:px-[13%] xxxl:pt-[6%]">
        <div className="container mx-auto  md:w-[93%]">
          <div className="flex flex-col items-center">
            <div className="bottom-background__img w-full">
              <img
                src={peoplenew}
                alt="People"
                className="w-full lg:-[100px] h-full object-cover "
              />
            </div>
            <div className="bottom-background__img w-full">
              <img
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
            <img src={anubho1} alt="anubho image"></img>
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
        <div className="flex flex-wrap   justify-center gap-1 sm:gap-10 m-auto ">
          <img src={anubho2} alt="img" className=" sm:w-1/5" />
          <img src={anubho3} alt="img" className=" sm:w-1/5" />
          <img src={anubho4} alt="img" className=" sm:w-1/5" />
        </div>
        {/* content data */}
        <div className="px-4 lg:px-11">
          <h1 className="text-5xl font-bold">Ripples of change</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            <img
              src={anubho5}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
            <p className="text-justify text-[20px] font-thin">
              "I think all of us have agreed on how comforting and safe this
              space has been. I had a space to talk and ask whatever questions I
              wanted to, and any opinion that I had was taken very well. I also
              really appreciate how the course has played an important part in
              understanding my journey and my own trauma."
              <br />
              <span className="text-gray-800 font-semibold">
                - A, participant, TICP Cohort 1 (2022)
              </span>{" "}
            </p>
          </div>
          {/* ------------------------------------ */}
          <div className="sm:flex mt-[1%] gap-5 leading-8">
            <p className="text-justify text-[20px] font-thin">
              "As the course went on, I felt really confident, and my
              understanding of people really shifted—not just my clients, but
              also whenever I have conflicts with people now, I usually take a
              step back and try to understand them. There has been a complete
              shift."
              <br />
              <span className="text-gray-800 font-semibold">
                - P, participant, TICP Cohort 1 (2022)
              </span>{" "}
            </p>
            <img
              src={anubho6}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
          </div>
          {/* ---------------------------------------- */}
          <div className="sm:flex  sm:mt-[1%] gap-5 leading-8">
            <img
              src={anubho7}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
            <p className="text-justify text-[20px] font-thin">
              "I used to think that whatever I had gone through was nothing
              compared to what others had gone through. But this course made me
              realise that our experiences cannot be compared. There can be no
              scale of suffering. "<br />
              <span className="text-gray-800 font-semibold">
                - R, participant, TICP Cohort 1 (2022)
              </span>{" "}
            </p>
          </div>
        </div>
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
              Through udaan, we build a safe therapeutic space for adolescents
              and young adults from marginalized communities. Trauma focussed
              therapy aims at establishing safety & then progresses towards
              processing deep rooted trauma stemming from experiences of
              marginalisation from a young age.
            </p>
          </div>
          <div className="w-[100%] lg:w-[70%] sm:pr-10  m-auto ">
            <img src={udan1} alt="anubho image"></img>
          </div>
        </div>
         {/* 3slides of udan */}
        <div className="flex flex-wrap   justify-center gap-1 sm:gap-10 m-auto ">
          <img src={udan2} alt="img" className=" sm:w-1/5" />
          <img src={udan3} alt="img" className="  sm:w-1/5" />
          <img src={udan4} alt="img" className=" sm:w-1/5" />
        </div>
        {/* content data */}
        <div className="px-4 lg:px-14">
          <h1 className="text-5xl font-bold text-right">Story of change</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-10">
            <img
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
            <img src={arya1} alt="anubho image"></img>
          </div>
          <div className="w-full sm:p-3  ">
            <h1 className="text-right w-[99%] font-bold text-4xl pb-4">
              Social emotional psychological wellbeing
            </h1>
            <p className="text-[22px] leading-9 text-justify">
              Children facing adversities require specific support to enhance
              their overall development. Project Arya, is a unique
              social-emotional learning program based on the CASEL framework
              with a trauma-informed lens in order to cater to the specific
              needs of marginalized young lives. It is a year-long program under
              which several trauma-informed facilitators conduct SEL modules
              designed specifically for the children from marginalized
              communities.
            </p>
          </div>
        </div>
         {/* 3slides of arya */}
        <div className="flex flex-wrap   justify-center gap-1 sm:gap-10 m-auto ">
          <img src={arya2} alt="img" className=" sm:w-1/5" />
          <img src={arya3} alt="img" className="  sm:w-1/5" />
          <img src={arya4} alt="img" className=" sm:w-1/5" />
        </div>
        {/* content data */}
        <div className="px-4 lg:px-11">
          <h1 className="text-5xl font-bold">Agents of change</h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            <img
              src={arya5}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
            <p className="text-justify text-[20px] font-thin">
              "Earlier I wasn't able to communicate, form groups, or work as a
              team very effectively. Since I have become a Peer Leader, now I
              feel confident to work as a leader with anyone"
              <br />
              <span className="text-gray-800 font-semibold">
                - S, 16 years old, Mental Health Peer Leader
              </span>{" "}
            </p>
          </div>
          {/* ------------------------------------ */}
          <div className="sm:flex mt-[1%] gap-5 leading-8">
            <p className="text-justify text-[20px] font-thin">
              "By joining Peer Leadership Program, I got the confidence to put
              my points forward. Earlier I never had the courage to voice out my
              opinion or take a stand for myself. This journey has empowered me
              to take an action towards what I feel is not right."
              <br />
              <span className="text-gray-800 font-semibold">
              - A, 15 years old, Mental Health Peer Leader
              </span>{" "}
            </p>
            <img
              src={arya6}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
          </div>
          {/* ---------------------------------------- */}
          <div className="sm:flex sm:mt-[1%] gap-5 leading-8">
            <img
              src={arya7}
              alt="img"
              className="justify-center sm:w-[14%] h-[90%]"
            />
            <p className="text-justify text-[20px] font-thin">
            "I have gained a lot of confidence and I can speak well in front of others. Off lately all my teachers at school have started recognising and appreciating this change in me. I told them this is because of the sessions I attend."<br />
              <span className="text-gray-800 font-semibold">
              - G, 14 years old, Mental Health Peer Leader
              </span>{" "}
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Programe;
