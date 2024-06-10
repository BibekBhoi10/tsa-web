import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";

export default function Airdops() {
  const purpleRef = useRef();
  const mainRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(purpleRef.current, {
      y: 0,
    });

    gsap.to(purpleRef.current, {
      y: -3000,
      opacity: 1,
      delay: 3,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        markers: false,
      },
    });
  });

  return (
    <div
      ref={mainRef}
      style={{ overflowY: "hidden" }}
      className="h-screen flex flex-row bg-black-400"
    >
      <div className="h-screen w-screen bg-black-400 text-center justify-center items-center content-center">
        <Spline scene="https://prod.spline.design/IVDzaQL0M2zNrpcF/scene.splinecode" />
      </div>
      <div
        className="purple bg-black-100 h-screen justify-center items-center"
        style={{ overflowY: "hidden" }}
      >
        <div ref={purpleRef}></div>
      </div>
    </div>
  );
}