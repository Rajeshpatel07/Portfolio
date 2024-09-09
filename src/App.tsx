import React from 'react'
import { About, Intro, Projects, Skills, Footer } from './components'

const App: React.FC = () => {

  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
