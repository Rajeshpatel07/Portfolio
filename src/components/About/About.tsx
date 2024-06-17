import React from 'react'

const About: React.FC = () => {

  return (

    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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

            <p className="mt-4 text-gray-600">
              I am a Computer science enthusiast. I love coding and always look for ways to get better at it.
              I enjoy working on new and challenging projects that allow me to apply and enhance my skills.
              My interest in computer science drives me to explore its vast possibilities and push its limits.
              I am dedicated to making significant contributions in the field and exploring new frontiers in the digital world
            </p>

            <a
              href="https://www.github.com/Rajeshpatel07"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Learn More about me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
