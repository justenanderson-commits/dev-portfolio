import ProjCard from '../ProjCard/ProjCard'

const ProjContainer = ({ myInfo }) => {
  const showProjects = () => {
    return myInfo.projects.map((project) => {
      return (
        <ProjCard
          name={project.name}
          description={project.description}
          id={project.name}
          key={project.name}
        />
      )
    })
  }
  return <div className="proj-container">{showProjects()}</div>
}

export default ProjContainer
