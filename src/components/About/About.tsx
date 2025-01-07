import React from 'react'
import { motion } from 'motion/react'
import about from '../../Data/about.json'

const About: React.FC = () => {

  return (

    <section>
      < motion.div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
            <img
              alt=""
              src='https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg'
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
            {
              about.map((item, index) => (
                <p key={index} className="mt-4 text-gray-600">{item.about}</p>
              ))

            }
            <a
              href="https://www.github.com/Rajeshpatel07"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Learn More about me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About;
