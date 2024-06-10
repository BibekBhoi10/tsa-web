import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import PopupCardDemo from "./PopupCardDemo";
import ServiceImg1 from "@/assets/serviceimg/ServiceImage1.jpg"
import ServiceImg2 from "@/assets/serviceimg/ServiceImage2.jpg"
import ServiceImg3 from "@/assets/serviceimg/ServiceImage3.jpg"
import ServiceImg4 from "@/assets/serviceimg/ServiceImage4.jpg"
import ServiceImg5 from "@/assets/serviceimg/ServiceImage5.jpg"
import ServiceImg6 from "@/assets/serviceimg/ServiceImage6.jpg"

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[60rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased bg-neutral-950">
      
      <div className="absolute inset-0 bg-background-beams-demo bg-cover bg-center z-0" />
      
      <div className="max-w-8xl mx-2xl p-10 relative z-10"> 
      <div className="text-white text-center text-4xl font-bold hover:underline hover:text-blue-500 p-4 px-20 mx-96 shadow-lg transition duration-300 ease-in-out transform hover:scale-110 animate-bounce font-mono  ">
        What we provide
      </div>

      <div className="grid grid-cols-3 gap-6">
          <div className="bg-transparent-200 p-6"><PopupCardDemo imageSource={ServiceImg1} title={"Web Development"} paragraph={"paragraph"}/></div>
          <div className="bg-transparent-200 p-6"><PopupCardDemo imageSource={ServiceImg2} title={"Content Writing"} paragraph={"paragraph"}/></div>
          <div className="bg-transparent-200 p-6"><PopupCardDemo imageSource={ServiceImg3} title={"Video Editing"} paragraph={"paragraph"}/></div>
          <div className="bg-transparent-200 p-6"><PopupCardDemo imageSource={ServiceImg4} title={"Graphic Designing"} paragraph={"paragraph"}/></div>
          <div className="bg-transparent-200 p-6"><PopupCardDemo imageSource={ServiceImg5} title={"Digital Marketing"} paragraph={"paragraph"}/></div>
          <div className="bg-transparent-200 p-6"><PopupCardDemo imageSource={ServiceImg6} title={"Search Engine Optimization"} paragraph={"paragraph"}/></div>
         
        </div>
      </div>
      <BackgroundBeams className="z-0" />
    </div>
  );
}
