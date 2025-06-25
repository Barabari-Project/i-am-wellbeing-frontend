import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
import textBorder from "../imgs/program-images/text-border.png";
import { HashLink } from "react-router-hash-link";

const peoplenew = `${import.meta.env.VITE_PUBLIC_URL}/Home/peoplenew.png`;
const yellowbgnew1 = `${import.meta.env.VITE_PUBLIC_URL}/Home/yellow-bg.png`;
const design = `${import.meta.env.VITE_PUBLIC_URL}/Home/design.png`;
const video = `${import.meta.env.VITE_PUBLIC_URL}/Home/vd.mp4`;
const intro = `${import.meta.env.VITE_PUBLIC_URL}/Home/intro.png`;
const bg = `${import.meta.env.VITE_PUBLIC_URL}/Home/bg.png`;

import Testimonials from "../components/Testimonials";
import Carousel from "../components/Carousel";
import AboutUsCarousel from "../components/AboutUsCarousel";
import ClientCarousel from "../components/ClientCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [num1, setNum1] = useState(0); // State for the first counter
  const [num2, setNum2] = useState(0); // State for the second counter
  const counterOne = useRef(null);
  const counterTwo = useRef(null);
  const hasScrolledToSectionOne = useRef(false);
  const hasScrolledToSectionTwo = useRef(false);

  const animateCounter = (target, setNum, ref, hasScrolled) => {
    if (ref.current && !hasScrolled.current) {
      const rect = ref.current.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        hasScrolled.current = true; // Mark as scrolled to section

        const startTime = performance.now();
        const duration = 2000; // Duration of the animation in milliseconds
        const initialValue = 0;

        const incrementCounter = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Ensure it doesn't exceed 1

          const currentValue = Math.floor(
            initialValue + (target - initialValue) * progress
          );
          setNum(currentValue);

          if (progress < 1) {
            requestAnimationFrame(incrementCounter);
          }
        };

        requestAnimationFrame(incrementCounter); // Start the animation
      }
    }
  };

  const handleScroll = () => {
    animateCounter(3346, setNum1, counterOne, hasScrolledToSectionOne);
    animateCounter(100844, setNum2, counterTwo, hasScrolledToSectionTwo);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const programs = [
    {
      title: "Anubhoo",
      description: "Trauma-Informed Care Training ",
      section: "anubho",
    },
    {
      title: "Udaan",
      description: "Individual counselling and therapy  ",
      section: "udaan",
    },
    {
      title: "Project Arya",
      description: "Trauma-Informed Care Training ",
      section: "arya",
    },
  ];

  return (
    <div className="main w-full">
      {/* Hero Carousel */}
      <Carousel />

      {/* Trauma Explaination and Boxes */}
      <section className="section about-us py-8">
        <div className="max-w-6xl 2xl:max-w-7xl  mx-auto">
          <div className="w-full">
            <div className="flex jus p-4 tab:px-16 lg:py-4  w-full  ">
              {/* Text */}
              <div className="flex flex-col gap-9 lg:gap-8  ">
                <p className="text-justify text-lg tab:text-xl">
                  Trauma is a silent epidemic disrupting lives across
                  socio-economic strata, particularly of those on the margins.
                  The six-letter word is weighing down millions of Indians as a
                  majority remains unaware of its prevalence and consequences.
                </p>
                <p className="text-justify text-lg tab:text-xl">
                  At I Am Wellbeing | Nairatmya Foundation, we are lifting that
                  weight off individuals one intervention at a time by
                  empowering an army of changemakers on the ground. We are a
                  mental health not-for-profit organisation dedicated to
                  breaking cycles of intergenerational trauma and building an
                  ecosystem of trusted, available, and trained adults.{" "}
                </p>
                <p className="text-justify text-lg tab:text-xl">
                  We work with underserved, high-risk communities and have
                  supported over one lakh survivors of violence, discrimination,
                  abuse, and systemic oppression. With a multidisciplinary team
                  of experts, our holistic approach to mental health care
                  includes individual therapy, group interventions, and
                  skill-building.
                </p>
                <p className="text-justify text-lg tab:text-xl">
                  We are democratising access to mental health by making
                  high-quality, low-cost support accessible to all as we believe
                  healing is not a privilege, it is a right!
                </p>
                <div className="w-full  justify-end items-centerg gap-10 hidden lg:flex">
                <div className="h-[200px] w-[200px] rounded-3xl border-2 border-[#81b219]"></div>
                  <div></div>
                </div>
              </div>
              {/* Arrow Boxes */}
              <div className=" flex-col justify-between items-center w-full hidden lg:flex">
                {/* 1 */}
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"

                    version="1.2"
                    viewBox="0 0 252.75 244.5"
                  >
                    <defs>
                      <clipPath id="aec6920e34">
                        <path d="M.133 0h252.234v244H.133Zm0 0"></path>
                      </clipPath>
                      <clipPath id="008fc96554">
                        <path d="M52 169h28v65H52Zm0 0"></path>
                      </clipPath>
                      <clipPath id="bb3853b416">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="89a4c38c6a">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="f765bf62f2">
                        <path d="M53 169h27v58H53Zm0 0"></path>
                      </clipPath>
                      <clipPath id="4a8061b813">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="00bcbc989b">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="f0f0443910">
                        <path d="M55 169h25v52H55Zm0 0"></path>
                      </clipPath>
                      <clipPath id="c70cc80f53">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="a56ccf5f6c">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="9a0341f0cc">
                        <path d="M67 157h13v18H67Zm0 0"></path>
                      </clipPath>
                      <clipPath id="735f08ccd1">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="32f0a4b9e6">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="d729e795a6">
                        <path d="M71 157h8v9h-8Zm0 0"></path>
                      </clipPath>
                      <clipPath id="8fcf95da84">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="efece29bf6">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="00d8bf60da">
                        <path d="M7 2h239v158H7Zm0 0"></path>
                      </clipPath>
                      <clipPath id="74d7d08ee2">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                      <clipPath id="d75070f199">
                        <path d="M242.219 243.379-.066 233.059 9.875-.254 252.16 10.07Zm0 0"></path>
                      </clipPath>
                    </defs>
                    <g id="b35371dddf">
                      <g clipPath="url(#aec6920e34)">
                        <path
                          fill="#fff"
                          d="M.133 0h252.234v244H.133Zm0 0"
                        ></path>
                      </g>
                      <g clipPath="url(#008fc96554)">
                        <g clipPath="url(#bb3853b416)">
                          <g clipPath="url(#89a4c38c6a)">
                            <path
                              fill="#f48480"
                              fillRule="evenodd"
                              d="m52.297 226.793 14.832-56.797c1.328 1.973 3.18 3.461 5.469 4.012 2.343.61 4.672.254 6.808-.84l-14.832 56.805c-1.476 5.75-13.761 2.574-12.277-3.172Zm0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g clipPath="url(#f765bf62f2)">
                        <g clipPath="url(#4a8061b813)">
                          <g clipPath="url(#00bcbc989b)">
                            <path
                              fill="#006095"
                              fillRule="evenodd"
                              d="m53.527 221.992 13.602-51.996c1.328 1.973 3.18 3.461 5.469 4.012 2.343.61 4.672.254 6.808-.84l-13.558 52.055c-3.098 2.578-10.918.55-12.328-3.23Zm0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g clipPath="url(#f0f0443910)">
                        <g clipPath="url(#c70cc80f53)">
                          <g clipPath="url(#a56ccf5f6c)">
                            <path
                              fill="#0094d9"
                              fillRule="evenodd"
                              d="m55.004 216.246 12.125-46.25c1.328 1.973 3.18 3.461 5.469 4.012 2.343.61 4.672.254 6.808-.84l-12.07 46.309c-3.102 2.574-10.856.554-12.332-3.23m0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g clipPath="url(#9a0341f0cc)">
                        <g clipPath="url(#735f08ccd1)">
                          <g clipPath="url(#32f0a4b9e6)">
                            <path
                              fill="#d1ab66"
                              fillRule="evenodd"
                              d="M67.129 169.996c2.531-3.73 5-7.394 7.527-11.133 1.801-2.574 3.309-2.172 3.567 1 .375 4.414.804 8.89 1.183 13.305-2.136 1.094-4.465 1.457-6.808.84-2.29-.551-4.141-2.04-5.47-4.012m0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g clipPath="url(#d729e795a6)">
                        <g clipPath="url(#8fcf95da84)">
                          <g clipPath="url(#efece29bf6)">
                            <path
                              fill="#81b219"
                              fillRule="evenodd"
                              d="m71.703 163.25 2.953-4.395c1.801-2.574 3.309-2.171 3.567.997l.457 5.21a8.9 8.9 0 0 1-3.66-.21 9 9 0 0 1-3.313-1.61Zm0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g clipPath="url(#00d8bf60da)">
                        <g clipPath="url(#74d7d08ee2)">
                          <g clipPath="url(#d75070f199)">
                            <path
                              fill="#81b219"
                              d="M75.293 158.441c11.75-25.453 54.621-20.125 89.75-15.808 11.621 1.394 22.336 2.754 30.793 2.836l.105.004c12.016.058 22.871-3.137 30.7-9.47 7.828-6.327 12.687-15.815 12.828-28.335l.004-.113c.027-7.274 1.105-15.356 2.191-23.602 3.758-28.613 7.848-59.742-29.875-66.765-3.809-.672-6.937-1.254-9.738-1.825-17.235-3.273-21.043-3.945-45.48-4.984-3.212-.137-11.083-.754-21.262-1.469-23.286-1.672-58.72-4.195-78.903-4.437C50.04 4.37 42.25 4.379 34.98 5.59c-7.16 1.219-13.8 3.523-18.054 8.035-5.848 6.18-6.7 32.715-7.149 47.137-.054 2.59-.148 4.789-.218 6.422-.641 12.441-.68 25.3 1.136 35.59 1.774 10.003 5.29 17.542 11.864 19.515 21.437 6.61 85.757 7.602 133.734 8.348 11.105.191 21.254.343 29.934.543l.394.015c8.399.133 18.063-1.597 25.691-5.843 7.508-4.137 13.04-10.782 13.286-20.473l.004-.172c.007-1.465.289-4.098.52-6.918.292-2.809.585-5.73.675-7.867l1.86.078c-.09 2.086-.391 5.121-.622 7.93-.289 2.808-.57 5.445-.574 6.8l-.008.223c-.277 10.469-6.164 17.563-14.195 22.07-7.91 4.407-17.969 6.176-26.653 6.036l-.449-.02c-8.566-.2-18.773-.348-29.875-.539-48.094-.695-112.586-1.695-134.3-8.375-7.352-2.29-11.239-10.344-13.153-21.04-1.867-10.456-1.765-23.429-1.117-35.98.07-1.64.105-3.832.219-6.421.453-14.649 1.32-41.633 7.644-48.36C20.18 7.5 27.168 4.977 34.668 3.774c7.453-1.262 15.285-1.266 21.77-1.215 20.238.296 55.671 2.82 79.011 4.492 10.012.71 17.828 1.27 21.207 1.414 24.551 1.043 28.356 1.77 45.762 5.05 2.91.575 6.156 1.165 9.738 1.825 39.457 7.324 35.215 39.41 31.364 68.863-1.083 8.246-2.16 16.266-2.18 23.375l-.004.113c-.11 13.137-5.219 23.133-13.512 29.774-8.183 6.59-19.426 9.95-31.898 9.867l-.113-.004c-8.57-.082-19.344-1.39-31.016-2.844-34.516-4.234-76.66-9.418-87.781 14.758Zm0 0"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <path d="M62.455 52.527q1.358-.188 1.86-.656.497-.482.578-1.719l.765-12.265q.059-.937-.14-1.266-.205-.329-.844-.375h-1l-.047-.125.281-1.266q.388.017.594.063 1.717.157 2.625.203c.82.055 1.875.031 3.156-.063l-.203 1.313q-.879.093-1.266.281-.376.176-.546.656-.16.47-.266 1.579l-.469 4.718 4.922.328c1.219.075 2.664.063 4.344-.03l.328-5.313q.059-.937-.14-1.266-.206-.339-.844-.375a9 9 0 0 0-1 0l-.032-.125.282-1.281q.311.065 1.156.14.844.066 1.687.125 1.406.08 3.532-.062l-.188 1.328q-1.095.064-1.5.39c-.262.212-.418.594-.469 1.157-.25 2.187-.492 4.547-.718 7.078q-.345 3.784-.47 5.688-.063 1.096.173 1.484.233.374 1 .422.358.019 1.312-.016l.063.11-.344 1.343a4.4 4.4 0 0 1-.64-.062 85 85 0 0 0-2.954-.25l-3.375-.14.344-1.313q.968.047 1.437-.157.468-.216.688-.843.216-.639.297-1.969l.265-4.422-4.437-.297q-.738-.013-2.063-.031a47 47 0 0 0-2.812.062l-.438 5.204q-.08 1.204.157 1.625c.164.273.504.421 1.015.453.227.023.664.015 1.313-.016l.062.125-.343 1.344q-.269-.047-1-.125a31 31 0 0 0-1.485-.125 41 41 0 0 0-2.89-.063q-1.534.03-1.563.141ZM89.253 55.507q-1.676-.094-2.906-.985-1.237-.89-1.875-2.406-.628-1.528-.5-3.438.123-2.044 1.125-3.703.998-1.652 2.594-2.53c1.07-.595 2.242-.852 3.515-.782q1.639.11 2.891 1 1.248.892 1.875 2.422.621 1.535.516 3.422-.129 2.064-1.125 3.718-1.004 1.641-2.61 2.532-1.594.873-3.5.75m.89-1.375q1.642.11 2.688-1.172 1.06-1.278 1.188-3.547.104-1.732-.328-3.125-.44-1.389-1.344-2.203a3.44 3.44 0 0 0-2.11-.89c-1.093-.063-1.992.335-2.687 1.187q-1.049 1.284-1.187 3.593-.112 1.737.328 3.11c.3.906.75 1.633 1.343 2.172a3.27 3.27 0 0 0 2.11.875M102.383 56.469q-.314-1.435-1.343-5.625-1.02-4.185-1.407-5.797-.422-1.466-1.859-1.578l-.031-.11.218-.953 2.344.172q1.107.082 2.11.047a65 65 0 0 1 1.312-.031l.063.14-.25.876q-.956-.029-1.313.125-.345.141-.375.546-.033.563.766 4.266.795 3.69 1.093 5l.125.016 1.97-4.235q1.076-2.184 1.562-3.343-.253-1.014-.688-1.5-.423-.499-1.281-.563l-.031-.11.218-.937 2.344.172c.719.043 1.414.063 2.094.063h1.328l.047.156-.219.875q-.986-.03-1.328.094a.54.54 0 0 0-.375.5q-.033.531.766 4.234.795 3.688 1.093 5.047h.125q1.467-3.218 1.938-4.125a122 122 0 0 0 1.406-3.031c.375-.844.57-1.383.594-1.625q.013-.404-.25-.579c-.18-.113-.484-.18-.922-.203l-1.078-.062-.11-.203.22-.875q.262.017 1.046.093.78.083 1.828.141l2.407.11-.266 1.046q-.596.035-.969.438-.376.409-.969 1.656l-4.718 9.719-1.61.406-2.078-8.781-.187-.016-3.719 7.938ZM128.77 58.072q-.315-1.435-1.344-5.625-1.02-4.184-1.406-5.797-.424-1.465-1.86-1.578l-.03-.11.218-.952 2.344.172q1.107.081 2.109.046a65 65 0 0 1 1.312-.03l.063.14-.25.875q-.955-.029-1.313.125-.345.142-.375.547c-.023.375.235 1.797.766 4.265q.796 3.69 1.094 5l.125.016 1.969-4.234q1.077-2.184 1.562-3.344-.253-1.014-.687-1.5-.424-.498-1.282-.563l-.03-.11.218-.937 2.344.172q1.076.064 2.093.063h1.328l.047.156-.218.875q-.987-.03-1.329.094a.54.54 0 0 0-.375.5c-.023.355.235 1.765.766 4.234.531 2.461.895 4.14 1.094 5.047h.125c.976-2.144 1.625-3.52 1.937-4.125a122 122 0 0 0 1.407-3.031c.375-.844.57-1.383.593-1.625q.013-.404-.25-.578c-.18-.114-.484-.18-.922-.203l-1.078-.063-.109-.203.219-.875q.262.018 1.047.094.78.081 1.828.14l2.406.11-.266 1.047q-.595.034-.968.437-.376.409-.97 1.656l-4.718 9.719-1.61.406-2.077-8.781-.188-.016-3.719 7.938ZM151.261 59.277q-1.814-.11-3.172-1a5.56 5.56 0 0 1-2.031-2.406q-.675-1.53-.547-3.422a7.8 7.8 0 0 1 1.11-3.625q1.013-1.669 2.562-2.594 1.546-.937 3.25-.844 2.122.128 3.172 1.282 1.044 1.143.922 3.218-.05.861-.25 1.422l-.422.344-8.063-.484q-.204 2.814.844 4.422 1.06 1.593 3.14 1.734 1.639.093 3.641-.703l.172.078.266.86a15 15 0 0 1-2.422 1.234c-.867.351-1.59.515-2.172.484m2.031-9.14q.436-.028.594-.157.153-.14.188-.578.06-1.171-.532-1.828c-.398-.438-.984-.68-1.765-.734q-1.377-.077-2.407.796-1.032.88-1.375 2.438ZM176.09 60.783q-2.265-.141-2.452-2.234l-.22-.094q-3.173 1.889-3.78 1.86-1.676-.094-2.907-.938c-.824-.57-1.445-1.344-1.859-2.312-.406-.97-.574-2.055-.5-3.266q.123-2.076 1.219-3.766a7.66 7.66 0 0 1 2.828-2.625 6.9 6.9 0 0 1 3.703-.828q.936.063 2 .25l.297-4.86q.093-1.575-.984-1.64a2.4 2.4 0 0 0-.438.016 1 1 0 0 0-.297.047l.188-1.063q1.264-.092 2.625-.297 1.371-.215 1.734-.297l.156.407q-.345.469-.937 6.125-.581 5.66-.969 12.047c-.031.43.05.765.25 1.015q.294.361.86.406.404.019.796-.109.405-.14.657-.297.262-.17.343-.219l.375.5q-.095.14-.484.61c-.25.305-.578.613-.984.937q-.598.498-1.22.625m-5.874-2.343c.406.023.851-.067 1.344-.266q.75-.312 1.265-.64.53-.342.672-.454l.5-8.015q-.082-.048-.422-.235a5.4 5.4 0 0 0-.969-.375 6.2 6.2 0 0 0-1.406-.234c-1.312-.07-2.37.312-3.172 1.156-.793.844-1.234 2.04-1.328 3.578q-.093 1.455.328 2.688c.29.812.72 1.476 1.282 1.984.57.5 1.207.774 1.906.813M185.36 61.346q-1.675-.093-2.906-.984-1.236-.89-1.875-2.406-.628-1.53-.5-3.438.123-2.045 1.125-3.703c.664-1.102 1.532-1.945 2.594-2.531q1.605-.889 3.516-.782 1.638.111 2.89 1 1.248.892 1.875 2.422.621 1.536.516 3.422-.129 2.064-1.125 3.719-1.004 1.64-2.61 2.531-1.594.873-3.5.75m.891-1.375q1.64.111 2.688-1.172 1.06-1.278 1.187-3.547.105-1.732-.328-3.125-.44-1.388-1.344-2.203a3.44 3.44 0 0 0-2.11-.89c-1.093-.063-1.991.336-2.687 1.187q-1.047 1.285-1.187 3.594-.111 1.736.328 3.11.452 1.36 1.344 2.171a3.27 3.27 0 0 0 2.11.875M56.918 94.707q-.314-1.435-1.343-5.625-1.02-4.184-1.407-5.797-.422-1.465-1.859-1.578l-.031-.11.219-.952 2.343.172q1.108.081 2.11.046a65 65 0 0 1 1.312-.03l.063.14-.25.875q-.956-.029-1.313.125-.345.142-.375.547-.033.563.766 4.265.795 3.69 1.094 5l.125.016 1.968-4.234q1.078-2.184 1.563-3.344-.253-1.014-.688-1.5-.423-.498-1.281-.563l-.031-.109.219-.938 2.343.172c.719.043 1.414.063 2.094.063h1.328l.047.156-.219.875q-.986-.03-1.328.094a.54.54 0 0 0-.375.5c-.023.355.235 1.765.766 4.234.531 2.461.894 4.14 1.094 5.047h.125c.976-2.144 1.625-3.52 1.937-4.125a122 122 0 0 0 1.406-3.031c.375-.844.57-1.383.594-1.625q.013-.404-.25-.578c-.18-.114-.484-.18-.922-.203l-1.078-.063-.11-.203.22-.875q.262.018 1.046.094.78.081 1.828.14l2.407.11-.266 1.047q-.595.034-.969.437-.376.41-.968 1.656l-4.72 9.72-1.609.405-2.078-8.78-.187-.017-3.719 7.938ZM73.332 94.053q.855-.048 1.218-.375.359-.328.407-1.14l.937-15.548q.045-.797-.203-1.172-.235-.386-.781-.422l-.625-.046-.11-.079.172-.937q.998-.06 2.266-.219a26 26 0 0 0 2.11-.36l.155.407q-.22.283-.593 3.078c-.243 1.867-.48 4.164-.72 6.89q3.483-2.073 4.532-2.015 1.906.127 2.89 1.188c.657.699.946 1.64.876 2.828-.024.398-.14 1.293-.36 2.687q-.468 3.394-.515 4.203-.047.862.156 1.266.2.409.75.438l1.031.015.063.11-.313 1.25a86 86 0 0 0-2.593-.25c-.782-.055-1.793 0-3.032.156l.172-1.172q.903-.187 1.313-.61.406-.434.453-1.203l.531-5.765q.093-1.465-.5-2.297-.58-.825-1.75-.906-.737-.03-1.844.375a8 8 0 0 0-1.968 1.015 244 244 0 0 0-.532 7.094q-.047.907.157 1.281.216.375.812.422l1.031.016.047.11-.344 1.25c-1.343-.15-2.226-.231-2.64-.25a82 82 0 0 0-2.906-.126ZM98.701 97.079c-1.586-.094-2.406-.934-2.469-2.516l-.109-.031c-.75.656-1.43 1.172-2.031 1.547-.594.375-1.04.55-1.328.531q-1.629-.093-2.625-1.172-.985-1.09-.891-2.672c.031-.562.195-1.046.5-1.453q.467-.621 1.187-.781l5.641-1.203.11-1.281q.091-1.466-.532-2.328-.628-.855-1.86-.938-.813-.046-1.734.281a7.5 7.5 0 0 0-1.843.985l-.14-.11-.282-1.265a30 30 0 0 1 2.86-1.25q1.42-.545 2.03-.516 1.904.127 2.922 1.188 1.013 1.047.907 2.828c-.024.43-.141 1.304-.36 2.625q-.516 3.188-.562 4.062c-.032.43.05.766.25 1.016q.31.376.86.406.466.033.968-.156.5-.2.828-.453l.375.484a8 8 0 0 1-1.203 1.328q-.72.657-1.469.844m-5.312-2.422q.544.034 1.312-.312a5.6 5.6 0 0 0 1.422-.938l.328-2.969-4.047.969q-.862.206-.922 1.156-.046.844.485 1.453c.351.399.828.61 1.422.641M107.459 97.61q-1.97-.113-2.75-.97c-.512-.57-.73-1.5-.657-2.78l.438-7.188q.046-.797-.281-1.125-.33-.342-1.297-.438l-.11-.187.204-.844a11 11 0 0 0 1.703-.922q.843-.562 1.375-.984.545-.42.687-.547l.594.266a6 6 0 0 0-.14.703q-.094.563-.235 1.484l4.297.172.094.094-.36 1.515-4.25-.343a120 120 0 0 0-.64 7.312q-.094 1.47.375 2.125.48.644 1.734.719.434.033.875-.063.45-.092.75-.203a3 3 0 0 1 .406-.14l.235.78a21 21 0 0 1-.766.517q-.597.374-1.281.718-.674.358-1 .328M122.168 98.672q-.314-1.435-1.343-5.625-1.02-4.185-1.407-5.797-.422-1.466-1.859-1.578l-.031-.11.219-.953 2.343.172q1.108.082 2.11.047a65 65 0 0 1 1.312-.031l.063.14-.25.876q-.956-.029-1.313.125-.345.141-.375.546c-.023.375.235 1.797.766 4.266q.795 3.69 1.094 5l.125.016 1.968-4.235q1.078-2.184 1.563-3.343-.253-1.014-.688-1.5c-.28-.333-.71-.52-1.28-.563l-.032-.11.219-.937 2.343.172c.72.043 1.414.063 2.094.063h1.328l.047.156-.219.875q-.986-.03-1.328.094a.54.54 0 0 0-.375.5c-.023.355.235 1.765.766 4.234q.795 3.688 1.094 5.047h.125c.976-2.145 1.625-3.52 1.937-4.125a122 122 0 0 0 1.406-3.031c.375-.844.57-1.383.594-1.625q.013-.403-.25-.579c-.18-.113-.484-.18-.922-.203l-1.078-.062-.11-.203.22-.875q.262.017 1.046.093.78.082 1.828.141l2.407.11-.266 1.046q-.596.035-.969.438-.376.409-.968 1.656l-4.72 9.719-1.609.406-2.078-8.781-.187-.016-3.719 7.938ZM144.66 99.877q-1.815-.11-3.172-1a5.56 5.56 0 0 1-2.031-2.407q-.675-1.529-.547-3.421a7.8 7.8 0 0 1 1.11-3.625q1.013-1.67 2.562-2.594 1.545-.937 3.25-.844 2.121.128 3.172 1.281 1.043 1.143.921 3.22c-.03.573-.117 1.046-.25 1.421l-.421.344-8.063-.485c-.137 1.875.145 3.352.844 4.422q1.06 1.593 3.14 1.735 1.639.093 3.641-.704l.172.079.266.859a15 15 0 0 1-2.422 1.234q-1.3.53-2.172.485m2.031-9.14q.435-.029.594-.157.152-.14.187-.578.06-1.172-.531-1.828c-.398-.438-.984-.68-1.766-.735q-1.375-.075-2.406.797-1.032.88-1.375 2.438ZM169.49 101.383q-2.267-.142-2.454-2.234l-.218-.094c-2.118 1.258-3.375 1.879-3.782 1.86q-1.676-.095-2.906-.938c-.824-.57-1.445-1.344-1.86-2.313q-.608-1.45-.5-3.265.125-2.076 1.22-3.766a7.66 7.66 0 0 1 2.828-2.625 6.9 6.9 0 0 1 3.703-.828c.625.043 1.289.125 2 .25l.297-4.86q.093-1.575-.985-1.64a2.4 2.4 0 0 0-.437.016 1 1 0 0 0-.297.046l.187-1.062q1.267-.093 2.625-.297 1.371-.215 1.735-.297l.156.406q-.346.47-.937 6.125-.581 5.661-.97 12.047-.046.643.25 1.016.296.361.86.406.405.02.797-.11.405-.138.656-.296.263-.171.344-.219l.375.5c-.062.094-.227.297-.484.61-.25.304-.578.613-.985.937q-.597.498-1.218.625m-5.875-2.344c.406.024.851-.066 1.343-.265q.75-.312 1.266-.64c.351-.227.578-.38.672-.454l.5-8.016-.422-.234a5.4 5.4 0 0 0-.969-.375 6.2 6.2 0 0 0-1.406-.234c-1.313-.07-2.371.312-3.172 1.156q-1.188 1.268-1.328 3.578-.094 1.455.328 2.687.436 1.221 1.281 1.985.856.752 1.907.812M178.76 101.946q-1.677-.094-2.907-.984-1.237-.89-1.875-2.407-.628-1.529-.5-3.437.123-2.045 1.125-3.703.998-1.653 2.594-2.532 1.605-.888 3.515-.78 1.639.108 2.891 1 1.248.891 1.875 2.421.621 1.535.516 3.422-.129 2.064-1.125 3.719-1.003 1.64-2.61 2.53-1.594.874-3.5.75m.89-1.375q1.64.112 2.687-1.172 1.06-1.278 1.188-3.547c.07-1.156-.04-2.195-.328-3.125q-.44-1.389-1.344-2.203a3.44 3.44 0 0 0-2.11-.89c-1.093-.063-1.992.335-2.687 1.187q-1.049 1.284-1.187 3.594-.112 1.736.328 3.109c.3.906.75 1.633 1.343 2.172a3.27 3.27 0 0 0 2.11.875M190.124 96.346l-.485-3.547.11-.422 3.61-2.016q1.733-1.013 1.827-2.39c.063-1.157-.418-2.07-1.437-2.75q-1.517-1.013-4.282-1.328l-.03-.329 1.062-1.5.422-.093q1.763.174 3.234.922c.977.492 1.738 1.109 2.281 1.859q.81 1.127.735 2.453c-.055.836-.266 1.543-.641 2.125a5.3 5.3 0 0 1-1.297 1.438q-.751.55-2.047 1.265-.844.487-1.25.735l-.094.265.438 2.828-.078.22-1.813.39Zm.656 6.328q-.798-.048-1.203-.547-.392-.499-.344-1.203a1.83 1.83 0 0 1 .578-1.266q.53-.499 1.328-.453c.532.031.93.219 1.203.563.27.336.395.734.375 1.203q-.047.768-.593 1.25-.549.499-1.344.453m0 0"></path>
                    </g>
                  </svg>
                </div>
                {/* 2 */}
                <div className="h-[200px] w-[200px] rounded-3xl border-2 border-[#81b219]"></div>
                <div>arrow</div>
                <div className="h-[200px] w-[200px] rounded-3xl border-2 border-[#81b219]"></div>
                <div>arrow</div>
                <div className="h-[200px] w-[200px] rounded-3xl border-2 border-[#81b219]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-background relative w-[90%] lg:max-w-6xl mx-auto max-md:m-0 max-md:w-full">
        <div className="container mx-auto">
          {/* Image with BG Design */}
          {/* <div className="flex flex-col items-center">
            <div className="bottom-background__img w-full">
              <img
                loading="lazy"
                src={peoplenew}
                alt="People"
                className="w-full lg:-[200px] h-full object-cover"
              />
            </div>
            <div className="bottom-background__img">
              <img
                loading="lazy"
                src={yellowbgnew1}
                alt="Yellow Background gai"
                className="w-full h-[50px] lg:h-[130px] object-cover"
              />
            </div>
          </div> */}

          {/* Programs */}
          <div className=" -mt-10 lg:-mt-20 flex gap-7 flex-wrap lg:flex-nowrap ">
            <div className="flex flex-wrap justify-center gap-16 m-auto mt-28 ">
              {programs?.map((card, index) => (
                <HashLink
                  smooth
                  key={card?.title}
                  to={`/programs#${card.section}`}
                  className="flex flex-col justify-center items-center  w-[80%] tab:w-[40%] lg:w-[29%] relative group hover:cursor-pointer"
                >
                  <div className="relative w-full">
                    <img
                      loading="lazy"
                      src={textBorder}
                      alt={`Card ${index + 1}`}
                      className="w-full"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                      <h2 className="text-4xl  font-bold mb-2 ">
                        {card?.title}
                      </h2>
                      <p className="text-black font-medium text-lg sm:text-sm md:text-base lg:text-lg px-2">
                        {card?.description}
                      </p>
                    </div>
                  </div>
                  <div className="py-2 text-lg  mt-8 border border-black border-1 px-8 rounded-full group-hover:bg-neutral-700/15 transition-colors">
                    Read More
                  </div>
                </HashLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-us py-16 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap md:flex-nowrap  items-start md:justify-between justify-center gap-5 md:gap-0">
            <div className="hidden lg:block lg:w-1/12"></div>
            <div className="flex items-center justify-center w-auto shadow-md rounded-md overflow-hidden">
              <video
                preload="none"
                controls
                className="max-w-xs lg:max-w-xl h-[400px]  "
                poster={intro}
              >
                <source type="video/mp4" src={video} />
              </video>
            </div>

            <div className="lg:w-4/12 xl:w-6/12  flex items-center flex-col h-full ">
              <div className=" flex">
                <LazyLoadImage
                  src={design}
                  alt="Design"
                  effect="blur"
                  className="w-[300px] m-auto"
                  placeholder={<BlurryImages imgUrl="Home/design-small.png" />}
                />
              </div>

              <div className="lg:mb-6 mb-6">
                <div className="counter-item flex flex-col gap-2 text-center">
                  <div className="counter-item__lower">
                    <span
                      ref={counterOne}
                      className="js-counter text-6xl font-bold"
                      data-target="3346"
                    >
                      {num1}
                    </span>
                  </div>
                  <div className="counter-item__top ml-10">
                    <h6 className="counter-item__title text-lg text-center">
                      Professionals Trained
                    </h6>
                  </div>
                </div>
              </div>

              <div className="text-center flex flex-col mt-6">
                <div className="counter-item counter-item--style-1">
                  <div className="counter-item__lower ml-10">
                    <span
                      ref={counterTwo}
                      className="js-counter text-6xl font-bold"
                      data-target="100844"
                    >
                      {num2}
                    </span>
                  </div>
                  <div className="counter-item__top">
                    <h6 className="counter-item__title text-lg">
                      Lives Impacted
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section elements bg-[#c1e477] relative h-[60px] sm:h-[80px] lg:h-[120px] ">
        <div className="row  flex h-full items-center">
          <div className="ml-4  lg:ml-16 ">
            <h2 className="text-5xl max-md:text-2xl lg:mt-0 font-semibold">
              <span className="letter-spacing">Why we do what we do?</span>
            </h2>
          </div>
        </div>
      </section>

      <AboutUsCarousel className="max-w-xl border" />

      <section className="section elements bg-[#c1e477] h-[60px] sm:h-[80px] lg:h-[120px] relative">
        <div className="flex h-full items-center">
          <div className="ml-4  lg:ml-16">
            <h2 className="text-5xl max-md:text-2xl lg:mt-0 font-medium">
              <span className="letter-spacing">Clients & Partners</span>
            </h2>
          </div>
        </div>
      </section>

      <ClientCarousel />
      <Testimonials />
    </div>
  );
};

export default Home;
