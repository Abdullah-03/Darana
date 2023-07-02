import React, { useContext, useState } from "react";
import { ThemeContext } from "../Contexts";
import { Moon, Sun, Volume, Volume2 } from "lucide-react";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [ playSound, setPlaySound ] = useState(true);
  const [isFirstLoad, setFirstLoad] = useState(true);
  return (
    <div className="flex flex-row py-5 px-5 text-black dark:text-white">
      <div className="flex-1">
        <p className="text-4xl tracking-wider">Darana</p>
      </div>

      <div className="flex flex-row w-20 md:w-40 md:mr-5 pt-2 md:pt-3 justify-between">
        <div className="invisible w-0 md:w-auto md:visible">
          <a href="" className="text-xl">Blog</a>
        </div>

        {theme === "dark" ? (
          <Moon
            size={20}
            color="white"
            className={isFirstLoad ? "" : "rotateIcon"}
            onClick={() => {
              setTheme("light");
              setFirstLoad(false);
              playSound ? new Audio("/click.mp3").play() : null;
            }}
          />
        ) : (
          <Sun
            size={20}
            color="black"
            className={isFirstLoad ? "" : "rotateIcon"}
            onClick={() => {
              setTheme("dark");
              setFirstLoad(false);
              playSound ? new Audio("/click.mp3").play() : null;
            }}
          />
        )}

        {playSound ? (
          <Volume2
            color={theme === "dark" ? "white" : "black"}
            size={20}
            onClick={() => {
              setPlaySound(false);
              setFirstLoad(false);
              new Audio("/voldown.wav").play();
            }}
          />
        ) : (
          <Volume
            color={theme === "dark" ? "white" : "black"}
            size={20}
            onClick={() => {
              setPlaySound(true);
              setFirstLoad(false);
              new Audio("/volup.mp3").play();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
