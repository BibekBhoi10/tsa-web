"use client";

import React, { useEffect, useCallback, useState } from "react";

function EyeDemo() {
  const [rotate, setRotate] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const deltaX = mouseX - window.innerWidth / 2;
    const deltaY = mouseY - window.innerHeight / 2;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    setRotate(angle + 540);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 200); // Blink duration (200ms)
    }, 2000); // Blink every 5 seconds

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const Eye = () => (
    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
      <div className="relative w-4/5  rounded-full bg-zinc-900 overflow-hidden"
      style={{
              height: isBlinking ? '0.2rem' : '12rem',
              transition: "height 0.1s linear",
            }}
            >
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            transition: "transform 0.1s linear",
          }}
          className="absolute w-full top-1/2 left-1/2"
        >
          <div
            className="w-10 h-10 rounded-full bg-zinc-100"
            // style={{
            //   height: isBlinking ? '0.2rem' : '2.5rem',
            //   transition: "height 0.1s linear",
            // }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
      <div className="relative flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-96">
          <Eye />
          <Eye />
        </div>
  );
}

export default EyeDemo;