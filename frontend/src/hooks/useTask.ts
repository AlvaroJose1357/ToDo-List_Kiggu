import { useEffect, useState } from "react";
import { Task } from "../types";
import { getTasks } from "../services/TaskServices";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeID, setActiveID] = useState<Task["id"]>("");

  useEffect(() => {
    fetchTasks();
  }, []);

  // llamada a la API para getTasks
  const fetchTasks = async () => {
    const task = await getTasks();
    // console.log(task);
    // se le coloca el signo de admiracion para que no de error por undefined, debido a que le estamos diciendo que task no puede ser undefined y qie si va a haber un valor
    setTasks(task!);
  };

  return { tasks, activeID, setActiveID, fetchTasks };
};
