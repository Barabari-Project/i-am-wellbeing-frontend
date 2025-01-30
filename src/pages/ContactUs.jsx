import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BlurryImages from "../components/BlurryImages";
const team = `${import.meta.env.VITE_PUBLIC_URL}/Home/team2.png`;
import { sendMessage, sendAccountDetails, sendNeeds } from "../components/Api";

import bg from "../imgs/program-images/contactUsBg.png";
import contactUsGirl from "../imgs/program-images/contactUsGirl.png";
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
    emailneeds: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

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
        emailneeds: "",
      });
    } catch (error) {
      alert("Error submitting the form. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <section className="h-[100vh]">
        <div
          className="bg-no-repeat bg-cover bg-center h-[100%]  "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="h-[100%] w-[100%] bg-white bg-opacity-25 flex justify-center items-center">
            <h1 className="text-5xl font-bold text-black bg-[#515154] bg-opacity-30 text-center px-10 py-10 rounded-lg max-md:text-4xl">
              Join our network of compassion
            </h1>
          </div>
        </div>
      </section>

      {/* ----------------------------------------- */}
      <section>
        {/* Be an Agent of Change! */}

        {/* Main Flex Container  */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 items-center">
            {/* Image */}
            <div
              className="bg-cover bg-center rounded-lg h-80 sm:h-full max-md:bg-no-repeat max-md:bg-cover max-sm:bg-positionSmall"
              style={{ backgroundImage: `url(${contactUsGirl})` }}
            ></div>

            {/* Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 max-md:text-center">
                Be an Agent of Change!
              </h2>
              <p className="text-gray-600 mb-8 max-md:text-justify text-xl max-md:text-lg">
                Join us as a volunteer, intern, or full-time member to make a
                difference in someone’s life. Your contribution matters.
              </p>
              <form
                className="space-y-6 border-[2px] border-[#029390] rounded-xl p-10"
                onSubmit={(e) => handleSubmit(e, sendMessage)}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#bfe769] placeholder:text-[#8db538] text-white font-semibold rounded-lg hover:bg-[#aae230] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contribute to Break The Cycle */}

        {/* Contribution Section */}
        <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">
    {/* Text Content (Left side on medium screens) */}
    <div className="lg:order-1">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 max-md:text-center">
        Contribute to Break The Cycle
      </h2>
      <p className="text-gray-600 mb-8 max-md:text-justify text-xl max-md:text-lg">
        Supporting an individual helps break the cycle of trauma for
        entire communities. Contribute as little as Rs. 500 to support
        someone in need.
      </p>
      <form
        className="space-y-6"
        onSubmit={(e) => handleSubmit(e, sendAccountDetails)}
      >
        <textarea
          id="AccountDetails"
          value={formData.AccountDetails}
          onChange={handleInputChange}
          placeholder="Enter Account Details"
          className="w-full px-4 py-2 border rounded-lg focus:ring-[#bfe769] focus:outline-none focus:ring-1"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-[#bfe769] text-white font-semibold rounded-lg hover:bg-[#aae230] transition duration-300"
        >
          Submit Details
        </button>
      </form>
      <p className="text-gray-500 text-lg mt-4 max-md:text-base">
        Note: Donations are tax-exempt under Section 80G of the Income
        Tax Act.
      </p>
    </div>

    {/* Image (Right side on medium screens) */}
    <div
      className="bg-cover bg-center rounded-lg h-80 sm:h-full md:h-[450px] lg:h-full max-md:bg-no-repeat max-md:bg-positionSmall lg:order-2"
      style={{ backgroundImage: `url(${contactUsBoy})` }}
    ></div>
  </div>
</section>


        {/* Join Hands Section */}
        <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 items-stretch">
  {/* Image */}
  <div
              className="bg-cover bg-center rounded-lg h-80 sm:h-full max-md:bg-no-repeat max-md:bg-cover max-sm:bg-positionSmall"
              style={{ backgroundImage: `url(${contactUsFamily})` }}
  ></div>

  {/* Form */}
  <div className="p-6 lg:p-10 rounded-lg max-md:w-full max-md:p-0">
    <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
      Join Hands with Us
    </h1>
    <p className="text-xl text-gray-600 mb-6 leading-relaxed max-md:text-justify max-md:text-lg">
      Change happens in collaboration, not isolation. Whether you are a
      corporate organization or a not-for-profit foundation, join us
      to increase impact in your community.
    </p>
    <form
      className="space-y-6 border-[2px] border-[#029390] rounded-xl p-10"
      onSubmit={(e) => handleSubmit(e, sendNeeds)}
    >
      <div>
        <label
          htmlFor="nameneeds"
          className="block text-lg font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="nameneeds"
          type="text"
          value={formData.nameneeds}
          onChange={handleInputChange}
          placeholder="Name"
          className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
          required
        />
      </div>
      <div>
        <label
          htmlFor="emailneeds"
          className="block text-lg font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="emailneeds"
          type="email"
          value={formData.emailneeds}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
          required
        />
      </div>
      <div>
        <label
          htmlFor="need"
          className="block text-lg font-medium text-gray-700"
        >
          What are your needs?
        </label>
        <textarea
          id="need"
          value={formData.need}
          onChange={handleInputChange}
          placeholder="Describe your needs"
          className="w-full px-4 py-2 border border-[#bfe769] placeholder:text-[#8db538] rounded-lg focus:ring-1 focus:ring-[#bfe769] focus:outline-none focus:border-[#bfe769]"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit Needs
      </button>
    </form>
  </div>
</div>

        </section>
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
