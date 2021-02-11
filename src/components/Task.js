import { FaTimes } from 'react-icons/fa'

const Task = ({ task, Delete }) => {

    return (
        <div className='task'>
            <h3>{task.text} <FaTimes onClick={() => Delete(task.id)}  style={{ cursor:'pointer'}}/> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
