import React from "react";
import Card from "../components/Card";

const data = [
  {
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
]

const Features = () => {
  return (
    <section className="flex sm:flex-row flex-col max-sm:space-y-10 mt-40" id="features">

      <div className="flex-1 mr-10 ">
        <h1 className="text-gradient text-[34px] mt-4 mb-8 font-manrope max-xs:leading-[48px]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-textPink text-lg font-manrope">Request Early Access to Get Started</p>
      </div>

      <div className="flex-1 ">
        {data.map((item, index)=>(
          <Card title={item.title} text={item.text} className="flex items-start text-dimBlue space-x-6" textStyle="text-dimBlue" />
        ))}
      </div>

    </section>
  );
};

export default Features;
