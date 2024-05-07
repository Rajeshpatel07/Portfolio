import React, { useState } from 'react'
import Headlinks from '../../Data/Headlink.json'
import { motion } from 'framer-motion';

const SidePanel: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="lg:hidden" >
        {
          isOpen ?
            <>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className='flex justify-end mr-5'>
                  <svg className='w-8 h-8 bg-gray-100' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(prev => !prev)}>
                    <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                  </svg>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-3 p-6">
                      {
                        Headlinks.map(link => (
                          <motion.a key={link.Id}
                            href={`#${link.Title}`}
                            whileHover={{
                              scale: 1.05
                            }}
                            className="-mx-3 block rounded-lg px-3 py-2 text-center text-black dark:text-white text-md font-bold leading-7 text-gray-900 "
                          >{link.Title}</motion.a>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </>
            :
            <button className="p-4 lg:hidden" onClick={() => setIsOpen(prev => !prev)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                <path className='text-black dark:text-white' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
        }
      </div>
    </>
  )
}

export default SidePanel
