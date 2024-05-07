import React from "react";
import BlogCard from "../components/BlogCard";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";

const data = [
  {
    image: blog02,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog03,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog04,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    image: blog05,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => {
  return (
    <section className="flex flex-col mb-20" id="blog">
      <div className=" mb-10 ">
        <h1 className="text-gradient font-bold text-[40px] max-w-[600px] leading-[50px]">A lot is happening, We are blogging about it.</h1>
      </div>

      <div className="flex tablet:flex-row flex-col ">
        <div className="flex-[0.75] p-2">
          <BlogCard image={blog01} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" className="tablet:mt-52" />
        </div>

        <div className=" flex-1 grid xs:grid-cols-2 grid-cols-1 gap-6  p-2">
          {data.map((item, index)=>(
            <BlogCard title={item.title} image={item.image} /> 
          ))}
        </div>
      </div>

    </section>
  );
};

export default Blog;
