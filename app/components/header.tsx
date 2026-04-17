"use client";

import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Header() {

  useGSAP(() => {

    const contactRef = document.querySelector(".contact-ref");

    gsap.fromTo(
      contactRef,
      { x: -2000, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  const items = ["Home", "Referenzen", "Projekte"]


  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black text-xl">
      <div className="mx-auto flex h-18 items-center justify-between">
        <Link href="/" className="md:hidden pl-6">
          <Image
            src="/burger.svg"
            alt="BURGER"
            width={22}
            height={22}
            className="text-white"
          />
        </Link>
        <div className="hidden md:flex h-full">
          {items.map((item, index) => (
            <Link href="/" key={index} className="flex gap-2 h-full items-center px-8">
              <span>{item}</span>
              <Image
                src="/arrow.svg"
                alt="ARROW"
                width={14}
                height={14}
              />
            </Link>
          ))}
        </div>

        <nav className="flex gap-6 text-black text font-bold h-full">
          <div className="contact-ref flex bg-secondary h-full items-center justify-center px-6 gap-2">
            <Link href="/contact" className="">Contact</Link>
            <Image
              src="/arrowblack.svg"
              alt="ARROW"
              width={14}
              height={14}
            />
          </div>
        </nav>
        
      </div>
    </header>
  );
}