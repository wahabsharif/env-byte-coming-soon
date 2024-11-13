import React from "react";
import data from "../../../data/data";

function Footer() {
  const { copyrightText } = data;

  return (
    <>
      <footer className="text-center text-slate-500">
        <div className="">
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: copyrightText,
            }}
          ></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
