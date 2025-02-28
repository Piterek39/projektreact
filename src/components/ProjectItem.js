import { useState } from "react";
import ProjectService from "../services/ProjectService";
const ProjectItem=({project, onDelete, onUpdate})=> {
    const[isEditing, setIdEditing]= useState(false);
    const [name, setName]
}