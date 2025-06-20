import { MdDelete } from "react-icons/md";
export default function Task({...items}){
  return(
     <>
        <details className="task">
        <summary className="task-summary">
          <div className="task-meta">
            <input type="checkbox" name="" id="" />
            <h3>{items.taskTitle} <span> (see details)</span></h3>
            <MdDelete className="delete-icon" onClick={items.handleDelete}/>
          </div>
        </summary>
        <span className="task-description"> 
         {items.taskDescription}
        </span>
      </details>
    </>
  )
}