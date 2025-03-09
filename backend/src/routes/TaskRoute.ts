import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/TaskController";
import { handleInputError } from "../middleware";
import { body, param } from "express-validator";

const router = Router();

router.get("/", getTasks); // GET /api/tasks - get all tasks
router.post(
  "/",
  body("title").isString().withMessage("Title is required"),
  body("description").isString().withMessage("Description is required"),
  body("status").isString().withMessage("Status is required"),
  handleInputError,
  createTask
); // POST /api/tasks - create a new task
router.put(
  "/:id",
  param("id").isString().withMessage("Invalid event ID"),
  body("title").isString().withMessage("Title is required"),
  body("description").isString().withMessage("Description is required"),
  body("status").isString().withMessage("Status is required"),
  handleInputError,
  updateTask
); // PUT /api/tasks/:id - update a task by id
router.delete(
  "/:id",
  param("id").isString().withMessage("Invalid event ID"),
  handleInputError,
  deleteTask
); // DELETE /api/tasks/:id - delete a task by id

export default router;
