import React from 'react'
import { motion } from 'framer-motion'
import projects from '../../Data/Projects.json'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Projects: React.FC = () => {

  const straggeringVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index
      }
    })
  }

  return (
    <motion.div
      className=' dark:bg-black'>
      <section className="w-screen dark:bg-black text-gray-100 dark:text-gray-800">
        <div className="container w-full px-1 py-14  mx-auto rounded-lg shadow-sm md:w-10/12 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id='Projects' className='text-5xl pb-6 text-center  font-bold font-serif mx-auto text-black dark:text-white '>Projects</motion.h1>
          <section className="py-6  dark:bg-black text-gray-50 dark:text-gray-900">
            <div className="container grid grid-cols-1 gap-4 p-2 mx-auto lg:grid-cols-2 md:p-4">
              {
                projects.map((project, index) => (
                  <motion.section key={project.Title}
                    variants={straggeringVarients}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                    className='min-h-72 w-full relative  md:aspect-video md:min-h-96'>
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
