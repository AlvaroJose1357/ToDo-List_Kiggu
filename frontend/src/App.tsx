import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTask } from "./hooks/useTask";

function App() {
  const { tasks, activeID, setActiveID, fetchTasks } = useTask();
  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-center text-5xl font-black md:mx-auto md:w-2/3">
          Task Manager {""}
          {/* <span className="text-(--color-primary)">Kiggu</span> */}
          <span className="text-primary">Kiggu</span>
          <img
            src="https://cf-vectorizer-live.s3.amazonaws.com/vectorized/2txs78moiITnR0GR5HazkCNKarY/2txs8Lpu3B0fPfHtaG06YDJklEu.svg"
            className="inline-block ml-2 w-20 h-20"
          />
        </h1>
        <h2 className="text-center text-2xl font-bold mt-5">
          Organiza tus tareas de forma sencilla y eficiente
        </h2>
        <hr className="my-5" />
        <div className="mt-12 md:flex">
          <TaskForm
            tasks={tasks}
            activeID={activeID}
            setActiveID={setActiveID}
            fetchTasks={fetchTasks}
          />
          <TaskList
            tasks={tasks}
            setActiveID={setActiveID}
            fetchTasks={fetchTasks}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
