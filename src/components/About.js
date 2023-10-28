import Education from './Education'
import Experience from './Experience'
import CertsAwards from './CertsAwards'
import { Button } from '@material-tailwind/react'

const About = ({ about, experience, showEducation }) => {
  return (
    <div className="text-slate-900 text-2xl w-full min-h-screen bg-white mb-6">
      <h1 className="text-5xl lg:text-7xl text-center pb-2 mt-8">About</h1>
      <p className="mx-8 lg:mx-36 mt-2">{about} </p>
      <Education showEducation={showEducation} />
      <Experience experience={experience} />
      <CertsAwards />
      <div className="mx-auto flex justify-center">
        <a
          href="https://drive.google.com/file/d/1K2achteTrRLdIhtUZKZe8VWj9mPvF5s4/view?usp=sharing"
          target="blank"
        >
          <Button
            className="text-sky-600 border-sky-600 bg-white"
            variant="outlined"
          >
            See my resume
          </Button>
        </a>
      </div>
    </div>
  )
}

export default About
