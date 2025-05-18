function TasksList({ tasks, removeTask }) {

  return (
    <ul>
      {tasks.map((task, idx) => (
        <div>
            <li key={idx}>{task}</li>
            <button onClick={() => removeTask(idx)}>remove</button>
        </div>
      ))}
    </ul>
  );
}

export default TasksList;