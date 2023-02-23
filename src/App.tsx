import Header from "./components/Header"
import Tasks from "./components/Tasks/intex"
import useTaks from "./hooks/useTasks";
import { GlobalStyle } from "./styles/global"

export default function App() {

  const {tasks, addNewTask, deleteTask, toggleTaskCompleted} = useTaks();

  return (
    <>
      <Header addNewTask={addNewTask} />
      <Tasks tasks={tasks}  deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
      <GlobalStyle />
    </>
  )
}

