const ProjCard = ({ name, description, image, url }) => {
  return (
    <a href={url} target="blank">
      <div className="max-w-lg border-white border-2 rounded-2xl mx-auto my-10 bg-sky-900">
        <h2 className="text-3xl text-center text-sky-100 pt-2">{name}</h2>
        <p className="text-2xl text-slate-200 py-3 px-3 lg:px-5 text-left">{description}</p>
        <img src={image} className="w-full object-fit" />
      </div>
    </a>
  )
}

export default ProjCard
