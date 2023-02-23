import { Container } from './styles';
import Logoimg from '../../assets/logoImg.png';
import { FormEvent, useRef, MutableRefObject } from 'react';
import { toast } from 'react-toastify';

interface ITaskProps {
    addNewTask: (inputTaskValue: string) => void;
}

export default function Header({ addNewTask }: ITaskProps) {
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    
    function handleCreateTodo(e: FormEvent) {
        e.preventDefault();

        if(!inputRef.current.value) {
            toast.error("Campo obrigatorio!");
            inputRef.current.focus();
            return;
        }

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