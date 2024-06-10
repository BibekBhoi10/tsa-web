import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {

  useGSAP(() => {
    gsap.to('.animation-scroll', {
      x: -950,
      y: -400,
      scrollTrigger: {
        trigger: '.bottle',
        start: 'top top',
        end: 'bottom center',
        // markers: true,
        scrub: true,
        pin: true,
      },
    });
    gsap.to('.animation-scroll', {
      scale: 1.5,
      scrollTrigger: {
        trigger: '.bottle',
        start: 'top+=101 top+=100',
        end: 'bottom center',
        // markers: true,
        scrub: true,
        pin: true,
      },
      
    });
    gsap.to('.animation-paragraph', {
      x:-1200, // Move from right to left
      y:-200,
      opacity: 1, // Start with opacity 0
      scrollTrigger: {
        trigger: '.bottle',
        start: 'top+=202 top+=200', // Start when the top of the trigger hits the center of the viewport
        end: 'bottom center',
        // markers: true,
        scrub: true,
        pin: true,
      },
    });
    gsap.to('.animation-scroll', {
      // x: '-50%', // Move towards left by 50% of its own width
      // y: -400,
      scale: 0.8, // Zoom out the box
      scrollTrigger: {
        trigger: '.bottle',
        start: 'top+=303 top+=300',
        end: 'bottom+=100 center',
        markers: true,
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div>
      <div className='h-screen w-full bg-purple-100'></div>
      <div className='bottle bg-blue-300 h-screen w-full text-white content-center p-10 relative'>
        <div className='animation-scroll absolute bottom-0 right-0 bg-black h-120 w-96 p-6'>
          <h1 className='fhead text-4xl'>Using GSAP for scroll animation</h1>
          <p>This is a simple scroll animation for learning GSAP animation.</p>
        </div>
        <div className='animation-paragraph absolute -right-1/2 top-1/2 transform -translate-y-1/2 w-96'>
          <p>Additional paragraph coming from the right side Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem placeat tenetur possimus quia accusantium praesentium, illum ducimus iusto. Odio, corrupti nisi?</p>
        </div>
      </div>
      <div className='h-screen w-full bg-purple-200'></div>
    </div>
  );
}
