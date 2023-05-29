import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import data from "../../api/dummy_data"

const Main = () => {
  console.log('Data: ', data)
  return <div className='main relative'>
    <Home myInfo={ data }/>
    <About  />
    <Projects data={ data }  />
    <Contact />
  </div>
}

export default Main
