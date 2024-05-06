import React,{useRef} from "react";
import Socials from '../../Data/Socials.json'
import Contact from '../../Data/Contact.json'
import {motion,useTransform,useScroll} from 'framer-motion'

const Footer: React.FC = () => {
const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"]
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <>
      <motion.div className="px-5"
      ref={ref}
      style={{
        scale:scaleProgess,
        opacity:scaleProgess
      }}
      >
        <section className="flex gap-2 py-8 items-center justify-center">
          <div className="h-1 w-[60vw] bg-orange-500"></div>
          <h1 className="text-3xl font-bold whitespace-nowrap dark:text-white">Contact Me</h1>
          <div className="h-1 w-[60vw] bg-orange-500"></div>
        </section>
        <section className="mx-auto py-10 ">
          <ul className="flex  justify-center items-center flex-wrap gap-3">
            {
              Contact.map(item => (
                <li key={item.Title} className="px-6 py-4 flex items-center gap-2 text-md bg-gray-200 dark:bg-gray-700 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} fill="currentColor" className="w-5 h-5">
                    <path d={item.path}></path>
                  </svg>
                  <p className="text-lg dark:text-white">{item.Title}</p>
                </li>
              ))
            }
          </ul>
        </section>
        <section className="flex gap-2 py-8 items-center justify-center">
          <div className="h-1 w-[60vw] bg-orange-500 "></div>
          <ul className="flex items-center gap-2">
            {
              Socials.map(icon => (
                <li key={icon.Title}>
                  <a href="#" title={icon.Title} className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox} fill="currentColor" className="w-5 h-5">
                      <path d={icon.Path}></path>
                    </svg>
                  </a>

                </li>
              ))
            }
          </ul>
          <div className="h-1 w-[60vw] bg-orange-500"></div>
        </section>
      </motion.div>
    </>
  )
}

export default Footer;
