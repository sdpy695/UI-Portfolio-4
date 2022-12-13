
import {useState} from "react"
import {useEffect} from "react"
import projects from "../assets/projects"
import Project from "./Project"


export default function WorkGallery(props)  {
  

    return(
        <div className= "workGallery">
             {projects.map((project) => ( // TODO: map bakeryData to BakeryItem components
            Project(project) ))}
             
        
        </div>
        
    )   

}