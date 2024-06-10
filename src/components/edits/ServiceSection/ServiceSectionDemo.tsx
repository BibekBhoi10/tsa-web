'use client';
import styles from './serviceSection.module.css'
import { projects } from './data';
import Card from '@/components/ui/card/card';
import { useScroll } from 'framer-motion';
import { useRef,useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function ServiceSectionDemo() {

    useEffect( () => {

        const lenis = new Lenis()
    
    
    
        function raf(time) {
    
          lenis.raf(time)
    
          requestAnimationFrame(raf)
    
        }
    
    
    
        requestAnimationFrame(raf)
    
      })

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div>
        {/* <div className=' pt-6 font-oswald text-[100px] text-center'>What We Provide</div> */}
    <main ref={container} className={styles.main}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
    </main>
    </div>
  )
}