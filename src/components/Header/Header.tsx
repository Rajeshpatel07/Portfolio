import React, { useMemo, useState, lazy } from 'react'
import Headlinks from '../../Data/Headlink.json'
const SidePanel = lazy(() => import('./SidePanel'));
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";

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
        <motion.a href="/" aria-label="Back to homepage" className="flex items-center p-2 aspect-square"
          variants={straggeringVarients}
          initial="initial"
          animate="animate"
        >
          <img src="Rlogo.png" alt="logo" />
        </motion.a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          {
            Headlinks.map((link, index) => (
              <motion.button className="flex" key={link.Id}
                variants={straggeringVarients}
                initial="initial"
                animate="animate"
                custom={index}
              >
                <Link to={link.Title}
                  spy={true} smooth={true} duration={500}
                  className="flex items-center text-black dark:text-white text-xl px-4 -mb-1 dark:border- hover:text-violet-500"
                >{link.Title}</Link>
              </motion.button>

            ))
          }
        </ul>
        <motion.div className='flex gap-3 items-center z-10'
          variants={straggeringVarients}
          initial="initial"
          animate="animate"
        >
          <div>
            {mode ?
              <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handleTheme}>
                <path style={{ color: "black" }}
                  d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z" />
              </svg>
              :
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handleTheme}>
                <path style={{ color: "white" }}
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            }
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <a href='https://www.linkedin.com/in/rajesh-patel-046786291' target='_blank' className="self-center px-8 py-3 font-semibold rounded-3xl bg-violet-600 text-gray-900 dark:text-gray-50">Let's Talk  </a>
          </div>

          <SidePanel />
        </motion.div>
      </div>
    </header>
  )
}

export default Header
