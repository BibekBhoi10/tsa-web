import React from "react";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Image11 from "@/assets/photo3.jpg";

export function BackgroundGradientDemo() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 opacity-75 rounded-[22px] z-0" />
      <div className="relative z-10">
        <div className="max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden rounded-[22px]">
          <Image
            src={Image11}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
