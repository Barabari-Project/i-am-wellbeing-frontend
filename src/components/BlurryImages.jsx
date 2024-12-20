import React from 'react'
import work1 from "../imgs/home-images/work_1.png"
const url = `${import.meta.env.VITE_PUBLIC_URL}/imgs-20/`

const BlurryImages = ({imgUrl}) => {
    console.log(imgUrl)
  return (
      <div>
           <img src={`${url}${imgUrl}`} />
   </div>
   
  )
}

export default BlurryImages
