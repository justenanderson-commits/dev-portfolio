import React from 'react'
import './App.css'
import Header from '../Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import data from '../../api/dummy_data copy'


const App = () => {
  console.log('Data from App: ', data)
  return (
    <div className="App">
      <Router>
        <Header myInfo={ data }/>
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
