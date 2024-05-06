import React from 'react'
import Header from '../Header/Header'

const Intro: React.FC = () => {
  return (
    <>
      <section className="  bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800 bg-cover bg-center"
        style={{ backgroundImage: 'url(Racing.jpg)' }}
      >
        <Header />
        <div className="h-screen container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold text-white leading-none sm:text-6xl">
              <p className="text-violet-600">RAJESH</p> POTHARAM
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-white">A Self-Taught Full Stack Web Developer</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">RESUME</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Intro
