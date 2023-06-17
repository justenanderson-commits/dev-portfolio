import ProjCard from '../ProjCard/ProjCard'

// Current issue is that my projects link now works. It is rendering correctly.
//But the home page no longer loads correctly. 
// Something about the differently destructured props between when the home page loads vs when the project page is rendered by the header is creating the issue.


const ProjContainer = ({ myInfo }) => {
  const showProjects = () => {
    return myInfo.projects.map((project) => {
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
  return (
    <div className="grid grid-cols-3 gap-12 border-white">{showProjects()}</div>
  )
}

export default ProjContainer
