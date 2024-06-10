import React from 'react';
import FastMarquee from 'react-fast-marquee';
import Image from 'next/image';
import MarqueeLogo1 from '@/assets/MarqueeImg/Monte carlo dp.jpg';
import MarqueeLogo2 from '@/assets/MarqueeImg/daivik ratnam white.png';
import MarqueeLogo3 from '@/assets/MarqueeImg/abs.png';
import MarqueeLogo4 from '@/assets/MarqueeImg/SuruchiBazarNoBg.png';
import MarqueeLogo5 from '@/assets/MarqueeImg/drm_round.jpg'

const logos = [
  { src: MarqueeLogo1, alt: 'Monte Carlo Logo', link: 'https://montecarlo.in' },
  { src: MarqueeLogo2, alt: 'Daivik Ratnam Logo', link: 'https://daivikratnam.com' },
  { src: MarqueeLogo3, alt: 'ABS Logo', link: 'https://anilbalajisteel.com'},
  { src: MarqueeLogo4, alt: 'Suruchi Bazar Logo', link: '#' },
  { src: MarqueeLogo5, alt: 'DRM Logo', link: 'https://duramix.in/' },
];

const LogoMarquee = () => {
  return (
    <FastMarquee speed={100} pauseOnHover={true}>
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className='logo-container h-40 w-40 object-cover grayscale hover:grayscale-0 rounded m-10 bg-white outline-2 outline-pink-500 flex items-center justify-center'
        >
          <a href={logo.link}>
          <Image 
            src={logo.src} 
            alt={logo.alt} 
            className="logo-image h-auto w-auto max-h-64 transition duration-300 p-5" 
          />
          </a>
        </div>
      ))}
    </FastMarquee>
  );
};

export default LogoMarquee;