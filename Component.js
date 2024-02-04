import React, { useState } from 'react';

const Component = () => {
  const [projectInput, setProjectInput] = useState('');
  const [taskInput, setTaskInput] = useState('');
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [dayValues, setDayValues] = useState({
    Mon: '',
    Tue: '',
    Wed: '',
    Thu: '',
    Fri: '',
  });
  const [total, setTotal] = useState(0);

  const handleProjectInputChange = (event) => {
    setProjectInput(event.target.value);
  };

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };
 
  const handleDayInputChange = (day, value) => {
    setDayValues({
      ...dayValues,
      [day]: value,
    });
  };

  const addProjectToList = () => {
    if (projectInput.trim() !== '') {
      setProjects([...projects, projectInput]);
      setProjectInput('');
    }
  };

  const addTaskToList = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  }; 

  const calculateTotal = () => {
    const values = Object.values(dayValues).filter(Boolean);
    const numericValues = values.map(Number);
    const sum = numericValues.reduce((acc, currentValue) => acc + currentValue, 0);
    setTotal(sum);
  };

  return (
    <>
      <h1>TIME SHEET</h1>

      {/* Container with Flexbox */}
      <div className='container'>
        {/* Project Section */}
        <div className='project'>
          <h4>Project Name</h4>
          <div className='input-container'>
          <input
            value={projectInput}
            onChange={handleProjectInputChange}
            type='text'
            name='project'
            placeholder='Project Name'
            className='add'
          />
          <button onClick={addProjectToList} className='add-button'>ADD</button>
          </div>
          <div className='list-box'>
          <ul>
            {projects.map((project, index) => (
              <li key={index} className='list-item'>{project}</li>
            ))}
          </ul>
          </div>
        </div>

        {/* Task Section */}
        <div className='task'>
          <h4>Task Name</h4>
          <div className='input-container'>
          <input
            value={taskInput}
            onChange={handleTaskInputChange}
            type='text'
            name='task'
            placeholder='Task Name'
            className='add'
          />
          <button onClick={addTaskToList} className='add-button'>ADD</button>
          </div>
          <div className='list-box'>
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className='list-item'>{task}</li>
            ))}
          </ul>
        </div>
        </div>
      <div className='Day'>
        <h4>Mon</h4>
        <input type='text' className='Days'  value={dayValues.Mon}
            onChange={(e) => handleDayInputChange('Mon', e.target.value)}></input>
      </div>
      <div className='Day'>
        <h4>Tue</h4>
        <input type='text' className='Days'  value={dayValues.Tue}
            onChange={(e) => handleDayInputChange('Tue', e.target.value)}></input>
      </div>
      <div className='Day'>
        <h4>Wed</h4>
        <input type='text' className='Days' value={dayValues.Wed}
            onChange={(e) => handleDayInputChange('Wed', e.target.value)}></input>
      </div>
      <div className='Day'>
        <h4>Thu</h4>
        <input type='text' className='Days' value={dayValues.Thu}
            onChange={(e) => handleDayInputChange('Thu', e.target.value)}></input>
      </div>
      <div className='Day'>
        <h4>Fri</h4>
        <input type='text' className='Days'  value={dayValues.Fri}
            onChange={(e) => handleDayInputChange('Fri', e.target.value)}></input>
      </div>
      <div className='Day'>
        <h4>Tot</h4>
        <input type='text' className='Days' value={total} readOnly></input>
      </div>
      <div>
       <button className='calculate'  onClick={calculateTotal}>CALCULATE</button>
      </div>
    </div> 
    </>
  );
};

export default Component; 



