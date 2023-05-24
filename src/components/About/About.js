import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import CertsAwards from '../CertsAwards/CertsAwards'

const About = () => {
  return (
    <div className="text-slate-900 text-2xl w-full h-screen h-9/10 bg-white pt-10">
      <h1 className="text-7xl text-center pb-5">About</h1>
      <div className="mx-36 mt-8">I am a kind, hard-working, team-player with success in the military, education, and private industry. Collaborating, mentoring, and learning from others drive my achievements. Honesty, deep connections, and achievement matter to me. I am a passionate learner, always seeking new skills and experiences. I eagerly research and practice to develop new skills. I thrive on complex challenges and take pride in overcoming obstacles. Excellence, integrity, and service guide me. My purpose is to enhance lives through improved products and processes. </div>
      <Education />
      <Experience />
      <CertsAwards />
    </div>
  )
}

export default About
