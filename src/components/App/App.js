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
import ProjCard from '../ProjCard/ProjCard'

const App = () => {
  const [allInfo, setAllInfo] = useState({})
  const [projects, setProjects] = useState([])
  const [about, setAbout] = useState('')
  const [experience, setExperience] = useState([])

  useEffect(() => {
    setAllInfo(data)
    setProjects(data.projects)
    setAbout(data.about)
    setExperience(data.experience)
  }, [])

  useEffect(() => {
    console.log('Updated exp from app: ', experience )
  })

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

  const showExperience = () => {
    return experience.map( exp => {
      // WIP - At this point, I need to pass the showExperience function down the Experience component so that it will render inside of the Experience accordian. Currently the ExpCard is only rendering the placeholder text. But by passing down the function, I should be able to programmatically populate the Experience card.
      return 

    })
  }
  // Each component ideally only gets what it needs
  // Balance that rule with readability, show dev empathy
  // Load onClick? Or load all as we go?
  // Only load data when you need it - slower but fewer API calls
  // Twilio microservice for the email contact form?
  // Yes to MicroModal

  return (
    <div className="App">
      <Router>
        <Header showProjects={showProjects} />
        <Routes>
          <Route
            path="/"
            element={<Main allInfo={allInfo} showProjects={showProjects} />}
          />
          <Route path="/about" element={<About about={about} experience={ experience } />} />
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
