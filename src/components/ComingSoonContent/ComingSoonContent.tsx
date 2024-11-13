import React from "react";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <>
      <div className="relative flex flex-col place-items-center ">
        <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#083831] to-[#14b8a6]">
            {title}
          </span>
        </h2>
        <p
          className="max-w-3xl px-6 m-5 text-2xl font-thin text-center md:text-3xl text-slate-800 dark:text-slate-100"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      </div>
    </>
  );
}

export default ComingSoonContent;
