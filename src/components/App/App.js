import React from 'react'
import './App.css'
import Header from '../Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Main'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import data from '../../api/dummy_data'
import { useState, useEffect } from 'react'
import ProjCard from '../ProjCard'
import EduCard from '../EduCard'

const App = () => {
  const [allInfo, setAllInfo] = useState({})
  const [projects, setProjects] = useState([])
  const [about, setAbout] = useState('')
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  useEffect(() => {
    setAllInfo(data)
    setProjects(data.projects)
    setAbout(data.about)
    setEducation(data.education)
    setExperience(data.experience)
  }, [])

  const showProjects = () => {
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

  const showEducation = () => {
    return education.map((education) => {
      return (
        <EduCard
          school={education.school}
          location={education.location}
          startDate={education.startDate}
          endDate={education.endDate}
          program={education.program}
        />
      )
    })
  }

  return (
    <div className="App">
      <Router>
        <Header showProjects={showProjects} />
        <Routes>
          <Route
            path="/"
            element={<Main allInfo={allInfo} showProjects={showProjects} />}
          />
          <Route
            path="/about"
            element={
              <About
                about={about}
                experience={experience}
                showEducation={showEducation}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects projects={projects} showProjects={showProjects} />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
