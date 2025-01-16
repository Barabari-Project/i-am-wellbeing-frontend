import React from 'react';

import animationimage1 from "../imgs/program-images/animationimages1.gif"

import animationimage3 from "../imgs/program-images/animationimages3.gif"
import animationimage4 from "../imgs/program-images/animationimages4.gif"
import animationimage5 from "../imgs/program-images/animationimages5.gif"
import animationimage6 from "../imgs/program-images/animationimages6.gif"
import animation1 from "../imgs/program-images/animation1.gif"
import animationimage8 from "../imgs/program-images/animationimages8.webp"

const WalkingPerson = () => {
  return (
    <div className='flex'>
    <img src={animationimage1} alt="Character" style={{ width: '150px' }} />
      <img src={animationimage3} alt="Character" style={{ width: '150px' }} />
      <img src={animationimage4} alt="Character" style={{ width: '150px' }} />
      <img src={animationimage5} alt="Character" style={{ width: '150px' }} />
      
      <img src={animationimage6} alt="Character" style={{ width: '150px' }} />
      <img src={animation1} alt="Character" style={{ width: '150px' }} />

      <img src={animationimage8} alt="Character" style={{ width: '150px' }} />
      {/* <img src={animation1} alt="Character" style={{ width: '150px' }} /> */}
    </div>
    
);
  
}

export default WalkingPerson
