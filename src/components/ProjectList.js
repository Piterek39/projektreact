import ProjectItem from "../components/ProjectItem";
const ProjectList=({projects, onProjectDeleted, onProjectUpdated})=>
{
    return(
        <div>
            {projects.length===0? <p>Brak projektów</p> : null
        }
        {projects.map((project)=> 
        (
            <ProjectItem
            key={project.id}
            project={project}
            onDelete={onProjectDeleted}
            onUpdate={onProjectUpdated}
            />
        ))}
        </div>
    );
};
export default ProjectList;