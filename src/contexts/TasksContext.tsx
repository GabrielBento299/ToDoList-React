import { createContext, ReactNode, useState, useEffect } from "react";
import { toast } from "react-toastify";

export interface ITasks {
    id: string;
    title: string;
    isCompleted: boolean;
}

interface TasksContextType {
    tasks: ITasks[];
    addNewTask: (inputTaskValue: string) => void;
    deleteTask: (id: string) => void;
    toggleTaskCompleted: (id: string) => void;
}

export const TasksContext = createContext({} as TasksContextType);

export function TasksProvider({ children} : {children: ReactNode}) {
  const LOCAL_STORAGE_KEY = "@task"

  const [tasks, setTasks] = useState<ITasks[]>([]);

  useEffect(() => {
    const storage  = localStorage.getItem(LOCAL_STORAGE_KEY);

    if(storage) {
      setTasks(JSON.parse(storage));
    }
  }, []);

  useEffect(() => {
    if(tasks.length === 0) return;

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
 }, [tasks]);


  function addNewTask(inputTaskValue: string) {
    setTasks((prevState) => [...prevState, {
      id: crypto.randomUUID(),
      title: inputTaskValue,
      isCompleted: false,
    }]);
    toast.success("Task criada com sucesso!");
  }
  
  function deleteTask(id: string) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    toast.success("Task deletada com sucesso!");

  }

  function toggleTaskCompleted(id: string) {
    const taskIscompleted = tasks.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });

    setTasks(taskIscompleted);
  }

    return (
        <TasksContext.Provider value={{ tasks, addNewTask, deleteTask, toggleTaskCompleted }}>
            {children}
        </TasksContext.Provider>
      )
}