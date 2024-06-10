import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

function BackgroundScrollVideo() {
  const textRef = useRef();
  const footerRef = useRef();
  const mainRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.from(footerRef.current, {
      y: 1000,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "bottom-=100 top",
        end: "bottom top",
        scrub: 1,
        markers:false,
      },
    });

    gsap.from(textRef.current, {
      scale: 40,
      y: -320,
      delay: 5,
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
    <div ref={mainRef} className=" h-screen w-full overflow-hidden">
      <video
        className="absolute h-screen w-screen scale-[1.3]"
        src={require("@/assets/Tour.webm")}
        autoPlay
        loop
        muted
      />

      <div ref={footerRef} className="fixed h-1/4 bg-purple-300 bottom-0 w-full"></div>

      <footer
        ref={textRef}
        className="h-screen w-full relative mix-blend-multiply bg-black text-white py-6"
      >
        <div className="container mx-auto text-center mt-80">
          <h1 className="text-15xl font-bold">TSA</h1>

          <div className="flex px-10">
            <div className="flex w-1/3 mt-64">
              <Link href="/about" className="text-white mx-2">
                About
              </Link>
              <Link href="/contact" className="text-white mx-2">
                Contact
              </Link>
              <Link href="/case-studies" className="text-white mx-2">
                Case Studies
              </Link>
              <Link href="/blog" className="text-white mx-2">
                Blog
              </Link>
              <Link href="/privacy" className="text-white mx-2">
                Privacy
              </Link>
            </div>
            <div className="flex justify-center space-x-6 mt-64 w-1/3">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="h-8 w-8" />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="h-8 w-8" />
              </a>
              <a
                href="https://www.youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube className="h-8 w-8" />
              </a>
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook className="h-8 w-8" />
              </a>
            </div>
            <div className="mt-64 w-1/3 text-right">
              <p className="text-sm">Proudly created in India.</p>
              <p className="text-sm">All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* <h1
        ref={textRef}
        className="relative text-center font-oswald mix-blend-screen bg-white h-screen w-full"
        style={{ fontSize: "50vh" }}
        >
        TSA
        </h1> */}
    </div>
  );
}

export default BackgroundScrollVideo;