import React, { useState } from "react";

const Question = () => {
  const faqs = [
    {
      question: "Why SteadFast Courier?",
      answer:
        "SteadFast Courier stands out for its commitment to delivering parcels nationwide on time and without any hassle. We pride ourselves on offering fast payment, easy tracking, a dedicated customer service team, and ensuring the safe delivery of your parcels.",
    },
    {
      question: "What is the coverage area of SteadFast Courier?",
      answer:
        "StadFast Courier extends its services across 8 divisions, 495 Upazilas, and 330 Municipal Corporations. Click here for a comprehensive list of detailed service locations.",
    },
    {
      question: "What services does SteadFast Courier provide?",
      answer:
        "Revel in the excellence of E-commerce delivery, pick-and-drop, cutting-edge warehousing, entrust your goods to our state-of-the-art warehousing, and witness perfection in packaging solutions.",
    },
    {
      question: "Want to know about your delivery charges?",
      answer:
        "Discover our delivery charges, which are determined by the weight of a 1 kg parcel: Inside Dhaka: 70, Dhaka Suburban: 100, Outside Dhaka: 130. For a more detailed breakdown, utilize our Price Calculation Option by clicking here.",
    },
  ];

  // Set initial openIndex to 0, so the first answer is always shown by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the accordion
  };

  return (
    <div className="py-20 border-b border-gray-400">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-pops capitalize flex justify-center font-semibold pb-10">
          Frequently Asked Questions
        </h2>
        <div className="w-[900px] mx-auto border-2 border-gray-400">
          {faqs.map((faq, index) => (
            <div className="p-5 border-b-2 border-gray-400" key={index}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-[30px] font-semibold font-pops pb-5">
                  {faq.question}
                </h3>
                <span className="text-[35px] font-semibold text-[#00b795]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-[20px] font-pops font-medium">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#00b795] py-20 rounded-lg mt-28">
        <div className="container mx-auto">
          <h2 className="text-center text-[40px] text-white font-semibold">
            Grow Your Business with SteadFast
          </h2>
          <p className="text-center text-[25px] text-white font-semibold pb-10">
            Start Your first step with SteadFast
          </p>
          <div className="flex justify-center">
            <a
              className="text-[20px] font-pops font-normal bg-[#fff] px-10 py-4 rounded-md text-black capitalize"
              href="#"
            >
              become a merchant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
