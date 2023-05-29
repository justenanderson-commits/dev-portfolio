import ProjCard from "../ProjCard/ProjCard";

const Projects = ({ myInfo }) => {
  // console.log('Props: ', myInfo)
  return (
    <div className="text-slate-100 text-2xl w-full  h-screeh-9/10 bg-slate-900 p-8 px-12 flex flex-col">
      <h1 className="text-7xl text-center pb-2">Projects</h1>
      <div className="grid grid-cols-3 gap-12">
      <ProjCard myInfo={ myInfo }/>
      </div>
    </div>
  );
}
 
export default Projects;