"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImage from "@/assets/TSALogoNoBg.png";
import Image from "next/image"

const menuLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/works",
    label: "About",
  },
  {
    path: "/about",
    label: "Projects",
  },
  {
    path: "/contact",
    label: "Contact Us",
  },
];

const MenuDemo = () => {
  const container = useRef();
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">
            <Image
              src={LogoImage}
              alt="logo"
              height="64"
              width="64"
            />
          </Link>
        </div>
        <div className="menu-open text-white " onClick={toggleMenu}>
          MENU
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">TSA</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>CLOSE</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://www.instagram.com/the.social.ants/">
                Instragram &#8599;
              </a>
              <a href="https://www.facebook.com/people/The-Social-Ants/61557431040925/">
                Facebook &#8599;
              </a>
              <a href="https://www.linkedin.com/company/thesocialants/">
                LinkedIn &#8599;
              </a>
              <a href="#">Behance &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>admin@thesocialants.com</p>
              <p>+91 9776000670</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDemo;