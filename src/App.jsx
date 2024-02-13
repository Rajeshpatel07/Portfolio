import { Footer, Intro, Projects, Skills } from './components/index'

function App() {
  return (
    <>
      <div className="mockup-window h-screen bg-oilblack">
        <div className="flex flex-col h-screen overflow-auto bg-base-200 dark:dark:dark:bg-gray-900">
          <Intro />
          <Projects />
          <Skills />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
