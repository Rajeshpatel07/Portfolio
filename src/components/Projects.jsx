import { ProjectsDis } from "../DB/ProjectDis"
import { LazyLoadImage } from "react-lazy-load-image-component";


function Projects() {
  return (
    <div className="py-10 px-8 bg-obsidian">
      <div className="mx-2 mb-15 mt-8 flex justify-center itmes-center">
        <h1 className="text-7xl font-serif text-white">Projects</h1>
      </div>
      <div className="flex items-center justify-around flex-wrap py-8 gap-5 md:gap-5">

        {
          ProjectsDis.map((pro) => (
            <div key={pro} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden sm:max-w-xl md:max-w-xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <LazyLoadImage className="h-48 w-full object-cover md:w-48" src={pro.img} alt={pro.img} />
                </div>
                <div className="p-8">
                  <a href={pro.url} target='_blank' className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{pro.Title}</a>
                  <p className="mt-2 text-slate-500">{pro.description}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default Projects
