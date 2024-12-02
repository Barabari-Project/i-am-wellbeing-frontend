import React from 'react'

const Model = ({isOpen , setIsOpen , selectedTeamMember}) => {
  return (
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
  );
}

export default Model