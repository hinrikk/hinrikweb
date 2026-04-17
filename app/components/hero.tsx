"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const typeText = (el: Element, text: string, speed = 0.01) => {
  const tl = gsap.timeline();
  let current = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    tl.call(() => {
      current += char;
      el.textContent = current;
    });

    // base typing speed
    tl.to({}, { duration: speed });

    // 🔥 punctuation pause
    if (char === "." || char === "," || char === "\n") {
      tl.to({}, { duration: 0.2 });
    }

  }

  return tl;
};


export function Hero() {
  useGSAP(() => {
    const headingEl = document.querySelector(".hero-heading");
    const textEl = document.querySelector(".hero-text");
    const cursor = document.querySelector(".cursor");

    if (!headingEl || !textEl) return;

    const headingText = "Moin!";
    const bodyText =
      "\n\nMein Name ist Hinrik und ich brenne 🔥 für Software(-Entwicklung).\n\n";

    headingEl.textContent = "";
    textEl.textContent = "";

    const tl = gsap.timeline();

    // Cursor blinking
    gsap.to(cursor, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    });

    tl.to({}, { duration: 1.5 });

    // 1. Type headline (slower)
    tl.add(typeText(headingEl, headingText, 0.1));

    // 3. Type body (faster)
    tl.add(typeText(textEl, bodyText, 0.01));

  }, []);

  return (
    <div className="w-full bg-black relative h-screen border-b-2 border-secondary pt-16 px-8 text-secondary flex flex-col justify-center items-center">
      <div className="w-fit max-w-96 items-center">
        <div className="bg-blue-500 text-white w-fit p-1 inset-x-7">
          <p>{"<p> / HEADER 01"}</p>
        </div>

        <div className="px-4 pb-4 pt-12 relative z-10 border-2 border-blue-500 w-full">
          <span>
            <span className="hero-heading font-bold text-8xl"></span>
            <span className="hero-text pt-12 text-xl whitespace-pre-line"></span>
            <span className="cursor inline-block p-4 bg-secondary mt-2 "></span>
          </span>
        </div>

        <div className="bg-blue-500 text-white w-fit p-1 inset-x-7">
          <p>{"</p> //"}</p>
        </div>
      </div>

    </div>
  );
}