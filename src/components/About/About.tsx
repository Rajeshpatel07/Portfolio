import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {

  return (
    <motion.div

      className=" dark:bg-black text-black dark:text-white" >
      <div className="container w-full px-6 py-14  mx-auto rounded-lg shadow-sm md:w-8/12 ">
        <section >
          <motion.h1 id='About'
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            className='text-5xl py-3 font-bold font-serif text-violet-600'>About</motion.h1>
          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            className='flex gap-2 items-center'>
            <div className='w-28 h-1 bg-red-500 self-start mt-2.5'></div>
            <article className="text-lg">
              As a Computer science enthusiast I love coding and always look for ways to get better at it.
              I enjoy working on new and challenging projects that allow me to apply and enhance my skills.
              My interest in computer science drives me to explore its vast possibilities and push its limits.
              I am dedicated to making significant contributions in the field and exploring new frontiers in the digital world
            </article>
          </motion.div>
        </section>
      </div>
    </motion.div>
  )
}

export default About;
