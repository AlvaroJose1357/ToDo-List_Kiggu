import { Task } from "../types";
import TaskDetail from "./TaskDetail";

type TaskListProps = {
  tasks: Task[];
  setActiveID: React.Dispatch<React.SetStateAction<string>>;
  fetchTasks: () => void;
};
export default function TaskList({
  tasks,
  setActiveID,
  fetchTasks,
}: TaskListProps) {
  return (
    <div className="mx-5 overflow-y-scroll md:w-1/2 lg:w-3/5 ">
      {tasks.length ? (
        <>
          <h2 className="text-center text-3xl font-black mb-5">
            Lista de Tareas
          </h2>
          {tasks.map((task) => (
            <TaskDetail
              key={task.id}
              task={task}
              setActiveID={setActiveID}
              fetchTasks={fetchTasks}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-center text-3xl font-black">No hay tareas</h2>
          <p className="mb-10 mt-5 text-center text-xl">
            Comienza a añadir tareas {""}
            <span className="font-bold text-primary">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
}
