import ProjContainer from "../ProjContainer/ProjContainer";

const Projects = ({ myInfo }) => {
  return (
    <div className="text-slate-100 text-2xl w-full  h-screeh-9/10 bg-slate-900 p-8 px-12 flex flex-col">
      <h1 className="text-7xl text-center pb-2">Projects</h1>
        <ProjContainer myInfo={ myInfo } />
    </div>
  );
}
 
export default Projects;