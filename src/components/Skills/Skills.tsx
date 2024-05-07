import React from 'react'
import { motion } from 'framer-motion'
import Icons from '../../Data/Icons.json'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Skills: React.FC = () => {

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
      className=" bg-gray-200  dark:bg-gray-800">
      <div className="container  px-6 py-10 mx-auto rounded-lg shadow-sm flex flex-col items-center ">
        <motion.h1 id="Skills" className='text-5xl py-5 font-bold font-serif dark:text-white'
          variants={straggeringVarients}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >My Skills</motion.h1>
        <section className="w-full grid grid-cols-4 grid-rows-3 grid-area gap-2 p-2  mt-4 md:grid-cols-5 md:w-8/12">
          {
            Icons.map((icon, index) => (
              <motion.div key={icon.Title}
                className='flex flex-col justify-center items-center px-2  bg-transparent gap-3 h-20 w-full p-2 md:h-40 hover:bg-gray-600 rounded-lg'
                variants={straggeringVarients}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                <div className=' h-20 flex flex-col justify-center items-center gap-1 p-[0.5vw] sm:p-[0.1vw] md:w-28 md:h-28'>
                  <LazyLoadImage src={icon.Icon} alt={icon.Title}
                    className='h-full w-full'
                  />
                  <p className='text-[3vw] font-serif text-medium sm:text-[1.5vw] whitespace-nowrap text-black dark:text-white'>{icon.Title}</p>
                </div>
              </motion.div>
            ))
          }
        </section>
      </div>
    </motion.div>
  )
}

export default Skills
