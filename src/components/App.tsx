import { FC, useEffect, useState } from "react";
import { AppProps } from "../types/AppProps.model";
import "../styles/App.css";
import { Header } from "../components/Header";
import { TaskList } from "./TaskList";
import { ITask } from "../types/Task.model";

const App: FC<AppProps> = ({ title, description }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    let tasks = localStorage.getItem('tasks');
    setTasks(tasks ? JSON.parse(tasks) : []);
  }, [])

  return (
    <div className="container">
      <Header title={title} description={description} />
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default App;
