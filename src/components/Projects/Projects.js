import ProjCard from "../ProjCard/ProjCard";

const Projects = () => {
  return (
    <div className="text-slate-100 text-2xl w-full h-screen h-9/10 bg-slate-900 pt-20 flex flex-col items-center">
      <h1 className="text-7xl text-center pb-5">Projects</h1>
      <div className="grid grid-cols-2 gap-4 items-center">
      <ProjCard />
      <ProjCard />
      <ProjCard />
      <ProjCard />
      </div>
    </div>
  );
}
 
export default Projects;