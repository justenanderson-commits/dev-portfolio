const ProjContainer = ({ showProjects }) => {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-12 border-white">{showProjects()}</div>
  )
}

export default ProjContainer
