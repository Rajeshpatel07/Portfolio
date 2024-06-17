import React from 'react'
import IconCloud from "../magicui/icon-cloud";

const slugs = [
  "cplusplus",
  "typescript",
  "javascript",
  "react",
  "redux",
  "nodedotjs",
  "express",
  "graphql",
  "html5",
  "css3",
  "tailwindcss",
  "prisma",
  "postgresql",
  "mysql",
  "mongodb",
  "redis",
  "docker",
  "vim",
  "neovim",
  "git",
  "github",
  "visualstudiocode",
  "linux",
];

const Skills: React.FC = () => {
  return (
    <>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-5xl font-bold font-serif text-gray-900 sm:text-3xl">MY SKILLS </h2>
          </header>
          <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg bg-background md:px-20 md:pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>

    </>
  );
}

export default Skills

