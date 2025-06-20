export default function Task({...items}){
  return(
     <>
        <details className="task">
        <summary>
          <div className="task-meta">
            <input type="checkbox" name="" id="" />
            <h3>{items.taskTitle} <span> (see details)</span></h3>
          </div>
        </summary>
        <span className="task-description"> 
         {items.taskDescription}
        </span>
      </details>
    </>
  )
}