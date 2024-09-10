import { FC, useEffect, useState } from "react";
import { AppProps } from "../types/AppProps.model";
import { Header } from "../components/Header";
import { TaskList } from "./TaskList";
import { ITask } from "../types/Task.model";
import { HeaderProps } from "../types/HeaderProps.model";
import "../styles/App.css";

const App: FC<AppProps> = ({ title, description }) => {
  const [header, setHeader] = useState<HeaderProps>({title, description});
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    // let tasks = localStorage.getItem('tasks');
    // setTasks(tasks ? JSON.parse(tasks) : []);
    let obj: ITask = {
      id: 1,
      title: "Test Task",
      description: "Test description",
      icon: "📚",
      iconId: 1,
      createdOn: new Date(),
    }

    setTasks([obj, obj]);
  }, [])

  return (
    <div className="container">
      <Header title={header.title} description={header.description} setHeader={setHeader}/>
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default App;
