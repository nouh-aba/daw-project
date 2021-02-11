import Task from './Task'


const Tasks = ({ tasks, Delete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} Delete={Delete} />  
            ))}
        </>
    )
}

export default Tasks
