import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'


const Main = ({ myInfo, homeSummary }) => {
  return <div className='main relative'>
    <Home homeSummary={ homeSummary } />
    <About  myInfo={ myInfo } />
    <Projects myInfo={ myInfo }  />
    <Contact />
  </div>
}

export default Main
