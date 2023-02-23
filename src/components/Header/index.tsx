import { Container, Input, Button } from './styles';

import { FormEvent, useRef, MutableRefObject, useContext } from 'react';
import { toast } from 'react-toastify';

import Logoimg from '../../assets/logoImg.png';
import PlusImg from '../../assets/plus.png';
import { TasksContext } from '../../contexts/TasksContext';


export default function Header() {
    const {addNewTask} = useContext(TasksContext);

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    
    function handleCreateTodo(e: FormEvent) {
        e.preventDefault();

        if(!inputRef.current.value) {
            toast.error("Campo obrigatorio!");
            inputRef.current.focus();
            return;
        }

        addNewTask(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    
    return (
        <Container>
            <div>
                <img src={Logoimg} alt="Logo" />
            </div>

            <form onSubmit={handleCreateTodo}>
                <Input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    ref={inputRef}
                />
                <Button type="submit">Criar <img src={PlusImg} alt="" /> </Button>
            </form>
        </Container>
    )
}