import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import CertsAwards from '../CertsAwards/CertsAwards'

const About = ({ about, experience }) => {
  return (
    <div className="relative about text-slate-900 text-2xl w-full min-h-screen h-auto h-9/10 bg-white">
      <h1 className="about-title text-7xl text-center pb-2 mt-8">About</h1>
      <div className="mx-36 mt-8">
        { about } </div>
      <Education />
      <Experience experience={ experience } />
      <CertsAwards />
    </div>
  )
}

export default About
