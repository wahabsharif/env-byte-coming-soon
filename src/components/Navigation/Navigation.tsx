import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Images from "next/image";
import Logo from "@/assets/logo/env-byte-logo.svg";

function Navigation() {
  return (
    <>
      <nav className="flex items-center justify-center space-x-4">
        <div className="p-2 rounded-lg shadow-lg dark:bg-white/50 backdrop-blur-lg bg-black/30">
          <Images
            src={Logo}
            alt="Env Byte Logo"
            className="w-28"
            width={1000}
            height={1000}
          />
        </div>
        <ThemeSwitch />
      </nav>
    </>
  );
}

export default Navigation;
