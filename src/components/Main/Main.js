import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'


const Main = ( myInfo ) => {
  return <div className='main relative'>
    <Home myInfo={ myInfo } />
    <About  myInfo={ myInfo } />
    <Projects myInfo={ myInfo }  />
    <Contact />
  </div>
}

export default Main
