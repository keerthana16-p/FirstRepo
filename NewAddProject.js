import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


const NewAddProject = ({ createproject }) => {
    //Project
    const [userInput, setUserInput] = useState({})

    const handleChange = e => {
        setUserInput({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (userInput.task === '') {
            alert('Please enter the project')
        } else {
            const newProject = { id: uuid(), task: userInput.task }
            createproject(newProject)
            setUserInput({ task: '' })
        }
    }

    return (
        <div>
        <form className='Project' onSubmit={handleSubmit} style={{display:'inline-block', marginRight:'50px'}}>
            <div>
            <h4>Project Name</h4>
            <input
                value={userInput.project}
                onChange={handleChange}
                type='text'
                name='project'
                placeholder='Project Name'
            />
            <button>Add Project</button>
            </div>
        </form>
        </div>
    )
}

export default NewAddProject