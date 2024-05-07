import React from "react";
import Card from "../components/Card";

const data = [
  {
    title: "Chatbots",
    text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
  },
  {
    title: "Knowledgebase",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  },
  {
    title: "Education",
    text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
  }
]

const WhatGpt3 = () => {
  return (
    <section className="bg-cyan-gradient p-10 rounded-lg my-20" id="wgpt-3">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center mb-16 sm:space-x-10">
        <div className="flex-1">
          <Card title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        </div>
        <p className="flex-[2] text-white font-manrope text-lg leading-6">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col max-sm:space-y-6 justify-between items-start mb-16">
        <h1 className="text-gradient font-manrope font-bold text-[30px] flex-1 max-sm:leading-10">The possibilities are beyond your imagination</h1>
        <p className="flex-1 items-end justify-end flex text-textPink text-lg font-medium">Explore The Library</p>
      </div>
      <div className="flex justify-between tablet:space-x-8 space-x-0 tablet:flex-row flex-col">
        {data.map((item, index)=>(
          <Card title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default WhatGpt3;
