"use client"
import React, { useEffect, useState } from "react";

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWordEnd, setWordEnd] = useState(true);
  const sentence = ["React", "Next.js", "Prisma", "Tailwind"];

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function typing() {
    if (wordIndex === sentence[sentenceIndex].length) {
      if (text !== "") {
        isWordEnd && (await sleep(800));
        await sleep(200);
        setWordEnd(false);
        setText(text.slice(0, -1));
        return;
      }
      setWordIndex(0);
      if (sentenceIndex === 3) {
        setSentenceIndex(0);
        setWordEnd(true);
      } else {
        setSentenceIndex(sentenceIndex + 1);
        setWordEnd(true);
      }

      return;
    }
    await sleep(200);

    setText(text + sentence[sentenceIndex][wordIndex]);
    setWordIndex(wordIndex + 1);
  }

  typing();

  return (
    <>
      <span className="text-sky-300">{text}</span>
      <span class="cursor"></span>
    </>
  );
}
