import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import CertsAwards from '../CertsAwards/CertsAwards'

const About = () => {
  return (
    <div className="about text-slate-900 text-2xl w-full min-h-screen h-auto h-9/10 bg-white">
      <h1 className="about-title text-7xl text-center pb-5 mt-14">About</h1>
      <div className="mx-36 mt-8">I am a hard-working, team-player with success in the military, education, and private industry. Collaborating, mentoring, and learning from others drive my achievements. Honesty, deep connections, and achievement matter to me. I am a passionate learner, always seeking new skills and experiences. I eagerly research and practice to develop new skills. I thrive on complex challenges and take pride in overcoming obstacles. Excellence, integrity, and service guide me. My purpose is to enhance lives through improved products and processes. </div>
      <Education />
      <Experience />
      <CertsAwards />
    </div>
  )
}

export default About
