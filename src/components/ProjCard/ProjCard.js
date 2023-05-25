import menuify_sm from '../../assets/menuify_300x500.png'

const ProjCard = () => {
  return (
    <div className="max-w-lg border-white border-2 rounded-xl mx-auto my-10">
      <h2 className="text-1xl text-center text-sky-300 pt-2">Menuify</h2>
      <p className="text-slate-300 py-5 px-5 text-left">
        Menu application for restaurant owners to create beautiful, intuitive
        menus.
      </p>
      <img src={ menuify_sm } className='w-full object-fit' />
    </div>
  )
}

export default ProjCard
