import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row py-5 px-5">
      <div className="basis-3/4">
        <p className="text-4xl tracking-wider">Darana</p>
      </div>

      <div className="flex flex-row md:mr-5 pt-3 basis-1/4 justify-between">
        <p className="text-xl">Blog</p>
        <p className="text-xl ml:2 md:ml-0">Showcase</p>
      </div>
    </div>
  );
}

export default Navbar;
