import {useState} from "react";
import Project from "../models/project"
import ProjectService from "../services/ProjectService";
const ProjectForm= ({onProjectAdded}) => {
    const [name, setName]=useState("");
    const[description, setDescription] = useState("");
    const handleSubmit= (e)=> {
        e.preventDefault();
        const newProject=new Project(Date.now(), name, description);
        ProjectService.addProject(newProject);
        onProjectAdded();
        setName("");
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Nazwa projektu"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
            />
            <textarea
            placeholder="Opis projektu"
            value="description"
            onChange={(e)=> setDescription(e.target.value)}
            required
            />
            <button type="submit">Dodaj</button>
         </form> 
            
            
    );
};
export default ProjectForm;