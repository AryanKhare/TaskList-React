import { FC } from "react";
import { ITask } from "../types/Task.model";

export const Task: FC<ITask> = ({ title }) => {
  return <div className="task-container">{title}</div>;
};
