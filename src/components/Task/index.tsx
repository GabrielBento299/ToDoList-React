import { TaskContainer, Title } from './styles';
import { ITasks } from '../../@types/Interface';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import TrashImg from '../../assets/trash.png';

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
                <div className="card-infos">
                    <button 
                        onClick={() => toggleTaskCompleted(task.id)} 
                        className="btn-completed">{task.isCompleted ? <BsFillCheckCircleFill  /> : <div></div>} 
                    </button>
                
                    <Title isCompleted={task.isCompleted}>{task.title}</Title>
                </div>
                <button 
                    onClick={() => deleteTask(task.id)}
                    >
                    <img src={TrashImg} alt="Icone de deletar" /> 
                </button>
            </div>
        </main>
        </TaskContainer>    
    )
}