import { useState } from 'react'


const TaskForm = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Plz add task')
            return
        }

        onAdd({ text,day})

        setText('')
        setDay('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type="text" 
                    placeholder='To-DO'
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Deadline</label>
                <input 
                type="text" 
                placeholder='Duo Date' 
                value={day} 
                onChange={(e) => setDay(e.target.value)}/>
            </div>

            <input type="submit" value="Add Task" className='btn btn-block' />
        </form>
    )
}

export default TaskForm
