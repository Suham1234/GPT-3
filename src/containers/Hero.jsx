import React from "react";
import ai from "../assets/ai.png";
import people from "../assets/people.png"

const Hero = () => {
  return (
    <div className="flex tablet:flex-row flex-col bg-transparent justify-center items-center" id="home">
      <div className="flex-[1]">
        <h1 className="text-gradient font-manrope font-bold sm:text-[62px] sm:leading-[75px] text-[52px] leading-[65px] mb-8 tablet:mt-28 mt-40">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-dimBlue mb-10 text-[18px]">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="flex w-full ">
          <input
            type="email"
            className="py-4  w-full w-max-[300px] overflow-hidden pl-4 border-0 outline-none rounded-l-md text-dimWhite bg-input flex-[2] min-h-[50px] "
            placeholder="Your Email Address"
          />
          <button className="bg-orange px-4 py-4 rounded-r-md  font-manrope text-white font-bold outline-none border-0 flex-[0.6] ">
            Get Started
          </button>
        </div>
        <div className="flex xs:flex-row flex-col items-center mt-10 space-x-6 xs:space-y-0 space-y-4 ">
          <img src={people} alt="people" />
          <p className="text-white font-manrope font-sm font-medium">1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="flex-[0.75] items-start">
        <img
          src={ai}
          alt="ai"
          className="w-[670px] h-[700px] min-w-[450px] object-contain tablet:mt-28"
        />
      </div>
    </div>
  );
};

export default Hero;
