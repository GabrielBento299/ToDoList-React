import { ITasks } from '../../@types/Interface';
import Task from '../Task';
import { Container, EmptyContainer } from './styles';
import ClipBoardImg from '../../assets/clipboard.png';
 
interface ITasksProps {
    tasks: ITasks[];
    deleteTask: (taskId: string) => void;
    toggleTaskCompleted: (taskId: string) => void;
}

export default function Tasks({ tasks, deleteTask, toggleTaskCompleted }: ITasksProps) {
    const tasksLength = tasks.length;
    const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

    
    return (
        <Container>
            <div className="container-cards">
            <div className="items">
                <h2>Tarefas criadas <span className="radius-items">{tasksLength}</span></h2>
                {tasksLength === 0 
                    ? <h4>Concluidas <strong className="radius-items">{tasksLength}</strong> </h4> 
                    : <h4>Concluidas <strong className="radius-items">{tasksCompleted} de {tasksLength}</strong></h4>
                }
            </div>

            {tasks.length > 0 ? (
                <>
                {tasks.map((task) => (
                    <Task 
                        key={task.id} task={task}
                        deleteTask={deleteTask} 
                        toggleTaskCompleted={toggleTaskCompleted}
                    />            
                ))}
                </>
            
            ) : (
                <>
                    <EmptyContainer>
                        <div className="empty-info">
                            <img src={ClipBoardImg} alt="ClipBoard" />

                            <p>Você ainda não tem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </EmptyContainer>
                </>
            )}
            </div>
        </Container>
    )
} 