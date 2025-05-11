import { useState } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList';
function App() {
  const [tasksText, setTasksText] =  useState([])

  function maintainList() {
    setTasksText((prevList) => [...prevList, newTask])
  }

  return (
    <>
      <Task onAddTask={maintainList} />
      <TasksList tasks={tasksText} />
    </>
  )
}

export default App;