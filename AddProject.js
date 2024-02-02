import React, { useState } from 'react'
import NewAddProject from './NewAddProject'

 const AddProject = () =>{ 
        const [projects, setprojects] = useState([])
        const [Tasks,setTasks] = useState([])
    //Project
        const create = newProject => {
            setprojects([...projects, newProject])
        }
        console.log(projects)
    
        const projectsList = projects.map(project => (
            <project
                key={project.id}
                project={project}
            />
        ))
    
        console.log(projects)
    return(
           <div style={{display:'inline-block',alignItems:'center'}}>
             <h1>Time Sheet</h1>
             <NewAddProject createproject = {create}/>
             {/* parent component pass value to the child component as props */}
             <ul>{projectsList}</ul>
           </div>
    )
}

export default AddProject
