"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export function Hero() {

  useGSAP(() => {
    const el = document.querySelector(".blog-heading");

    if (!el) return;

    const text =
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

    el.textContent = ""; // start empty

    let i = 0;

    const tl = gsap.timeline();

    tl.to({}, {
      duration: text.length * 0.04, // typing speed
      ease: "none",
      onUpdate: function () {
        const progress = this.progress();
        const currentLength = Math.floor(progress * text.length);
        el.textContent = text.slice(0, currentLength);
      },
    });

    gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  }, []);


  return (
    <div className="w-full bg-black relative h-screen border-b-2 border-secondary pt-16 text-secondary flex flex-col justify-center items-center">
        <div className="w-72 h-96 bg-lime-600 absolute right-0 bottom-0 z-0 overflow-clip">
            <Image
              src="/portrait.jpg"
              alt="Portrait"
              fill
              className="object-cover"
            />
        </div>
        <div className="px-4 py-4 relative z-10 justify-end border-2 border-secondary w-fit max-w-3/4">
            {/* <h1 className="text-7xl font-bold pb-8">Moin!</h1> */}
            <span className="blog-heading"></span>
            <span className="cursor">|</span>
        </div>
    </div>
  );
}