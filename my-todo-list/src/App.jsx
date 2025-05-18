import { useState } from 'react';
import Task from './components/Task'
import TasksList from './components/TasksList';

function App() {
  const [tasksText, setTasksText] =  useState([])

  function addTask(newTask) {
    setTasksText((prevList) => [...prevList, newTask])
  }

  function removeTask(indextoremove){
    setTasksText((prevLists) => prevList.filter((_,idx) => idx !== indextoremove))
  }

  return (
    <>
      <Task addTask={addTask} />
      <TasksList tasks={tasksText} removeTask={removeTask}/>
    </>
  )
}

export default App;