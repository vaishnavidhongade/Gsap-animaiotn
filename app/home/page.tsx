// cspell:ignore gsap
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // gsap.to(".card", {
    //   scrollTrigger: {
    //     trigger: ".card",
    //     start: "top 50%",
    //     end: "bottom 50%",
    //     scrub: 1,
    //   },
    //   y: 100,
    //   opacity: 0,
    // });
  
   gsap.to(".card1", {
    scale: 0.7,
    });
  
  }, []);
  return (
    <main className="h-full w-full bg-black flex flex-col gap-4 items-center text-center pt-[15vh]">
      {/* card */}
      <div className="card card1 sticky top-[36vh] flex flex-col gap-4 items-center w-[27vw] max-w-96 rounded-2xl bg-[#2E251E] px-[20px] py-[16vh]">
        <Image
          width={150}
          height={150}
          src="/assetss/1.png"
          alt="image-1"
          className="w-[150px] aspect-square"
        />

        <h1 className="text-4xl text-white">
          The <br />
          <span className="font-bold">ALGORITHM</span>
        </h1>

        <p className="text-white opacity-90">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* card */}
      <div className="card sticky top-[36vh] flex flex-col gap-4 items-center w-[27vw] max-w-96 rounded-2xl bg-[#2E251E] px-[20px] py-[16vh]">
        <Image
          width={150}
          height={150}
          src="/assetss/2.png"
          alt="image-1"
          className="w-[150px] aspect-square"
        />

        <h1 className="text-4xl text-white">
          The <br />
          <span className="font-bold">ALGORITHM</span>
        </h1>

        <p className="text-white opacity-90">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* card */}
      <div className="card sticky top-[36vh] flex flex-col gap-4 items-center w-[27vw] max-w-96 rounded-2xl bg-[#2E251E] px-[20px] py-[16vh]">
        <Image
          width={150}
          height={150}
          src="/assetss/3.png"
          alt="image-1"
          className="w-[150px] aspect-square"
        />

        <h1 className="text-4xl text-white">
          The <br />
          <span className="font-bold">ALGORITHM</span>
        </h1>

        <p className="text-white opacity-90">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </main>
  );
}
