import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import projects from '../../Data/Projects.json'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"]
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: scrollYProgress
      }}
      className='bg-gray-200  dark:bg-black'>
      <section className="w-screen dark:bg-black text-gray-100 dark:text-gray-800">
        <div className="container w-full px-1 py-14  mx-auto rounded-lg shadow-sm md:w-10/12 sm:px-6">
          <h1 id='Projects' className='text-5xl pb-6 text-center  font-bold font-serif mx-auto dark:text-white'>Projects</h1>
          <section className="py-6  dark:bg-black text-gray-50 dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-2 mx-auto md:grid-cols-3 md:p-4">
              {
                projects.map(project => (
                  <motion.section key={project.Title} className='min-h-full w-full relative aspect-square md:aspect-video md:min-h-96'>
                    <div className='h-full w-full flex flex-col justify-center items-center gap-4 rounded-md absolute bg-black opacity-0  hover:opacity-80'>
                      <h1 className='text-[3.5vw] text-white font-bold font-serif md:text-[2vw]'>{project.Title}</h1>
                      <article className='text-[2vw] text-white md:text-[1vw]'>{project.Description}</article>
                      <motion.a
                        href={project.link}
                        target='blank'
                        whileHover={{ scale: 1.05 }}
                        className='px-[2vw] py-[0.5vh] bg-orange-700 rounded-xl text-[3vw] md:text-[1vw] md:px-5 md:py-2 md:font-bold'>Check Now</motion.a>
                    </div>
                    <LazyLoadImage className='w-full h-full rounded-md shadow-sm  bg-gray-500 dark:bg-gray-500 bg-cover bg-center'
                      src={project.Image} alt={project.Title}
                    />
                  </motion.section>

                ))
              }
            </div>
          </section>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects
