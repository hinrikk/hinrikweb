"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Intro() {
  useGSAP(() => {
    let targets = document.querySelectorAll(".words span");
    let numberOfTargets = targets.length;
    let duration = 0.8; //change this
    let pause = 3; // change this
    let stagger = duration + pause;
    let repeatDelay = stagger * (numberOfTargets - 1) + pause;

    const tl = gsap.timeline({ repeat: -1, ease: "power4.inOut" });
    tl.from(targets, {
        y:80,
        duration: duration,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
        }
    });

    tl.to(
      targets, {
        y: -80,
        duration: duration,
        opacity: 0,
        stagger: {
          each: stagger,
          repeat: -1,
          repeatDelay: repeatDelay
        }
      },
      stagger
    );

  }, []);

  return (
    <div className="w-full bg-blue-500 h-screen flex items-center justify-center text-6xl">
        <div className="flex flex-col bg-red-500 gap-8">
            <span>Was kann ich für</span>
            <div className="font-bold text-9xl words relative overflow-hidden h-[2em]">
            <span className="absolute inset-0 flex items-center justify-center">
                DICH
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
                DEINE MUM
            </span>
            </div>
            <span>tun?</span>
        </div>
    </div>
  );
}