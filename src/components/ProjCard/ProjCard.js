import menuify_sm from '../../assets/menuify_300x500.png'

const ProjCard = ({ name, description }) => {
  // console.log('Data from ProjCard: ', myInfo)
  // console.log('Project Name: ', myInfo.projects[0].name)
  return (
    <div className="max-w-lg border-white border-2 rounded-xl mx-auto my-10">
      <h2 className="text-1xl text-center text-sky-300 pt-2">
        {name}
      </h2>
      <p className="text-slate-300 py-5 px-5 text-left">
        { description}
      </p>
      <img src={menuify_sm} className="w-full object-fit" />
    </div>
  )
}

export default ProjCard
