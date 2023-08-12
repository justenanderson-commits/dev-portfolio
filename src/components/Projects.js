import ProjContainer from './ProjContainer/ProjContainer'

const Projects = ({ projects, showProjects }) => {
  return (
    <div className="text-slate-100 text-xl w-full  h-screen-9/10 bg-slate-900 p-8 px-12 flex flex-col">
      <h1 className="text-5xl lg:text-7xl text-center lg:pb-2">Projects</h1>
      <ProjContainer projects={projects} showProjects={showProjects} />
    </div>
  )
}

export default Projects
