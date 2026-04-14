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

    // // 🔥 punctuation pause
    // if (char === "." || char === "," || char === " ") {
    //   tl.to({}, { duration: 0.05 });
    // }

  }

  return tl;
};


export function Hero() {
  useGSAP(() => {
    const headingEl = document.querySelector(".hero-heading");
    const textEl = document.querySelector(".hero-text");

    if (!headingEl || !textEl) return;

    const headingText = "Moin!";
    const bodyText =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.";

    headingEl.textContent = "";
    textEl.textContent = "";

    const tl = gsap.timeline();

    // 1. Type headline (slower)
    tl.add(typeText(headingEl, headingText, 0.1));

    // 2. Fake "enter" presses
    tl.to({}, { duration: 0.3 });
    tl.call(() => {
      textEl.textContent = "\n";
    });

    tl.to({}, { duration: 0.2 });
    tl.call(() => {
      textEl.textContent += "\n";
    });

    // 3. Type body (faster)
    tl.add(typeText(textEl, bodyText, 0.01));

  }, []);

  return (
    <div className="w-full bg-black relative h-screen border-b-2 border-secondary pt-16 text-secondary flex flex-col justify-center items-center">
      {/* <div className="w-72 h-96 absolute right-0 bottom-0 z-0 overflow-clip">
        <Image
          src="/portrait.jpg"
          alt="Portrait"
          fill
          className="object-cover"
        />
      </div> */}

      <div className="bg-blue-500 text-white w-fit p-1 inset-x-7">
        <p>{"<p> / HEADER 01"}</p>
      </div>

      <div className="px-4 py-4 relative z-10 border-2 border-secondary w-fit max-w-3/4 whitespace-pre-line">
        <p className="hero-heading font-silkscreen text-7xl"></p>
        <p className="hero-text pt-12 text-xl"></p>
      </div>
    </div>
  );
}