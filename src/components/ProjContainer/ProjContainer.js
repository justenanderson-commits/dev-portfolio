import ProjCard from '../ProjCard/ProjCard'

const ProjContainer = ({ myInfo }) => {
  const showProjects = () => {
    return myInfo.projects.map((project) => {
      return (
        <ProjCard
          name={project.name}
          description={project.description}
          image ={ project.img }
          id={project.name}
          key={project.name}
        />
      )
    })
  }
  return <div className="grid grid-cols-3 gap-12 border-white">
    {showProjects()}
  </div>
}

export default ProjContainer
