import { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectService from "./services/ProjectService";
import "./App.css"

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectService.getProjects());
  }, []);

  const refreshProjects = () => {
    setProjects(ProjectService.getProjects());
  };

  return (
    <div>
      <h1>Zarządzanie projektami</h1>
      <ProjectForm onProjectAdded={refreshProjects} />
      <ProjectList projects={projects} onProjectDeleted={refreshProjects} onProjectUpdated={refreshProjects} />
    </div>
  );
};

export default App;
