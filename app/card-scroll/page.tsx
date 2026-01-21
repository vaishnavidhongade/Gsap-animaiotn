// cspell:ignore gsap
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { id: 1, src: "/assetss/1.png" },
  { id: 2, src: "/assetss/2.png" },
  { id: 3, src: "/assetss/3.png" },
  { id: 4, src: "/assetss/4.png" },
  { id: 5, src: "/assetss/5.png" },
  { id: 6, src: "/assetss/6.png" },
];

export default function CardScroll() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          markers: true,
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <main className="h-full w-full bg-black flex flex-col gap-4 items-center text-center pt-[15vh]">
      {CARDS.map((card) => (
        <div
          key={card.id}
          className="card sticky top-[36vh] flex flex-col gap-4 items-center w-[27vw] max-w-96 rounded-2xl bg-[#2E251E] px-[20px] py-[16vh]"
        >
          <Image
            width={150}
            height={150}
            src={card.src}
            alt={`image-${card.id}`}
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
      ))}
    </main>
  );
}
