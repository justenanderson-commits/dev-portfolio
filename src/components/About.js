import Education from './Education'
import Experience from './Experience'
import CertsAwards from './CertsAwards'
import { Button } from '@material-tailwind/react'

const About = ({ about, experience }) => {
  return (
    <div className="text-slate-900 text-2xl w-full min-h-9/10 bg-white mb-6">
      <h1 className="text-5xl lg:text-7xl text-center pb-2 mt-8">About</h1>
      <div className="mx-8 lg:mx-36 mt-2">
        { about } </div>
      <Education />
      <Experience experience={ experience } />
      <CertsAwards />
       <div className="mx-auto flex justify-center">
          <a
          href='https://docs.google.com/document/d/1zc4RyV_xqZarW5EjT7jbxJ0ud1fO1sfL3iI6zLXDuGk/edit?usp=sharing'
          target='blank'
          >
          <Button className="text-sky-600 border-sky-600 bg-white" variant="outlined">
            Resume
          </Button>
          </a>
        </div>
    </div>
  )
}

export default About
