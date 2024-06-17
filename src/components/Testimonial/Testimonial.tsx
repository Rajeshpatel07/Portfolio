import React from 'react'

const Testimonial: React.FC = () => {

  return (

    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Testimonial
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src="https://t4.ftcdn.net/jpg/07/17/84/71/360_F_717847111_5dqQRbCOnSKiALUJzWHkjozKZAEQdVsf.jpg"
                className="size-14 rounded-full object-cover bg-center"
              />
              <h1 className='font-bold '>Adharsh Potharam</h1>
            </div>
            <p className="mt-4 text-gray-700">
              As a full stack developer in the MERN stack, Rajesh has consistently delivered exceptional results and innovative solutions for our projects.            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src="https://t4.ftcdn.net/jpg/07/17/84/71/360_F_717847111_5dqQRbCOnSKiALUJzWHkjozKZAEQdVsf.jpg"
                className="size-14 rounded-full object-cover"
              />
              <h1 className='font-bold '>Jathin chary</h1>
            </div>
            <p className="mt-4 text-gray-700">
              Rajesh's expertise in the MERN stack and their ability to create high-quality, functional applications have been invaluable to our team.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
