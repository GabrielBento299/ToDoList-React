import { Container } from './styles';
import Logoimg from '../../assets/logoImg.png';
import { FormEvent, useRef, MutableRefObject } from 'react';

interface ITaskProps {
    addNewTask: (inputTaskValue: string) => void;
}

export default function Header({ addNewTask }: ITaskProps) {
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    
    function handleCreateTodo(e: FormEvent) {
        e.preventDefault();

        addNewTask(inputRef.current?.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    
    return (
        <Container>
            <div>
                <img src={Logoimg} alt="Logo" />
            </div>

            <form onSubmit={handleCreateTodo}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    ref={inputRef}
                />
                <button type="submit">Criar</button>
            </form>
        </Container>
    )
}