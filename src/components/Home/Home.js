import { Button } from '@material-tailwind/react'

const Home = ({ myInfo }) => {
  const handleLearnMore = () => {
    const element = document.querySelector('.about')
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      id="home-page"
      className="relative home-page text-slate-100 text-2xl min-h-screen bg-slate-900 pt-20 flex flex-col items-center"
    >
      <h1 className="text-7xl text-center pb-5">Justen Anderson</h1>
      <h2 className="text-4xl text-center text-sky-300">Software Developer</h2>
      <p className="text-slate-300 pt-5 px-32 text-left">
        {myInfo.homeSummary}
      </p>
      <div className="mt-24 ">
        <Button
          onClick={handleLearnMore}
          className="mb-36 text-sky-300 border-sky-400"
          variant="outlined"
        >
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default Home
