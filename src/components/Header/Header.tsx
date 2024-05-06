import React, { useMemo, useState,lazy } from 'react'
import Headlinks from '../../Data/Headlink.json'
const SidePanel=lazy(()=>import('./SidePanel'));
import {motion} from 'framer-motion';


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
    <header className="p-4  w-[99vw] absolute top-0">
      <div className="container flex justify-between h-16 mx-auto">
        <motion.a  href="/" aria-label="Back to homepage" className="flex items-center p-2 aspect-square"
variants={straggeringVarients}
              initial="initial"
              animate="animate"
        >
          <img src="Rlogo.png" alt="logo" />
        </motion.a>

        <ul className="items-stretch hidden space-x-3 lg:flex">
          {
            Headlinks.map((link,index) => (
              <motion.li className="flex" key={link.Id}
              variants={straggeringVarients}
              initial="initial"
              animate="animate"
              custom={index}
              >
                <a rel="noopener noreferrer" href={`#${link.Title}`} className="flex items-center text-white text-xl px-4 -mb-1 dark:border- hover:text-violet-500">{link.Title}</a>
              </motion.li>

            ))
          }

        </ul>
        <motion.div className='flex gap-3 items-center'
              variants={straggeringVarients}
              initial="initial"
              animate="animate"
        >
          <div>
            {mode ?
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handleTheme}>
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              :
              <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handleTheme}>
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            }
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded-3xl bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Let's Talk  </button>
          </div>

          <SidePanel />
        </motion.div>

      </div>
    </header>
  )
}

export default Header
