import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import { Outlet } from 'react-router-dom'
import data from "../../api/dummy_data"

const Main = () => {
  console.log('Data: ', data)
  return <div className='main relative'>
    <Home />
    <About  />
    <Projects />
    <Contact />
  </div>
}

export default Main
