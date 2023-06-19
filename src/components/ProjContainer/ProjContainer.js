const ProjContainer = ({ showProjects }) => {
  return (
    <div className="grid grid-cols-3 gap-12 border-white">{showProjects()}</div>
  )
}

export default ProjContainer
