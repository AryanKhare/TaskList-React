import { FC } from "react";
import { Task } from "./Task";
import { ITaskList } from "../types/TaskList.model";
import "../styles/TaskList.css";

export const TaskList: FC<ITaskList> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((item) => (
        <Task key={item.id} {...item} />
      ))}
      Task list works
    </div>
  );
};
