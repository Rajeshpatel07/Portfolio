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
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-end p-4">
                  <button
                    className="-m-2.5 border rounded-md px-5 py-2 text-gray-700"
                    onClick={() => setIsOpen(prev => !prev)}
                  >
                    close
                  </button>
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
                            className="-mx-3 block rounded-lg px-3 py-2 text-center text-md font-bold leading-7 text-gray-900 hover:bg-gray-50"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
        }
      </div>
    </>
  )
}

export default SidePanel
