import React, { useState } from 'react'

const Faq = () => {
    const [questions , setQuestions] = useState([
        {ques : "Is attendance compulsory for all classes?" , answer : "Yes, full attendance is compulsory to receive the certificate."},        
        {ques : "What is the modality and duration of the course?" , answer : "The course will be held online via Zoom on Saturdays and Sundays 10 am to 12 pm. Duration: 6 months (2 months of classes and 4 months of supervision)"},
        {ques : "What is the TICP course?" , answer : "Trauma-Informed Care Practices Certificate Course is a 62 hours course on trauma-informed care and healing. The coursework intends to build a trauma- informed task force of mental health professionals."},
        {ques : "How will the supervision sessions be conducted?" , answer : "Supervision will be conducted in small groups of two to four participants with one supervisor. Each session will be conducted for 90 minutes, fortnightly, with the respective supervisor.."},
        {ques : "How much fees will one have to pay on receiving the scholarship?" , answer : "If you meet the criteria for the scholarship, 50% of your total course fees will be waived off."},
        {ques : "What is the refund policy?" , answer : "If the participant wants to withdraw before the course begins, 50% of the course fee shall be returned upon connecting with the organisation 15 days before the course commencement."},
    ])

    const [openIndex , setOpenIndex] = useState(null);

     const handleToggle = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };

    return (
     <div className='bg-yellow-300  mt-10 pb-6 mb-1  pt-2 pr-2 lg:pl-2'>
       <h1 className='text-4xl font-bold m-4 mb-0'>FAQ:</h1>
       <div className="grid lg:grid-cols-2 items-start justify-center gap-5 lg:gap-10 p-4 ">
       {questions.map((question , index) => {
         return (
           <div
             className={`border-2 bg-white rounded-[30px]  relative  transition-all overflow-hidden duration-300 p-8  lg:px-8`}
             key={question.ques}
           >
             <div className='flex overflow-hidden   items-center  justify-between'>
               <h1 className='sm:text-xl text-sm  max-w-fit lg:text-lg font-bold m-0 lg:tracking-tight'>
                 {question.ques}
               </h1>
               <div
                 onClick={() => handleToggle(index)}
                 className={`text-2xl item  size-[30px]  lg:size-[40px]  flex items-center overflow-hidden justify-center cursor-pointer font-[600] border rounded-full border-yellow-500 transition-transform `}
               >
                 {openIndex === index ? "-" : "+"}
               </div>
             </div>

             <div
               className={`overflow-hidden transition-all duration-300 ${
                 openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
               }`}
             >
               <p className='text-md text-[#444]'>{question.answer}</p>
             </div>
           </div>
         );
       })}
     </div>
     </div>
  )
}

export default Faq