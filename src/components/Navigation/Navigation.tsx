import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Images from "next/image";
import Logo from "@/assets/logo/env-byte-logo.svg";

function Navigation() {
  return (
    <>
      <nav className="flex items-center space-x-4 sm:justify-center">
        <Images
          src={Logo}
          alt="Env Byte Logo"
          className="w-28"
          width={1000}
          height={1000}
        />
        <ThemeSwitch />
      </nav>
    </>
  );
}

export default Navigation;
