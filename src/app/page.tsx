"use client";
import Image from "next/image";
import { NavbarDemo } from "@/components/edits/NavbarDemo";
import BackgroundVideo from "@/components/edits/BackgroundVideo";
import { HeroScrollDemo } from "@/components/edits/HeroScrollDemo";

import { HeroParallaxDemo } from "@/components/edits/HeroParallaxDemo";
import LogoMarqueeDemo from "@/components/edits/LogoMarqueeDemo";
import Spline from "@splinetool/react-spline"
import LocomotiveScroll from "locomotive-scroll";
import Project from "@/components/edits/SplitSlideshow";
import SplitSlideshow from "@/components/edits/SplitSlideshow";
import { StickyScrollRevealDemo } from "@/components/edits/StickyScrollREvealDemo";
import CardAnimations from "@/components/edits/Clients_section/Airdrops";
import Airdops from "@/components/edits/Clients_section/Airdrops";
import ScrollAnimation from "@/components/edits/scrollAnimation/ScrollAnimation";
import TestimonialSectionScroll from "@/components/edits/Testimonial/TestimonialSectionScroll";
import BackgroundScrollVideo from "@/components/edits/BackgroundScrollVideo/BackgroundScrollVideo";
import ContactSection from "@/components/edits/ContactSection/ContactSection";
import Index from "@/components/edits/ZoomParallax/ZoomParallax/ZoomParallax/Index";
import ServiceSectionDemo from "@/components/edits/ServiceSection/ServiceSectionDemo";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div>
      <div>
        <div>
          <NavbarDemo />
          <BackgroundVideo />

          <HeroScrollDemo />
          < ServiceSectionDemo />
          <div>
            <Index />
          </div>

          {/* < StickyScrollRevealDemo /> */}
        </div>

        {/* <HeroParallaxDemo /> */}
        {/* <LogoMarqueeDemo/> */}
        <div>
          <Spline scene="https://prod.spline.design/8qVMP393ZbAiyO7W/scene.splinecode" />
        </div>
      </div >

      {/* <div className="overflow-hidden">
        <div className="overflow-hidden">
          <Airdops />
        </div>
      </div> */}

      {/* <div className="overflow-hidden">
      <div className="overflow-hidden">
        < ScrollAnimation/>
       </div>
        </div>  */}
      <div>
        <div className="overflow-hidden">
          {/* <ContactSection /> */}
          <TestimonialSectionScroll />
        </div>

      </div>


      <div className="">
        <BackgroundScrollVideo />
      </div>

      {/* <div>
        <SplitSlideshow />
      </div> */}

    </div>
  );
}
