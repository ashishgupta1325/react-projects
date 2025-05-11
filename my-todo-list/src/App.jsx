import { useState } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList';
function App() {
  const [tasksText, setTasksText] =  useState([])

  function addTask(newTask) {
    setTasksText((prevList) => [...prevList, newTask])
  }

  return (
    <>
      <Task addTask={addTask} />
      <TasksList tasks={tasksText} />
    </>
  )
}

export default App;