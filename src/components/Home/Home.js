import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="text-slate-100 text-2xl min-h-screen bg-slate-900 pt-20 flex flex-col items-center">
      <h1 className="text-7xl text-center pb-5">Justen Anderson</h1>
      <h2 className="text-4xl text-center text-sky-300">Software Engineer</h2>
      <p className="text-slate-300 pt-5 px-32 text-left">
        Passionate learner and hard worker with a strong record of success in
        the military, education, and private industry. I value honesty, deep
        connections, and achievement. I love collaborating, mentoring, and
        learning from others. Pair-programming is preferred. Complex technical
        challenges excite me, and I work to purposefully improve products,
        processes, and the lives of other people.
      </p>
      <div className="mt-24 ">
      <Button className='text-sky-300 border-sky-400' variant="outlined">Learn More</Button>
      </div>
    </div>
  )
}

export default Home
