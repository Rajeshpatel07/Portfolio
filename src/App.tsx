import React from 'react'
import { About, Intro, Projects, Skills, Testimonial, Footer } from './components'
import Header from './components/Header/Header'

const App: React.FC = () => {

  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
