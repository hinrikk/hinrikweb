import Image from "next/image";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";

export default function Home() {
  return (
    <div className="flex flex-col bg-pink-500 items-center justify-center">
      <Hero/>
      {/* <div className="w-full bg-black p-8 text-white">
          <h1 className="text-3xl font-bold"> Lorem Ipsum </h1>
          <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
      </div> */}
      <Intro/>
    </div>
  );
}
