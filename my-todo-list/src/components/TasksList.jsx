import { useState } from "react";

function TaskList({tasks}) {
    return(
        <>
            <ul>
                {tasks.map((tasks, idx) => (
                    < li key={idx}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )

}

export default TasksList;