"use client";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme-provider";
import { Moon, Sun, Volume, Volume2 } from "lucide-react";

export default function NavbarButtons() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [playSound, setPlaySound] = useState(true);
  const [isFirstLoad, setFirstLoad] = useState(true);

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
    </>
  );
}
