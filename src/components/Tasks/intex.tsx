import Task from '../Task';
import { Container, EmptyContainer } from './styles';
import ClipBoardImg from '../../assets/clipboard.png';
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
 
export default function Tasks() {
   const { tasks } = useContext(TasksContext);
   
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