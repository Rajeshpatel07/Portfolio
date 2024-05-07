import React from 'react'
import { motion } from 'framer-motion'
import Messages from '../../Data/Messages.json'

const Testimonial: React.FC = () => {

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
    <motion.section className="my-8 ">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold leading-none text-center text-black dark:text-white">Testimonial</motion.h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        {
          Messages.map((message, index) => (
            <motion.div
              variants={straggeringVarients}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true }}
              className="flex flex-col items-center mx-2 lg:mx-0" key={message.Person}>
              <div className="relative text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic text-black dark:text-white">{message.message}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg bg-violet-400 dark:bg-violet-600"></span>
              <p className='text-black dark:text-white'>{message.Person}</p>
            </motion.div>
          ))
        }
      </div>
    </motion.section>
  )
}

export default Testimonial;
