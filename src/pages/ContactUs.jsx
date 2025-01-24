import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from '../components/BlurryImages';
const team = `${import.meta.env.VITE_PUBLIC_URL}/Home/team2.png`;
import { sendMessage, sendAccountDetails, sendNeeds } from '../components/Api';






import bg from '../imgs/program-images/contactUsBg.png';
import contactUsGirl from '../imgs/program-images/contactUsGirl.png';
import contactUsBoy from "../imgs/program-images/contactUsBoy.png";
import contactUsFamily from "../imgs/program-images/contactUsFamily.png";




const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    AccountDetails: "",
    need: "",
    nameneeds: "",
    emailneeds:""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = async (e, apiFunction) => {
    e.preventDefault();
    try {
      // console.log(formData)
      const response = await apiFunction(formData);
      console.log(response);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        AccountDetails: "",
        need: "",
        nameneeds: "",
    emailneeds:""
      });
      
    } catch (error) {
      alert("Error submitting the form. Please try again.");
      console.error(error);
    }
    
  }

  return (
    
    <>
      <section className='h-[100vh]'>
         <div  className="bg-no-repeat bg-cover bg-center h-[100%]  "
          style={{ backgroundImage: `url(${bg})` }}>
          <div className='h-[100%] w-[100%] bg-white bg-opacity-25 flex justify-center items-center'>
            
            <h1 className='text-[54px] font-bold text-black bg-[#515154] bg-opacity-30 text-center px-10 py-10 rounded-lg'>Join our 
            network of compassion</h1>
            
          </div>
          </div>
        
      </section>
      

      {/* ----------------------------------------- */}
    <section>
 
      

    {/* Be an Agent of Change! */}

      {/* Main Flex Container  */}
      <div className="flex flex-col sm:flex-row items-stretch  sm:gap-8 gap-4 bg-white ">
  {/* Left Section - Image */}
  <div className="flex w-full sm:w-1/3 bg-cover bg-center bg-no-repeat h-[1000px] " style={{backgroundImage:`url(${contactUsGirl})`}}>
    {/* <img
      src={contactUsGirl}
      alt="Illustration"
      className="w-full h-[50vh] sm:h-auto object-cover rounded-lg"
    /> */}
            
  </div>

  {/* Right Section - Form */}
  <div className="w-full sm:w-2/3 p-4 sm:p-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
      Be an Agent of Change!
    </h1>
    <p className="text-sm lg:text-xl sm:text-base text-gray-700 mb-6 leading-relaxed">
      In a country like ours, there can never be too many mental health
      professionals, especially those working with people coming from
      marginalised sections of society. Join us in the capacity of a
      volunteer/intern/full-time member to be an agent of change in someone's
      life.
    </p>
    <form className="flex flex-col gap-4 border-2 border-black p-6 sm:p-10 rounded-lg" onSubmit={(e) => handleSubmit(e, sendMessage)}>
      {/* Name Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
              required
          placeholder="Name"
          className="w-full h-12 px-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
          className="w-full h-12 px-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Contact Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1" htmlFor="contact">
          Contact:
        </label>
        <input
          id="phone"
                  type="tel"
                  value={formData.phone}
              onChange={handleInputChange}
                  placeholder="Contact"
                  required
          className="w-full h-12 px-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message Input */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1" htmlFor="message">
          Message:
        </label>
        <textarea
                  id="message"
                  value={formData.message}
                  required
              onChange={handleInputChange}

          rows="4"
          placeholder="Message"
          className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="self-center px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        Send
      </button>
    </form>
  </div>
</div>

{/* Contribute to Break The Cycle */}
        
<div className="flex flex-col sm:flex-row items-stretch sm:gap-8 gap-4 bg-white">
  {/* Left Section - Text Content */}
  <div className="w-full sm:w-2/3 p-4 sm:p-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
      Contribute to Break The Cycle
    </h1>
    <p className="text-sm lg:text-xl:text-base sm:text-lg text-gray-700 mb-6 leading-relaxed mt-[8%] xxxl:mt-[4%]" >
      It’s more about the impact, than the numbers. Connecting with even a
      single individual helps in breaking the cycle of intergenerational trauma
      for the entire community. Contribute as little as Rs. 500 to support an
      individual gain access to support through our trauma-informed initiatives.
    </p>
    {/* Account Details Box */}
    <div className="flex flex-col p-10 ">
        
              
              <form onSubmit={(e) => handleSubmit(e, sendAccountDetails)}>
          <textarea
            id="AccountDetails"
                  rows="6"
                  required
            value={formData.AccountDetails}
            onChange={handleInputChange}
                  placeholder="Account Details:"
                  className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button type="submit" className="self-center  px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300">Submit Account Details</button>
        </form>
      </div>
            
           
    {/* Note Section */}
    <p className="text-xl text-gray-600 mt-[4%]">
      Note: All donations are subject to tax exemptions under Section 80G of the
      Income Tax Act.
    </p>
  </div>

  {/* Right Section - Image */}
  <div
    className="flex w-full sm:w-1/3 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${contactUsBoy})`,
    }}
  ></div>
</div>
        
{/* Join Hands with Us */}
        
<div className="flex flex-col sm:flex-row items-stretch  sm:gap-8 gap-4 bg-white ">
  {/* Left Section - Image */}
  <div className="flex w-full sm:w-1/3 bg-cover bg-center bg-no-repeat h-[1000px] " style={{backgroundImage:`url(${contactUsFamily})`}}>
    {/* <img
      src={contactUsGirl}
      alt="Illustration"
      className="w-full h-[50vh] sm:h-auto object-cover rounded-lg"
    /> */}
            
  </div>

  {/* Right Section - Form */}
  <div className="w-full sm:w-2/3 p-4 sm:p-8">
    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
    Join Hands with Us
    </h1>
    <p className="text-sm lg:text-xl sm:text-base text-gray-700 mb-6 leading-relaxed">
    Change happens in collaboration, not isolation. Whether you are a corporate organization or a not-for-profit foundation, a school or an institution, a hospital or a government office, join us so we can add to the level of  impact in your community. We are equipped to offer specialised support to humans from all walks of life, from corporate trainings to SEL modules, from individual to group interventions. 
    </p>
    <form
  className="flex flex-col gap-4 border-2 border-black p-6 sm:p-10 rounded-lg"
  onSubmit={(e) => handleSubmit(e, sendNeeds)}
>
  {/* Name Input */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1" htmlFor="nameneeds">
      Name:
    </label>
                <input
                   required
      id="nameneeds"
      type="text"
      value={formData.nameneeds}
      onChange={handleInputChange}
      placeholder="Name"
      className="w-full h-12 px-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Email Input */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1" htmlFor="emailneeds">
      Email:
    </label>
                <input
                   required
      id="emailneeds"
      type="email"
      value={formData.emailneeds}
      onChange={handleInputChange}
      placeholder="Email"
      className="w-full h-12 px-4 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Needs Input */}
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1" htmlFor="need">
      Organisation and its needs:
    </label>
                <textarea
                   required
      id="need"
      rows="4"
      value={formData.need}
      onChange={handleInputChange}
      placeholder="Organisation and its needs"
      className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="self-center px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300"
  >
    Send
  </button>
</form>

  </div>
</div>



     {/* Collaboration Section */}
     <div className="text-center mt-8 px-4 md:px-8 mb-12">
       <h1 className="text-base xs:text-lg sm:text-xl md:text-3xl font-semibold ">
         For collaboration, write to us at{' '}
         <span className="font-bold ">info@iamwellbeing.in</span>
       </h1>
     </div>
    </section>
   </>
  );
};

export default ContactUs;
