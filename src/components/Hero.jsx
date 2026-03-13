import React, { useState, useEffect } from 'react';
import heroBg from '../assets/HeroBG.png';

const phrases = ["Streaming tanpa buffering", "Gaming tanpa lag", "Meeting online lancar", "Download super cepat"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(index + 1);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="relative h-[674px] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#012169]/85 bg-black/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-8 w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Internet Cepat untuk<br/>
          <span className="gradient-text">{text}</span>
          <span className="cursor text-[#51a2ff]">|</span>
        </h1>
        {/* ... Rest of your hero HTML (change class to className) ... */}
      </div>
    </section>
  );
}