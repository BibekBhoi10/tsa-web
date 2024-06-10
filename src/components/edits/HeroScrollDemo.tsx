"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animations";
import Image from "next/image";
import aboutbg from "@/assets/aboutimg.webp"
import { LayoutGridDemo } from "./LayoutGridDemo";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Social Ants
              </span>
            </h1>
          </>
        }
      >
        {/* <Image
          src={aboutbg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
        
        <ParallaxScrollDemo/>
      </ContainerScroll>
    </div>
  );
}



