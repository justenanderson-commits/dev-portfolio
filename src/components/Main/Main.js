import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'


const Main = ({ allInfo, showProjects }) => {
  return <div className='main relative'>
    <Home homeSummary={ allInfo.homeSummary } />
    <About  about={ allInfo.about } experience={ allInfo.experience }/>
    <Projects projects={ allInfo.projects } showProjects={ showProjects } />
    <Contact />
  </div>
}

export default Main
