import { Frontnendlogos } from "../../DB/ApiImages"
import { LazyLoadImage } from "react-lazy-load-image-component"

function Skills() {
  return (
    <div className="px-8 py-10 bg-charcoalBlue">
      <div className="min-h-400">
        <div className="mx-2 mt-8 mb-16 flex justify-center itmes-center">
          <h1 className="text-7xl  font-serif  text-white">Skills</h1>
        </div>
        <div className="mx-3">
          <div className="flex items-center justify-center flex-wrap gap-5 lg:px-24">
            {
              Frontnendlogos.map((lang) => (
                <div key={lang.name} className="flex items-center justify-center flex-wrap rounded-xl h-32 w-32 hover:bg-midnightblue shadow-[0_20px_40px_-15px_midnightblue]">
                  <div className=" w-24 h-24 mt-5 rounded-xl flex flex-col items-center justify-center ">
                    <LazyLoadImage
                      src={lang.url} alt={lang.name}
                      className="aspect-square w-15 h-15"
                    />
                    <h1 className="text-white mt-3 font-sans font-normal">{lang.name}</h1>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
