import { useState } from "react";

function Intro() {
  return (
    <section className="bg-oilblack dark:dark:dark:bg-oilblack dark:dark:dark:text-gray-100">
      <div className="container flex flex-col justify-center bg-oilblack h-128 p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:max-w-md xl:max-w-lg lg:text-left 2xl:ml-36 ">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">Hi I'm
            <span className="text-name dark:dark:dark:text-name">Rajesh Potharam </span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">A Computer Science Student
            <br className="hidden md:inline lg:hidden" /> Passionate about the programming
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="http://www.github.com/Rajeshpatel07" target='_blank'
              className="px-8 py-3 text-lg font-semibold border rounded dark:dark:dark:bg-red-400 dark:dark:dark:text-gray-900">Github</a>
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:dark:dark:border-gray-100">Resume</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-100">
          <img src="vegeta.png" alt="vegeta" className="object-contain h-72 sm:h-80 lg:h-96 mr-24 xl:h-112 2xl:h-100" />
        </div>
      </div>
    </section>

  )
}

export default Intro
