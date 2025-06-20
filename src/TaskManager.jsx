import Task from "./Task";
import { useState } from "react";

export const  randomId = () => crypto.randomUUID();

function TaskManager  () {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleAddTask(e) {
        e.preventDefault();
        if(!taskDescription || !taskTitle){
            alert("All task fields are required !!");
            return;
        }
        setTasks(previousTasks => [...previousTasks, {id:randomId(), taskTitle, taskDescription}])
    }
    return(
        <>
            <form action="">
                <div className='input-holder'>
                    <label htmlFor="taskTitle">Task Title</label>
                    <input type="text" id="taskTitle"
                    placeholder="Task Title..." className="task-title"
                    onChange={e => setTaskTitle(e.target.value)}
                    />
                </div>
                <div className="items">
                    <label htmlFor="taskDecription">Describe your task</label>
                    <textarea name="" id="taskDescription" 
                    placeholder="Describe your task..." 
                    onChange={e => setTaskDescription(e.target.value)}
                    className='task-description'
                    ></textarea>
                </div>
                    <button className="add-task" onClick={handleAddTask}>Add Task</button>
            </form>
            <div className="tasks-container">
             <h2>The Currently Scheduled tasks</h2>
             <div className="tasks-holder">
             {
                tasks? "No Tasks Added Yet!!":
                tasks.map(task => <Task {...task} />)
             }
             </div>
            </div>
        </>
    )
}
export default TaskManager;