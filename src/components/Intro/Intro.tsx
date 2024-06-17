import { useState } from "react"
import footer from '../../Data/Socials.json'

const Intro = () => {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  return (
    <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
            <img
              src="Rlogo.png"
              width={60}
              alt="Float UI logo"
            />
          <button className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {
              state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )
            }
          </button>
        </div>
        <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          </div>
          <li className="order-2 py-5 md:py-0">
            <a href="javascript:void(0)" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline">
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              Hi! I AM RAJESH PATEL
            </h2>
            <p>
              A Self Thought Full Stack Web Developer
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                className="inline-block rounded border border-indigo-600 px-12 py-3 text-md font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                href="https://drive.google.com/file/d/1en2EulqtjIgeDRMKHjsC0d3CliYg8sqP/view?usp=drive_link"
              >
                Resume
              </a>
            </div>
            <ul className="mt-8 flex justify-start gap-2 sm:mt-0 ">
              {
                footer.map(item => (
                  <li key={item.Title} className="border rounded-lg p-2">
                    <a
                      href={item.link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{item.Title}</span>

                      <svg className="h-6 w-6" fill="currentColor" viewBox={item.viewBox} aria-hidden="true">
                        <path
                          fill-rule="evenodd"
                          d={item.Path}
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                ))
              }

            </ul>


          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-lg">
            <img
              src="/profile.png" className=" md:rounded-tl-[108px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Intro;
