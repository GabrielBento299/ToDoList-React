import { TaskContainer, Title } from './styles';
import { FaTrash } from 'react-icons/fa';
import { ITasks } from '../../@types/Interface';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface ITaskProps {
    task: ITasks;
    deleteTask: (taskId: string) => void;
    toggleTaskCompleted: (taskId: string) => void;
}

export default function Task({ task, deleteTask, toggleTaskCompleted}: ITaskProps) {

    return (
        <TaskContainer>
        <main>
            <div className="card">
                <button 
                    onClick={() => toggleTaskCompleted(task.id)} 
                    className="btn-completed">{task.isCompleted ? <BsFillCheckCircleFill  /> : <div></div>} 
                </button>
                
                <Title isCompleted={task.isCompleted}>{task.title}</Title>
                <button onClick={() => deleteTask(task.id)}><FaTrash /></button>
            </div>
        </main>
        </TaskContainer>    
    )
}