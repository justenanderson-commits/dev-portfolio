import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return <div className='main relative'>
    <Home />
    <About  />
    <Projects />
    <Contact />
  </div>
}

export default Main
