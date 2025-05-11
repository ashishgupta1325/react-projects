function TasksList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, idx) => (
        <li key={idx}>{task}</li>
      ))}
    </ul>
  );
}

export default TasksList;