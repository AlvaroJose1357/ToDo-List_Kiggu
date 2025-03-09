import { z } from "zod";

// se crea un esquema con los campos propios de la tarea
export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
});

// se crea un nuevo esquema sin el id
export const DraftTaskSchema = TaskSchema.omit({ id: true });

// se crea un esquema de array de tareas
export const TasksSchema = z.array(TaskSchema);
