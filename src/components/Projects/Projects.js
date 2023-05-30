// import ProjCard from "../ProjCard/ProjCard";
import ProjContainer from "../ProjContainer/ProjContainer";

const Projects = ({ myInfo }) => {
  // const showProjects = () => {
  //   myInfo.projects.map(project => {
  //     console.log('Project name: ', project.name)
  //     return <ProjCard 
  //       name={ project.name }
  //       description={ project.description }
  //       />
  //   })
  // }


  return (
    <div className="text-slate-100 text-2xl w-full  h-screeh-9/10 bg-slate-900 p-8 px-12 flex flex-col">
      <h1 className="text-7xl text-center pb-2">Projects</h1>
      <div className="grid grid-cols-3 gap-12 border-white">
        <ProjContainer myInfo={ myInfo } />
      {/* { showProjects() } */}
      {/* <ProjCard 
        name={  myInfo.projects[0].name }
        description={ myInfo.projects[0].description }
        /> */}
      </div>
    </div>
  );
}
 
export default Projects;