import { Request, Response } from "express";
import fs from "fs";
import path from "path";

// poder acceder a la ruta del archivo data.json para leer y escribir en el, se utiliza el modulo path para poder acceder a la ruta del archivo, __dirname nos da la ruta del archivo actual, los (../data) lo que nos permitio fue subir un nivel en la estructura de carpetas para poder acceder a la carpeta data y luego al archivo data.json
const dataPath = path.join(__dirname, "../data", "data.json");
// se lee el archivo data.json con el metodo readFileSync, se le pasa la ruta del archivo y el formato en el que se quiere leer el archivo, en este caso utf8, guardandolo en la constante data
const data = fs.readFileSync(dataPath, "utf8");
// se parsea el contenido del archivo data.json a un objeto json y se guarda en la constante tasks
const tasks = JSON.parse(data);

export const getTasks = async (req: Request, res: Response) => {
  try {
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error reading tasks data" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  try {
    const newTask = {
      id: String(tasks.length + 1),
      title,
      description,
      status,
    };

    tasks.push(newTask);
    // se convierte el array de tareas a un string con formato json
    const addData = JSON.stringify(tasks);
    fs.writeFileSync(dataPath, addData);
    res
      .status(201)
      .json({ task: newTask, message: "Tarea creada correctamente" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error interno en el servidor creando tarea" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;
  const { id } = req.params;

  try {
    const updatedTask = tasks.find((task) => task.id === id);
    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    updatedTask.title = title;
    updatedTask.description = description;
    updatedTask.status = status;

    const updatedData = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(dataPath, updatedData);
    // res.status(200).json(updatedTask);
    res.status(200).send("Tarea actualizada correctamente");
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error Interno en el servidor actualizando tarea" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // se utiliza el findIndex para encontrar el indice del elemento a eliminar en el array si este no lo encuentra devuelve -1
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      res.status(404).json({ error: "Task not found" });
      return;
    }

    // el metodo splice elimina el elemento del array, se le pasa el indice del elemento a eliminar y la cantidad de elementos a eliminar (1)
    tasks.splice(taskIndex, 1);
    const updatedData = JSON.stringify(tasks);
    fs.writeFileSync(dataPath, updatedData);
    res.status(200).send("Tarea eliminada correctamente");
  } catch (error) {
    res.status(500).json({ error: "Error internal server deleting task" });
  }
};
