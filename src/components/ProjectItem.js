import { useState } from "react";
import ProjectService from "../services/ProjectService";

const ProjectItem = ({ project, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const handleUpdate = () => {
    const updatedProject = { ...project, name, description };
    ProjectService.updateProject(updatedProject);
    setIsEditing(false);
    onUpdate();
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <button onClick={handleUpdate}>Zapisz</button>
          <button onClick={() => setIsEditing(false)}>Anuluj</button>
        </>
      ) : (
        <>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <button onClick={() => setIsEditing(true)}>Edytuj</button>
          <button onClick={() => { ProjectService.deleteProject(project.id); onDelete(); }}>Usuń</button>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
