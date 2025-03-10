import express from "express";
import cors from "cors";

import TaskRoute from "./routes/TaskRoute";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", TaskRoute);

app.get("/api", (req, res) => {
  res.send("Hello World");
});

export default app;
