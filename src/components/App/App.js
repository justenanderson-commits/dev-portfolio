import './App.css'
import Header from '../Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'



const App = ({ data }) => {
  console.log('myInfo: ', data)
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main myInfo={ data }/>} />
          <Route path="/about" element={<About myInfo={ data }/>} />
          <Route path="/projects" element={<Projects myInfo={ data }/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
