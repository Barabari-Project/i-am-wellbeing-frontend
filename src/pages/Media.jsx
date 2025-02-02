import React, { useRef, useState } from "react";

const angerImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/anger.png`;
const backpainImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/backpain.png`;
const beathingImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/beathing.png`;
const helplessnessImg = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediaImg/helplessness.png`;
const safeImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/safe.png`;
const selfImg = `${import.meta.env.VITE_PUBLIC_URL}/mediaImg/self.png`;

const angervideo = `${import.meta.env.VITE_PUBLIC_URL}/mediavideos/anger.mp4`;
const backpainvideo = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediavideos/backpain_degkwa.mp4`;
const beathingvideo = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediavideos/beathing_fnaq1s.mp4`;
const helplessnessvideo = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediavideos/helplessness_aohsgg.mp4`;
const safevideo = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediavideos/safe_1_kugvfm.mp4`;
const selfvideo = `${
  import.meta.env.VITE_PUBLIC_URL
}/mediavideos/self_fljo0n.mp4`;

import greenbg from "../imgs/program-images/greenbg.png";
const calendarBg = `${
  import.meta.env.VITE_PUBLIC_URL
}/phase-2/calender%20bg.svg`;

import calendar from "../imgs/program-images/calendar.png";
import support from "../imgs/program-images/support.webp";

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

  const videoRefs = useRef([]);
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const handlePlay = (index) => {
    // Pause the currently playing video, if any
    if (currentPlaying !== null && videoRefs.current[currentPlaying]) {
      videoRefs.current[currentPlaying].pause();
    }

    // Update the currently playing index and play the clicked video
    setCurrentPlaying(index);
    const currentVideo = videoRefs.current[index];
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
      } else {
        currentVideo.pause(); // Toggle play/pause on repeated clicks
      }
    }
  };

  return (
    <>
      <section className="mb-9 pt-[24%] xs:pt-[14%] sm:pt-[0%] ">
        {/* header of arya */}
        <div
          className="bg-cover  px-5 pt-10 pb-16  bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${greenbg})` }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-5xl">
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
              <div className="sm:flex sm:flex-wrap sm:flex-row  sm:flex-1">
              {data.map((item, index) => (
  <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
    <iframe
      width="100%"
      height="250"
      src={item.video.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <h2 className="text-center font-bold text-lg p-2">{item.name}</h2>
  </div>
))}


              </div>
            </div>
          </div>{" "}
        </div>

        {/* Grief Support Booklet  */}

        <div className="mt-6">
  <h1 className="text-4xl font-bold max-md:text-3xl lg:pl-11 max-md:px-5">
    Grief Support Booklet
  </h1>
  
  {/* Main Content Container */}
  <div className="flex flex-col sm:flex-row gap-8 mt-8 lg:px-11 max-md:px-5">
    {/* Text Content - Left Side */}
    <div className="sm:w-1/2">
      <div className="mt-[4%]">
        <p className="text-justify text-[20px] font-thin max-md:text-lg">
          Grief is an ocean that is ever-consuming and ever-flowing. It is not
          something to get rid of and definitely not easy to live with. There is no
          right way to work with it. All we can try is to hold space for it, be
          gentle with it, and allow it to move at its own pace.
        </p>
      </div>
      <div className="mt-8">
        <p className="text-justify text-[20px] max-md:text-lg font-thin">
          Here is a booklet that we have designed to add a drop of support in the
          ocean of this unknown. This booklet is for anyone supporting a dear one
          through their journey with grief.
        </p>
      </div>
    </div>

    {/* Image Container - Right Side */}
    <div className="sm:w-1/2 flex items-center justify-center">
      <div className="w-full h-full p-4">
        <a
          href="https://drive.google.com/file/d/123F9-Wx457Vn4zDGqQW00nQo4M-vfOjd/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <img
            loading="lazy"
            src={support}
            alt="support"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Self-Care Calendar  */}

        <div className="mt-8 max-md:p-5"> {/* Changed from sm:-mt-[20%] */}
        <h1 className="px-4 lg:px-11 max-md:px-0 text-4xl font-bold max-md:text-3xl">
    Self-Care Calendar
  </h1>
          {/* ------------------------------- */}
          <div className="sm:flex mt-[4%] gap-5 leading-8">
            <p className="text-justify text-[20px] font-thin px-4 lg:px-11 max-md:p-0 max-md:text-lg">
              Self-Care Calendar, as the name suggests, is a thoughtfully
              designed tool that can be used by anyone to support them in their
              healing journey. It incorporates the mind-body-spirit triad and
              focuses on regulation and slow integration. Whether you are
              looking for some grounding exercises or just simple ways of
              connecting with yourself, this self-care calendar takes you on a
              journey that slowly enhances your ability to support yourself.{" "}
              <br />
              <br />
              Taking care of ourselves is the truest form of
              self-acknowledgement and acceptance. It is a step we take not to
              change anything about ourselves but to allow our body to receive
              rest, compassion, and nurturance. <br />
              <br />
              Build in this 30-day Self-Care routine and allow yourself to soak
              in rest and slowness. If you find this helpful, write to us at
              info@iamwellbeing.in with your feedback and suggestions. <br />
              <br />
            </p>
          </div>

          <div
            style={{
              backgroundImage: `url(${calendarBg})`,
              backgroundSize: "cover", // Ensures the background covers the div
              backgroundPosition: "center", // Centers the background
            }}
            className="flex items-center justify-center h-full" // Flexbox to center the image
          >
            <a
              href="https://drive.google.com/file/d/1hZKTmrJrd7DCYk2e0tTH6nni1foR4jfR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                loading="lazy"
                src={calendar}
                alt="selfcare"
                className="md:w-[80%] max-w-full h-auto m-auto object-contain" // Maintains aspect ratio
              />
            </a>
          </div>

          <div></div>
          {/* ------------------------------------ */}
        </div>
      </section>
    </>
  );
};

export default Media;
