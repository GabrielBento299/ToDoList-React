import { useState, useEffect } from "react"
import { ITasks } from "../@types/Interface";

export default function useTaks( ) {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const LOCAL_STORAGE_KEY = "@task"

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
  }
  
  function deleteTask(id: string) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
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

  return {
        tasks,
        addNewTask,
        deleteTask,
        toggleTaskCompleted
    }
}