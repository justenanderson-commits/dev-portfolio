import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import data from '../../api/dummy_data'

const Main = ({ myInfo }) => {
  console.log('My Info: ', myInfo)
  return <div className='main relative'>
    <Home myInfo={ data }/>
    <About  myInfo={ data }/>
    <Projects myInfo={ data }  />
    <Contact />
  </div>
}

export default Main
