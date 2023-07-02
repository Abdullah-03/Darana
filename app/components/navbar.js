import React from "react";
import NavbarButtons from "./navbarButtons";

function Navbar() {
  return (
    <div className="flex flex-row py-5 px-5 text-black dark:text-white">
      <div className="flex-1">
        <p className="text-4xl tracking-wider">Darana</p>
      </div>

      <div className="flex flex-row w-20 md:w-40 md:mr-5 pt-2 md:pt-3 justify-between">
        <div className="invisible w-0 md:w-auto md:visible">
          <a href="" className="text-xl">Blog</a>
        </div>

        <NavbarButtons/>
      </div>
    </div>
  );
}

export default Navbar;
