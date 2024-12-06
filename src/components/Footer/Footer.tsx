import React from "react";
import data from "../../../data/data";
import Link from "next/link";
import Image from "next/image";
import InnovatedByLogo from "@/assets/logo/wahab-sharif-logo.svg";

function Footer() {
  const { copyrightText, siteurl, sitename, innovatedBy } = data;

  return (
    <footer className="text-center text-slate-500">
      <div className="flex items-center justify-center space-x-1">
        <p
          dangerouslySetInnerHTML={{
            __html: copyrightText,
          }}
          className="m-0"
        ></p>
        <Link href={siteurl} className="text-[#9d2eaf] hover:underline">
          {sitename}.
        </Link>
        <p>Innovated by </p>
        <Link href={innovatedBy} target="_blank">
          <Image
            src={InnovatedByLogo}
            alt="Innovated By Logo"
            width={24}
            height={24}
            className="w-auto h-5"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
