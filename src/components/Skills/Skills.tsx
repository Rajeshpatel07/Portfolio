import React from 'react'
import IconCloud from "../magicui/icon-cloud";
import { slugs } from '../../Data/links';


const Skills: React.FC = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h1 className="sm:text-5xl font-bold font-serif text-gray-900 text-3xl">MY SKILLS </h1>
        </header>
        <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg bg-background md:px-20 md:pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
}

export default Skills

