class ProjectService{
    static getProjects(){
        const projects=JSON.parse(localStorage.getItem("projects")) || [];
        return projects;
    }

static addProject(project)
{
    const projects=this.getProjects();
    projects.push(project);
    localStorage.setItem("projects",JSON.stringify(projects));
}
static updateProject(updatedProject)
{
    const projects=this.getProjects().map((proj) => proj.id===updatedProject.id ? updatedProject : proj); 
    localStorage.setItem("projects", JSON.stringify(projects));
}
static deleteProject(id)
{
    const projects=this.getProjects().filter((proj) =>proj.id!==id);
    localStorage.setItem("projects", JSON.stringify(projects));
}
}
export default ProjectService;