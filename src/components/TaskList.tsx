import { FC } from "react";
import { Task } from "./Task";
import { ITaskList } from "../types/TaskList.model";
import addLogo from "../assets/Add_round_duotone.svg";
import "../styles/TaskList.css";

export const TaskList: FC<ITaskList> = ({ tasks, setModalOpen }) => {  
  return (
    <div className="task-list">
      {tasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}

      <div className="add-task" onClick={() => setModalOpen?.(true)}>
        <img src={addLogo} />
        <p>Add Task</p>
      </div>
    </div>
  );
};
