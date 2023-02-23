import { TaskContainer, Title } from './styles';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import TrashImg from '../../assets/trash.png';
import { useContext } from 'react';
import { ITasks, TasksContext } from '../../contexts/TasksContext';

interface ITaskProps {
    task: ITasks;
}

export default function Task({ task }: ITaskProps) {
    const { deleteTask, toggleTaskCompleted} = useContext(TasksContext);

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