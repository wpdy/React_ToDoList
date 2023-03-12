import { useState } from 'react'

import FormForTask from './FormForTask'
import TableForTasks from './TableForTasks'

const ToDoMain = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Clean your room',
            isCompleted: false
        },
        {
            id: 2,
            text: 'Do your HomeWork',
            isCompleted: true
        },
        {
            id: 3,
            text: 'Go to the Cinema',
            isCompleted: false
        }
    ])

// console.log(tasks)


    const addToDoNewTask = (text) => {
        const temVar = [...tasks, {text, isCompleted: false}]
        setTasks(temVar)
    }

    return (
        <div>
            <h1>ToDoList</h1>
            <TableForTasks list={tasks}/>
            <FormForTask addToDoNewTask={addToDoNewTask}/>
        </div>
    )
}


export default ToDoMain