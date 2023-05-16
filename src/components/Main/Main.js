import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

const Main = () => {
  return <div className='main'>
    <h1 className="text-3xl font-bold underline">
    Tailwind Installed Successfully!
  </h1>
    <Home />
    <About  />
    <Contact />
    <Education />
    <Experience />
    <Projects />
  </div>
}

export default Main
