import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EyeDemo from "./EyeDemo";

function TestimonialSectionScroll() {
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();
  const textRef5 = useRef();
  const textRef6 = useRef();
  const mainRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(textRef1.current, {
      y: -1300,
      x: -800,
      delay: 1,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(textRef2.current, {
      y: -1300,
      x: 800,
      delay: 1,
      scrollTrigger: {
        trigger: textRef1.current,
        start: "-400 top",
        end: "center top",
        scrub: 1,
      },
    });

    gsap.to(textRef3.current, {
      y: -1300,
      x: -800,
      delay: 1,
      scrollTrigger: {
        trigger: textRef2.current,
        start: "-400 top",
        end: "center top",
        scrub: 1,
      },
    });

    gsap.to(textRef4.current, {
      y: -1300,
      x: 800,
      delay: 1,
      scrollTrigger: {
        trigger: textRef3.current,
        start: "-400 top",
        end: "center top",
        scrub: 1,
      },
    });

    gsap.to(textRef5.current, {
      y: -1200,
      x: 1500,
      delay: 1,
      scrollTrigger: {
        trigger: textRef3.current,
        start: "-800 top",
        end: "center top",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(textRef6.current, {
      y: -1300,
      x: -800,
      delay: 1,
      scrollTrigger: {
        trigger: textRef1.current,
        start: "-400 top",
        end: "center top",
        scrub: 1,
      },
    });
  });

  return (
    <div className="overflow-hidden">
      <div ref={mainRef} className="h-screen bg-blue-300 grid content-center">
        <div className="h-32 content-center pl-10">
          <h1 style={{ fontSize: "3vw" }} className="font-oswald">
            What People Say About Us
          </h1>
        </div>
        <div className="">
          <EyeDemo />
        </div>

        <div
          ref={textRef1}
          className="absolute bg-white font-kanit text-12xl p-16 w-130 item-center rotate-[15deg] text-center top-full -left-40 font-[1200]uppercase z-5"
        >
          SO AMAZING
        </div>
        <div
          ref={textRef2}
          className="absolute bg-white font-kanit text-12xl p-16 w-130 item-center -rotate-12 text-center top-full uppercase z-5"
        >
          {" "}
          SO BEAUTIFUL
        </div>
        <div
          ref={textRef3}
          className="absolute bg-white font-kanit text-12xl p-16 -bottom-1/2 w-130 item-center rotate-[6deg] text-center uppercase z-5"
        >
          {" "}
          SO ELEGANT
        </div>
        <div
          ref={textRef4}
          className="absolute bg-white font-kanit text-12xl p-16 top-full w-130 item-center rotate-[-8deg] text-center uppercase z-5"
        >
          {" "}
          IMPRESSIVE
        </div>
        <div
          ref={textRef5}
          className="absolute bg-white font-kanit text-12xl p-16 -bottom-2/3 -left-1/2 w-130 item-center rotate-[-20deg] text-center uppercase z-5"
        >
          ZODDDDDD
        </div>
        <div
          ref={textRef6}
          className="absolute bg-white font-kanit text-12xl p-16 top-full w-130 item-center rotate-[0deg] text-center uppercase z-5"
        >
          DEKHTE RAHO
        </div>
      </div>
    </div>
  );
}

export default TestimonialSectionScroll;