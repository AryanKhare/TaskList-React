import { FC } from "react";
import { ITask } from "../types/Task.model";
import doneIcon from "../assets/Done_round_duotone.svg";
import "../styles/Task.css";

export const Task: FC<ITask> = ({
  title,
  description,
  icon,
  iconId,
  id,
  createdOn,
  type,
  setEditMode,
  setSelectedTask,
  setModalOpen,
}) => {
  const handleSelectTask = (val: ITask) => {
    setSelectedTask?.(val);
    setEditMode?.(true);
    setModalOpen?.(true);
  };

  return (
    <div
      className="task-container"
      onClick={() => {
        handleSelectTask({ title, description, icon, iconId, createdOn, id, type });
      }}
    >
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
    </div>
  );
};
