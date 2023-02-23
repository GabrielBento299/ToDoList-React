import Header from "./components/Header"
import Tasks from "./components/Tasks/intex"
import { GlobalStyle } from "./styles/global"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { TasksProvider } from "./contexts/TasksContext";

export default function App() {
  return (
    <>
      <ToastContainer autoClose={1500} position={toast.POSITION.TOP_CENTER} />
      <GlobalStyle />
      
      <TasksProvider>
        <Header />
        <Tasks  />
      </TasksProvider>
    </>
  )
}

