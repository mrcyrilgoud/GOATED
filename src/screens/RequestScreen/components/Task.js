import { FaTimes} from 'react-icons/fa'
const task = ({task,onDelete,onToggle}) => {
  return (
    <div className='task' >
        <h3>{task.text} 
        
        <FaTimes style = {FaTimesStyle}
        onClick={()=>onDelete(task.id)}
        
        />
        </h3>

        <p>{task.day}</p>
        <p>{task.status}</p>
    </div>
  )
}

const FaTimesStyle={
    color: 'Red',
    cursor: 'pointer',
}
export default task