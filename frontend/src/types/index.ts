import { z } from "zod";
import {
  DraftTaskSchema,
  TaskSchema,
  TasksSchema,
} from "../schemas/TAskSchema";

// export type Task = {
//   id: string;
//   title: string;
//   description: string;
//   status: string;
// };

// export type DraftStatus = {};
// export type Status = {};
export type Tasks = z.infer<typeof TasksSchema>;
export type Task = z.infer<typeof TaskSchema>;
export type DraftTask = z.infer<typeof DraftTaskSchema>;
