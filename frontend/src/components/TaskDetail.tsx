import { Edit2, Trash2 } from "lucide-react";
import { Task } from "../types";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { deleteTask } from "../services/TaskServices";
import { toast } from "react-toastify";

type TaskDetailProps = {
  task: Task;
  setActiveID: React.Dispatch<React.SetStateAction<string>>;
  fetchTasks: () => void;
};

export default function TaskDetail({
  task,
  setActiveID,
  fetchTasks,
}: TaskDetailProps) {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const handleEdit = (id: Task["id"]) => {
    setActiveID(id);
  };

  const handleDelete = async (id: Task["id"]) => {
    setModalDeleteOpen(false);
    const result = await deleteTask(id);
    toast.error(result);
    fetchTasks();
  };

  const handleModal = () => {
    setModalDeleteOpen(!modalDeleteOpen);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-6 flex justify-between items-center min-h-[120px]">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold">{task.title}</h2>
        <p className="text-gray-600 mt-2 truncate max-w-[250px]">
          {task.description}
        </p>
      </div>
      <div className="w-1/3 ">
        <p
          className={`text-gray-600 mt-2 font-bold text-2xl ${
            task.status === "ToDo"
              ? "text-red-500"
              : task.status === "In Progress"
              ? "text-yellow-500"
              : "text-green-500"
          }`}>
          {task.status}
        </p>
      </div>
      <div className="space-x-4 flex gap-4">
        <button
          onClick={() => handleEdit(task.id)}
          className="p-2 text-gray-400 hover:text-blue-700">
          <Edit2
            size={26}
            strokeWidth={2.75}
          />
        </button>
        <button
          onClick={() => handleModal()}
          className="p-2 text-gray-400 hover:text-red-600">
          <Trash2
            size={26}
            strokeWidth={2.75}
          />
        </button>
        <Transition
          appear
          show={modalDeleteOpen}
          as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={handleModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="bg-opacity-50 fixed inset-0 bg-black/65 opacity-25" />
            </TransitionChild>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                    <DialogTitle
                      as="h3"
                      className="text-lg leading-6 font-medium text-black">
                      ¿Estás seguro de eliminar la Tarea?
                    </DialogTitle>

                    <div className="mt-2">
                      <p className="text-sm text-black">
                        Esta acción eliminará permanentemente la tarea y no se
                        podrá recuperar. <br />
                        <span className="font-semibold">
                          ¿Estás seguro de continuar?
                        </span>
                      </p>
                    </div>

                    <div className="mt-4 flex justify-end space-x-3">
                      <Button
                        type="button"
                        onClick={() => handleDelete(task.id)}
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none">
                        Eliminar
                      </Button>

                      <Button
                        type="button"
                        onClick={() => setModalDeleteOpen(false)}
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none">
                        Cancelar
                      </Button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
