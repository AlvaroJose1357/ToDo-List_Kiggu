// aqui se hacen llamados a la API

import axios from "axios";
import { DraftTaskSchema, TasksSchema } from "../schemas/TAskSchema";
import { DraftTask, Task } from "../types";

export const getTasks = async () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tasks`;
  const { data } = await axios.get(url);
  // console.log(data);
  const result = TasksSchema.safeParse(data);
  // console.log(result);
  if (result.success) {
    // console.log(result.data);
    return result.data;
  }
};

export const createTask = async (dataTask: DraftTask) => {
  const result = DraftTaskSchema.safeParse(dataTask);
  if (!result.success) {
    return;
  }
  const url = `${import.meta.env.VITE_BACKEND_URL}/tasks`;
  const { data } = await axios.post(url, dataTask);
  // console.log(data.message);
  return data.message;
};

export const updateTask = async (task: DraftTask, taskID: Task["id"]) => {
  const result = DraftTaskSchema.safeParse(task);
  if (!result.success) {
    return;
  }
  const url = `${import.meta.env.VITE_BACKEND_URL}/tasks/${taskID}`;
  const { data } = await axios.put(url, task);
  // console.log(data);
  return data;
  // console.log(task, taskID);
};

export const deleteTask = async (id: Task["id"]) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tasks/${id}`;
  const { data } = await axios.delete(url);
  // console.log(data);
  return data;
};
