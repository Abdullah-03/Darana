"use client";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme-provider";
import { Moon, Sun, Volume, Volume2 } from "lucide-react";

export default function NavbarButtons() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [playSound, setPlaySound] = useState(true);
  const [isFirstLoad, setFirstLoad] = useState(true);

  let dayNightToggleSound = new Audio("/click.mp3");
  let voldownSound =  new Audio("/voldown.wav");
  let volupSound = new Audio("/volup.mp3");

  return (
    <>
      {theme === "dark" ? (
        <Moon
          size={20}
          color="white"
          className={isFirstLoad ? "" : "rotateIcon"}
          onClick={() => {
            setTheme("light");
            setFirstLoad(false);
            playSound ? dayNightToggleSound.play(): null;
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
            playSound ? dayNightToggleSound.play() : null;
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
            voldownSound.play()
          }}
        />
      ) : (
        <Volume
          color={theme === "dark" ? "white" : "black"}
          size={20}
          onClick={() => {
            setPlaySound(true);
            setFirstLoad(false);
            volupSound.play();
          }}
        />
      )}
    </>
  );
}
