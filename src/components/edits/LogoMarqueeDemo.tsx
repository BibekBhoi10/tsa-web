import React from 'react';
import LogoMarquee from '../ui/logo-marquee';

const LogoMarqueeDemo = () => {
  return (
    <div className='bg-transparent h-50 w-full text-center p-4 '>
    {/* <div className='bg-gradient-to-r from-slate-950 via-white-500 to-slate-500 h-50 w-full text-center p-4 '> */}
        <h1 className='mt-20 text-2xl md:text-6xl font-bold dark:text-white masked-heading'>
            The clients we deal with
        </h1>
    <div className="marquee-container ">
      <LogoMarquee />
      {/* <LogoMarquee logoSrc={MarqueeLogo2} altText="Your Logo" />
      <LogoMarquee logoSrc={MarqueeLogo3} altText="Your Logo" />
      <LogoMarquee logoSrc={MarqueeLogo4} altText="Your Logo" />
      <LogoMarquee logoSrc={MarqueeLogo5} altText="Your Logo" /> */}
      
    </div>
    </div>
  );
};

export default LogoMarqueeDemo;