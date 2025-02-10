import React from "react";

import animationimage1 from "../imgs/program-images/gif-1.gif";
import animationimage2 from "../imgs/program-images/imm3.gif";
import animationimage3 from "../imgs/program-images/gif-3.gif";
import animationimage4 from "../imgs/program-images/gif-4.gif";
import animationimage5 from "../imgs/program-images/gif-8.gif";
import animation6 from "../imgs/program-images/gif-7.gif";
import animationimage7 from "../imgs/program-images/git9.gif";

const WalkingPerson = () => {
  return (
    <div className="flex pt-8 ">
      <img
        src={animationimage1}
        alt="Character"
        className="w-[14%] h-[50%] mt-[9%] object-cover"
      />
      <img
        src={animationimage2}
        alt="Character"
        className="w-[14%]  mt-[6%] object-cover"
      />
      <img
        src={animationimage3}
        alt="Character"
        className="w-[14%] mt-[2%] object-cover"
      />
      <img
        src={animationimage4}
        alt="Character"
        className="w-[14%]  object-cover"
      />
      <img src={animationimage5} alt="Character" className="w-[14%] object-cover " />

      <img src={animation6} alt="Character" className="w-[14%] mb-[2%] " />

      <img src={animationimage7} alt="Character" className="w-[14%] mb-[2%] object-cover " />
      {/* <img src={animation1} alt="Character" style={{ width: '150px' }} /> */}
    </div>
  );
};

export default WalkingPerson;
