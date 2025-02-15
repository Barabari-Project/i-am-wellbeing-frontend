import React from "react";

// const angerImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/anger.png`;
const backpainImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/backpain.png`;
const beathingImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/beathing.png`;
const helplessnessImg = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediaImg/helplessness.png`;
const safeImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/safe.png`;
const selfImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/self.png`;

import greenbg from "../imgs/program-images/greenbg2.png";
const calendarBg = `${
  import.meta.env.VITE_PUBLIC_URL
}/phase-2/calender%20bg.svg`;

import calendar from "../imgs/program-images/calendar.png";
import support from "../imgs/program-images/support.webp";
import textAboveImg from "../imgs/program-images/supportImg.png";

const Media = () => {
  const data = [
    {
      video: "https://www.youtube.com/watch?v=1mAtRJVRg2w",
      img: backpainImg,
      name: "EFT  for Anger (Hindi)",
    },
    {
      video: "https://youtu.be/nBV3jKW8cGI",
      img: helplessnessImg,
      name: "EFT  for Anger (English)",
    },
    {
      video: "https://www.youtube.com/watch?v=37iA_yEnNBM",
      img: beathingImg,
      name: "EFT  for Hopelessness (Hindi)",
    },
    {
      video: "https://youtu.be/yJR_jpwlU_M",
      img: safeImg,
      name: "EFT for Hopelessness (English)",
    },
    {
      video: "https://www.youtube.com/watch?v=ApAHrurhXno",
      img: selfImg,
      name: "Breathing Exercises (Hindi)",
    },
    {
      video: "https://www.youtube.com/watch?v=PtmJzGHdXOs",
      img: selfImg,
      name: "EFT  for Back Pain (Hindi)",
    },
    {
      video: "https://www.youtube.com/watch?v=VFoZk6Cn4lc",
      img: selfImg,
      name: "Safe Space Visualisation (Hindi)",
    },
    {
      video: "https://youtu.be/P98MzJBjwpE",
      img: selfImg,
      name: "Safe Space Visualisation (English)",
    },
    {
      video: "https://youtu.be/pWrNo1-h0fw",
      img: selfImg,
      name: "EFT for Anxiety (Hindi)",
    },
    {
      video: "https://youtu.be/MNqUjwYrVeA",
      img: selfImg,
      name: "EFT for Anxiety (English)",
    },
    {
      video: "https://youtu.be/EBv35ZVZ5Pg",
      img: selfImg,
      name: "EFT for Grief (English)",
    },
    {
      video: "https://youtu.be/sjitY6X65nA",
      img: selfImg,
      name: "EFT for Grief (Hindi)",
    },
    {
      video: "https://www.youtube.com/watch?v=7uGY76z5mZ4",
      img: selfImg,
      name: "EFT for Self Worth (Hindi)",
    },
  ];

  return (
    <>
      <section className="mb-9 pt-[24%] xs:pt-[14%] sm:pt-[0%]">
        {/* header of arya */}
        <div
          className="bg-cover bg-no-repeat bg-bottom h-32 flex items-center px-5 pt-10 pb-16 max-lg:pb-10"
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          <h1 className="text-3xl sm:text-4xl max-lg:mb-2 max-lg:pl-[4.7rem] md:text-5xl max-md:px-0 max-md:text-4xl lg:mb-6 lg:px-11 font-bold lg:text-6xl">
            Resources
          </h1>
        </div>

        <div className="  p-4 lg:p-4 px-[8%] max-md:px-5  xxxl:px-[14%] border-blue-500">
          {/* top img of arya */}
          {/* 3slides of arya */}
          {/* content data */}
          <div className="px-4 lg:px-11  max-md:p-0">
            <h1 className="text-4xl font-bold max-md:text-3xl ">
              Emotional Freedom Technique
            </h1>
            {/* ------------------------------- */}
            <div className="sm:flex mt-[4%] gap-5 leading-8">
              <p className="text-justify text-[20px]  font-thin max-md:text-lg">
                Just like physical energy is stored in the body, emotional
                energy is also stored in the body. Think about how anger feels
                in the body, temperature rises, fists might curl up, heartbeat
                might increase or completely slow down. Any number of reactions
                might take place, proving the premise that emotions are felt and
                stored in the body. <br></br>
                <br></br>
                However, for many reasons like invalidation from others,
                unavailability of means or space for expression, or simply lack
                of awareness, the process of experiencing an emotion might not
                be completed, creating stagnation. This unprocessed emotional
                energy then gets stuck in the body. <br></br>
                <br></br>
                EFT or Emotional Freedom Technique is a brief novel intervention
                combining elements of exposure and cognitive therapy and somatic
                stimulation. This self-help modality can release emotions that
                are stored within our bodies. It is often referred to as
                “tapping” as it uses a two-finger tapping process on known
                acupuncture points, leading to a gradual release. <br></br>
                <br></br>
                Try it for yourself. Make sure to sit in a comfortable place and
                have some water next to you. Take breaks and enter this space
                with curiosity!
              </p>
            </div>
            {/* ------------------------------------ */}
            <div className="lg:flex py-[3%] px-[3%] pt-[100px] md:pt-[4.5%] max-md:p-0 lg:gap-3 m-auto w-[99%] 2xl:px-[10%]">
              {/* Left side */}
              {/* <div className="lg:flex-1 lg:px-1">
        <video
          preload="none"
          controls
          poster={angerImg}
          className="lg:h-[82%] lg:w-full lg:px-[2%]"
          onClick={() => handlePlay(-1)} // Trigger play on click
          ref={(el) => (videoRefs.current[-1] = el)} // Assign a unique ref
        >
          <source type="video/mp4" src={angervideo} />
        </video>
        <h1 className="text-center font-bold text-3xl p-2">EFT for Anger</h1>
      </div> */}

              {/* Right side */}
              <div className="sm:flex sm:flex-wrap sm:flex-row sm:flex-1">
                {data.map((item, index) => {
                  const videoId =
                    item.video.split("v=")[1]?.split("&")[0] ||
                    item.video.split("/").pop();
                  return (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                      <iframe
                        width="100%"
                        height="250"
                        src={`${item.video
                          .replace("watch?v=", "embed/")
                          .replace(
                            "youtu.be/",
                            "www.youtube.com/embed/"
                          )}?loop=1&playlist=${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <h2 className="text-center font-bold text-lg p-2">
                        {item.name}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>{" "}
        </div>

        {/* Grief Support Booklet  */}

        <div className="container  px-4 md:px-6 lg:px-8 pt-12 w-full h-full">
          {/* Grief Support Section */}
          <section className=" gap-20 w-full h-full">
            <h1 className="px-4 lg:px-11 max-md:px-0 text-5xl font-bold max-md:text-3xl">
              Grief Support Booklet
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center -mt-7">
              {/* Text Content */}
              <div className="space-y-8 lg:px-4  mt-[4%] gap-5 leading-8">
                <p className="text-lg leading-relaxed px-4 lg:px-11 max-md:p-0 text-gray-700 md:text-xl md:leading-loose">
                  Grief is an ocean that is ever-consuming and ever-flowing. It
                  is not something to get rid of and definitely not easy to live
                  with. There is no right way to work with it. All we can try is
                  to hold space for it, be gentle with it, and allow it to move
                  at its own pace.
                </p>

                <p className="text-lg leading-relaxed px-4 lg:px-11 max-md:p-0 text-gray-700 md:text-xl md:leading-loose">
                  Here is a booklet that we have designed to add a drop of
                  support in the ocean of this unknown. This booklet is for
                  anyone supporting a dear one through their journey with grief.
                </p>
              </div>

              {/* Image Container */}
              <div
                className="w-full h-full bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${calendarBg})` }}
              >
                <div className="relative max-w-2xl mx-auto">
                  <a
                    href="https://drive.google.com/file/d/123F9-Wx457Vn4zDGqQW00nQo4M-vfOjd/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={support}
                      alt="Grief Support Booklet"
                      className="w-[57%] mx-auto max-lg:w-10/12 "
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Self-Care Calendar Section */}
          <div className=" max-md:p-5">
            <h1 className="px-4 lg:px-11 max-md:px-0 text-4xl font-bold max-md:text-3xl">
              Self-Care Calendar
            </h1>

            <div className="sm:flex mt-[4%] gap-5 leading-8">
              <p className="text-justify text-[20px] font-thin px-4 lg:px-11 max-md:p-0 max-md:text-lg">
                Self-Care Calendar, as the name suggests, is a thoughtfully
                designed tool that can be used by anyone to support them in
                their healing journey. It incorporates the mind-body-spirit
                triad and focuses on regulation and slow integration. Whether
                you are looking for some grounding exercises or just simple ways
                of connecting with yourself, this self-care calendar takes you
                on a journey that slowly enhances your ability to support
                yourself. <br />
                <br />
                Taking care of ourselves is the truest form of
                self-acknowledgement and acceptance. It is a step we take not to
                change anything about ourselves but to allow our body to receive
                rest, compassion, and nurturance. <br />
                <br />
                Build in this 30-day Self-Care routine and allow yourself to
                soak in rest and slowness. If you find this helpful, write to us
                at info@iamwellbeing.in with your feedback and suggestions.{" "}
                <br />
                <br />
              </p>
            </div>

            {/* Updated Calendar Background Section */}
            <div
              style={{
                backgroundImage: `url(${calendarBg})`,
                backgroundSize: "88%", // Increases background size
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="flex items-center justify-center min-h-[400px] lg:min-h-[850px] max-lg:min-h-[700px] w-full smallBg"
            >
              <a
                href="https://drive.google.com/file/d/1hZKTmrJrd7DCYk2e0tTH6nni1foR4jfR/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[90%] md:max-w-[70%] lg:max-w-[60%] "
              >
                <img
                  loading="lazy"
                  src={calendar}
                  alt="selfcare"
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
