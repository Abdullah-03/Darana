import React, { useContext, useState } from "react";
import { ThemeContext } from "../Contexts";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isFirstLoad, setFirstLoad] = useState(true);
  return (
    <div className="flex flex-row py-5 px-5 text-black dark:text-white">
      <div className="basis-3/4">
        <p className="text-4xl tracking-wider">Darana</p>
      </div>

      <div className="flex flex-row md:mr-5 pt-2 md:pt-3 basis-1/4 justify-between">
        <p className="text-xl">Blog</p>
        <button
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
            setFirstLoad(false);
            new Audio("/click.mp3").play();
          }}
        >
          {theme === "dark" ? (
            <Moon
              size={20}
              color="white"
              className={isFirstLoad ? "" : "rotateIcon"}
            />
          ) : (
            <Sun
              size={20}
              color="black"
              className={isFirstLoad ? "" : "rotateIcon"}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
