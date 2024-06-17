import React, { useMemo, useState, lazy } from 'react'
import Headlinks from '../../Data/Headlink.json'
const SidePanel = lazy(() => import('./SidePanel'));
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const htmlElement = useMemo(() => document.querySelector('html'), []);
  const [mode, setMode] = useState<boolean>(false);

  const handleTheme = () => {
    setMode(prev => !prev);
    if (!mode) {
      htmlElement?.classList.remove('dark');
      htmlElement?.classList.add('light');
    } else {
      htmlElement?.classList.remove('light');
      htmlElement?.classList.add('dark');

    }
  }

  const straggeringVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * index
      }
    })
  }

  return (
    <header className="">
      <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 w-12 md:w-16" href="#">
              <span className="sr-only">Home</span>
              <img src='Rlogo.png' className='w-full h-full' />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-black font-serif text-bold text-xl transition hover:text-gray-500/75" href="#"> About </a>
                </li>

                <li>
                  <a className="text-black font-serif text-bold text-xl transition hover:text-gray-500/75" href="#"> Skills</a>
                </li>

                <li>
                  <a className="text-black font-serif text-bold text-xl transition hover:text-gray-500/75" href="#"> Services </a>
                </li>

                <li>
                  <a className="text-black font-serif text-bold text-xl transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>

              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex ">

                <button className="border w-36 h-12 hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden rounded-xl bg-sky-200 p-2 flex justify-center items-center font-extrabold">

                  <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                  <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
                  <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
                  <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
                  <p className="z-10">Let's Talk</p>
                </button>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
