
import { useState } from "react";

function Task({ addTask }) {
    const [input, setInput] = useState('');
    function handleChange(e) {
        setInput(e.target.value)
    }
    function addTasks(){
        addTask(input)
    }
    return (
        <>
            <div>
                <label>Please add your task here</label>
                <input type="text" value={input} onChange={handleChange}/>
            </div>
            <button onClick={addTasks}>Add Task</button>
        </>
    )
}

export default Task;