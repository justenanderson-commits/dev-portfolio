import React from 'react'
import './App.css'
import Header from '../Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import data from '../../api/dummy_data'
import { useState, useEffect } from 'react'
import ProjCard from '../ProjCard/ProjCard'

const App = () => {
  const [projects, setProjects] = useState([])
  const [homeSummary, setHomeSummary] = useState([])

  useEffect(() => {
    setProjects(data.projects)
    setHomeSummary(data.homeSummary)
  }, [])
  

  // This can be deleted
  useEffect(() => {
    console.log('Projects updated: ', projects);
    console.log('Home Summary updated: ', homeSummary);
  }, [projects]);
  //
  

  const showProjects = () => {
    console.log('Projects from app: ', projects)
    return projects.map((project) => {
      return (
        <ProjCard
          name={project.name}
          description={project.description}
          image={project.img}
          url={project.url}
          id={project.name}
          key={project.name}
        />
      )
    })
  }

  return (
    <div className="App">
      <Router>
        <Header
          myInfo={data}

          showProjects={ showProjects }
        />
        <Routes>
          <Route path="/" element={<Main homeSummary={ homeSummary } myInfo={data} />} />
          <Route path="/about" element={<About myInfo={data} />} />
          <Route path="/projects" element={<Projects showProjects={ showProjects } />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
