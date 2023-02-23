import Header from "./components/Header"
import Tasks from "./components/Tasks/intex"
import useTaks from "./hooks/useTasks";
import { GlobalStyle } from "./styles/global"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function App() {

  const {tasks, addNewTask, deleteTask, toggleTaskCompleted} = useTaks();

  return (
    <>
      <ToastContainer autoClose={1500} position={toast.POSITION.TOP_CENTER} />
      <Header addNewTask={addNewTask} />
      <Tasks tasks={tasks}  deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
      <GlobalStyle />
    </>
  )
}

