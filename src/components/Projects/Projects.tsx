import React from 'react'
import projects from '../../Data/Projects.json';

const Projects: React.FC = () => {


  return (
    <>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-xl mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 text-3xl font-semibold">
              Projects
            </h3>
            <p className="text-gray-800 text-5xl font-bold sm:text-4xl">
              Check out my latest work
            </p>
            <p>
              I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </p>
          </div>
          <div className="mt-12">
            <Cards />
          </div>
        </div>
      </section>


    </>
  )
}

export default Projects;

const Cards = () => {
  return (
    <>

      {
        projects.map((item, index) => (
          <section key={item.Name}>
            <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1  lg:grid-cols-2">
                <div className={index % 2 === 0 ? "relative z-10 lg:py-16" : "relative z-10 lg:py-16 lg:order-last"}>
                  <div className="relative aspect-video lg:h-full">
                    <img
                      alt=""
                      src={item.Image}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-300 px-4">
                  <span
                    className={`hidden lg:absolute lg:inset-y-0 ${index % 2 == 0 ? 'lg:-start-16' : 'lg:-end-16'} lg:block lg:w-16 lg:bg-gray-300`}
                  ></span>
                  <div className="p-4 sm:p-16 lg:p-10">
                    <h2 className="text-2xl font-bold text-black sm:text-3xl">
                      {item.Name}
                    </h2>

                    <ul>
                      {
                        item.Points.map((point, index) => (
                          <li key={index} className="mt-1 text-black list-disc">
                            {point}
                          </li>

                        ))
                      }
                    </ul>
                    <a
                      href={item.link}
                      className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Check Out
                    </a>
                  </div>
                </div>
                {
                  index % 2 != 0 &&
                  <span
                    className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"
                  ></span>
                }
              </div>
            </div>
          </section >
        ))
      }

    </>
  )
}
