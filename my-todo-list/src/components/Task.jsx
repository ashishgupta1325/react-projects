
function Tasks({maintainList}) {
    return (
        <>
            <div>
                <htmlFor>Please add your task here</htmlFor>
                <input type="text"/>
            </div>
            <button onClick={maintainList}>Add Task</button>
        </>
    )
}

export default Tasks;