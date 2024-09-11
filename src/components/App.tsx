import { FC, useEffect, useState } from "react";
import { AppProps } from "../types/AppProps.model";
import { Header } from "../components/Header";
import { TaskList } from "./TaskList";
import { ITask } from "../types/Task.model";
import { HeaderProps } from "../types/HeaderProps.model";
import { Modal } from "./Modal";
import "../styles/App.css";

const App: FC<AppProps> = ({ title, description }) => {
  const [header, setHeader] = useState<HeaderProps>({ title, description });
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITask | null>();

  useEffect(() => {
    const taskData = localStorage.getItem("taskList");
    const parseTaskData = taskData ? JSON.parse(taskData) : [];
    setTasks(parseTaskData);

    const headerData = localStorage.getItem("taskListHeader");
    const parseTaskHeader = headerData
      ? JSON.parse(headerData)
      : { title, description };
    setHeader(parseTaskHeader);
  }, []);

  return (
    <>
      <div className="container">
        <Header
          title={header.title}
          description={header.description}
          setHeader={setHeader}
        />
        <TaskList
          tasks={tasks}
          setModalOpen={setModalOpen}
          setEditMode={setEditMode}
          setSelectedTask={setSelectedTask}
        />
      </div>

      {modalOpen && (
        <div className="modal-container">
          <Modal
            setModalOpen={setModalOpen}
            setTasks={setTasks}
            tasks={tasks}
            editMode={editMode}
            setEditMode={setEditMode}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        </div>
      )}
    </>
  );
};

export default App;
