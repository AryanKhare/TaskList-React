import { FC, useState } from "react";
import { AppProps } from "../types/AppProps.model";
import { Header } from "../components/Header";
import { TaskList } from "./TaskList";
import { ITask } from "../types/Task.model";
import { HeaderProps } from "../types/HeaderProps.model";
import "../styles/App.css";
import { Modal } from "./Modal";

const App: FC<AppProps> = ({ title, description }) => {
  const [header, setHeader] = useState<HeaderProps>({ title, description });
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container">
        <Header
          title={header.title}
          description={header.description}
          setHeader={setHeader}
        />
        <TaskList tasks={tasks} setModalOpen={setModalOpen} />
      </div>

      {modalOpen && 
        <div className="modal-container">
          <Modal setModalOpen={setModalOpen}/>
        </div>}
    </>
  );
};

export default App;
