import './tasks.css'
import TaskManager from './TaskManager';

function CleanFlow () {
  return (
    <>
      <div className="container">
        <h2 className='logo'><img src="./CleanFlowIcon.png" alt="logo" />
        <span>CleanFlow</span> TASK MANAGER</h2>
        <TaskManager/>
      </div>
    </>
  )
}
export default CleanFlow;