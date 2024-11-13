import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitetagline } = data;
  return (
    <>
      <section className="container p-4 mx-auto text-center">
        <Navigation />
      </section>
      <header className="z-10 items-center justify-between w-full max-w-5xl text-sm ">
        <div className="bottom-0 left-0 flex items-end justify-center w-full h-30 md:h-48 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex flex-col text-center">
            <h1 className="m-2 text-xl font-xl text-slate-800 dark:text-slate-100">
              {sitetagline}
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
