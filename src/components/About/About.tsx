import React,{useRef} from 'react'
import {motion,useScroll,useTransform} from 'framer-motion'

const About: React.FC = () => {
const ref=useRef<HTMLDivElement | null>(null);
const {scrollYProgress} =useScroll({
  target:ref,
  offset:["0 1","1.33 1"]
})
const scaleProgess=useTransform(scrollYProgress,[0,1],[0.3,1]);

  return (
    <motion.div className=" dark:bg-black text-black dark:text-white"
    ref={ref}
    style={{
      scale:scaleProgess,
      opacity:scrollYProgress
    }}
    >
      <div className="container w-full px-6 py-14  mx-auto rounded-lg shadow-sm md:w-8/12 ">
        <section >
          <h1 id='About' className='text-5xl py-3 font-bold font-serif text-violet-600'>About</h1>
          <div className='flex gap-2 items-center'>
            <div className='w-28 h-1 bg-red-500 self-start mt-2.5'></div>
            <article className="text-lg">
              As a Computer science enthusiast I love coding and always look for ways to get better at it.
              I enjoy working on new and challenging projects that allow me to apply and enhance my skills.
              My interest in computer science drives me to explore its vast possibilities and push its limits.
              I am dedicated to making significant contributions in the field and exploring new frontiers in the digital world
            </article>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default About;
