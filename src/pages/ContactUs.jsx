import React from 'react';

const team = `${import.meta.env.VITE_PUBLIC_URL}/Home/team2.png`;

const ContactUs = () => {
  return (
    <div className="px-[3%] pt-[22%] sm:pt-8 border-2 ">
       {/* Main Flex Container  */}
      <div className="flex flex-col xs:flex-row gap-4 xs:gap-8 pt-10 ">
        {/* Left Section - Image */}
        <div className="hidden xs:flex xs:flex-1 lg:flex-[2] justify-center">
          <img loading="lazy"
            src={team}
            alt="teams"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 w-full ">
          <h1 className="text-3xl font-bold leading-9 ">
            Be a part of our network of compassion
          </h1>
          <p className="text-sm text-black mt-2 mb-6">* The following info is required</p>
          <form
            action="/submit"
            className="flex flex-col gap-8 mt-4 text-gray-800 font-extrabold"
          >
            {/* Input Fields */}
            <input
              type="text"
              placeholder="First Name*"
              className="h-12 outline-none border-2 border-gray-100 rounded-full px-10 py-2 w-full bg-gray-100 transition duration-300 focus:bg-slate-300 md:w-1/2 lg:w-1/2"
            />
            <input
              type="email"
              placeholder="Email*"
              className="h-12 py-2 outline-none border-2 border-gray-100 rounded-full px-10 w-full bg-gray-100 transition duration-300 focus:bg-slate-300 md:w-1/2 lg:w-1/2"
            />
            <input
              type="number"
              placeholder="Phone"
              className="h-12 py-2 outline-none border-2 border-gray-100 rounded-full px-10 w-full bg-gray-100 transition duration-300 focus:bg-slate-300 md:w-1/2 lg:w-1/2"
            />
            <textarea
              cols={3}
              rows={5}
              placeholder="Message"
              className="outline-none  border-2 border-gray-100 rounded-lg px-10 py-4 w-full bg-gray-100 transition duration-300 focus:bg-slate-300 md:w-1/2 lg:w-1/2"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-sm font-bold py-3 md:px-10 text-center rounded-full border-2 border-yellow-400 w-1/2 lg:w-1/2 bg-transparent hover:bg-yellow-400 transition-all duration-300 mx-auto lg:mx-0"
            >
              SEND MESSAGE
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
    </div>
  );
};

export default ContactUs;
