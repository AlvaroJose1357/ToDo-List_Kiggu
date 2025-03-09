import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { status } from "../data";
import { DraftTask, Task } from "../types";
import { createTask, updateTask } from "../services/TaskServices";

type TaskFormProps = {
  fetchTasks: VoidFunction;
  activeID: Task["id"];
  tasks: Task[];
  setActiveID: React.Dispatch<React.SetStateAction<string>>;
};
export default function TaskForm({
  fetchTasks,
  activeID,
  tasks,
  setActiveID,
}: TaskFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<DraftTask>();

  useEffect(() => {
    if (activeID) {
      // se le coloca [0] para que devuelva el objeto y no el array
      const activeTask = tasks.filter((task) => task.id === activeID)[0];
      setValue("title", activeTask.title);
      setValue("description", activeTask.description);
      setValue("status", activeTask.status);
    }
  }, [activeID]);

  const onSubmit = async (data: DraftTask) => {
    console.log(data);
    // si se va a actualizar
    if (activeID) {
      const resultUpdateTask = await updateTask(data, activeID);
      toast.success(resultUpdateTask);
    } else {
      // si se va a crear
      const resultAddTAsk = await createTask(data);
      toast.success(resultAddTAsk);
    }
    setActiveID("");
    fetchTasks();
    reset();
  };
  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl font-black text-center mb-5">
        {activeID ? "Actualizar Tarea" : "Añadir Tarea"}
      </h2>
      {/* <hr className="mb-5" /> */}
      <form
        className="mb-10 rounded-lg bg-white px-5 py-10 shadow-neutral-500 shadow-xl"
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="text-sm font-bold uppercase">
            Titulo
          </label>
          <input
            id="title"
            className="w-full border border-gray-100 p-3"
            type="text"
            placeholder="Titulo de la tarea"
            {...register("title", {
              required: "El Titulo es obligatorio",
              minLength: {
                value: 2,
                message: "El Titulo debe tener al menos 2 caracteres",
              },
            })}
          />
          {errors.title && (
            <ErrorMessage>{errors.title.message?.toString()}</ErrorMessage>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="text-sm font-bold uppercase">
            Descripcion
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-100 p-3"
            placeholder="Descripción de la Tarea"
            {...register("description", {
              required: "La Descripcion es obligatorios",
            })}></textarea>
          {errors.description && (
            <ErrorMessage>
              {errors.description.message?.toString()}
            </ErrorMessage>
          )}
        </div>

        <div className="mb-5 ">
          <div className="flex flex-col ">
            <label
              htmlFor="description"
              className="text-sm font-bold uppercase">
              Estado
            </label>
            <span className="text-gray-500 text-sm italic">
              Selecciona el estado de tu tarea
            </span>
          </div>
          <select
            id="status"
            className="flex-1 rounded-xl bg-slate-300 w-full p-3"
            {...register("status")}
            // defaultValue="ToDo"
          >
            {status.map((item) => (
              <option
                key={item.id}
                value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.status && (
            <ErrorMessage>{errors.status.message?.toString()}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="w-full cursor-pointer bg-cyan-500 p-3 font-bold uppercase text-white transition-colors hover:bg-cyan-400 rounded-2xl"
          value={activeID ? "Actualizar Tarea" : "Añadir Tarea"}
        />
      </form>
    </div>
  );
}
