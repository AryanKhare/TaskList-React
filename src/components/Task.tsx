import { FC } from "react";
import { ITask } from "../types/Task.model";
import doneIcon from "../assets/Done_round_duotone.svg";
import progressLogo from "../assets/Time_atack_duotone.svg";
import crossLogo from "../assets/close_ring_duotone.svg";
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
      className={`task-container ${
        type
          ? type === "Completed"
            ? "completed-offset"
            : type === "In progress"
            ? "inProgress-offset"
            : "wontDo-offset"
          : ""
      }`}
      onClick={() => {
        handleSelectTask({
          title,
          description,
          icon,
          iconId,
          createdOn,
          id,
          type,
        });
      }}
    >
      <div className="icon-container">
        <div>
          <p>{icon}</p>
        </div>
      </div>

      <div className="content-container">
        <p>{title}</p>
        <p>{description}</p>
      </div>

      {type && (
        <div className="type-container">
          <div
            className={
              type === "Completed"
                ? "completed"
                : type === "In progress"
                ? "inProgress"
                : "wontDo"
            }
          >
            <img
              src={
                type === "Completed"
                  ? doneIcon
                  : type === "In progress"
                  ? progressLogo
                  : crossLogo
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};
