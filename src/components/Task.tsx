import { FC } from "react";
import { ITask } from "../types/Task.model";
import doneIcon from "../assets/Done_round_duotone.svg";
import "../styles/Task.css";

export const Task: FC<ITask> = ({ title, description }) => {
  return <div className="task-container">
    <div className="icon-container">
      <img src={doneIcon} />
    </div>
    <div className="content-container">
      <p>{title}</p>
      <p>{description}</p>
    </div>
    <div className="type-container">
      <img src={doneIcon} />
    </div>
  </div>;
};
