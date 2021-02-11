import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'React installation',
        day:'Feb 5th',
        reminder: true,
    },
    {
        id:2,
        text:'flutter installation',
        day:'Feb 6th',
        reminder: false,
    },])

    const addTask = (task) =>{
      const id = Math.floor(Math.random() * 10000) +1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id ))
    }

  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      />
      {showAddTask && <TaskForm  onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} Delete={deleteTask} />)
      :('All Done')
      }

    </div>
  );
}

export default App;
