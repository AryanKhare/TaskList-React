import { FC } from "react";
import { Task } from "./Task";
import { ITaskList } from "../types/TaskList.model";
import addLogo from "../assets/Add_round_duotone.svg";
import "../styles/TaskList.css";

export const TaskList: FC<ITaskList> = ({
  tasks,
  setModalOpen,
  setEditMode,
  setSelectedTask
}) => {
  return (
    <div className="task-list">
      {tasks.map((item) => (
        <Task key={item.id} {...item} setSelectedTask={setSelectedTask} setModalOpen={setModalOpen} setEditMode={setEditMode}/>
      ))}

      <div
        className="add-task"
        onClick={() => {
          setModalOpen?.(true);
          setEditMode?.(false);
          setSelectedTask?.(null);
        }}
      >
        <img src={addLogo} />
        <p>Add Task</p>
      </div>
    </div>
  );
};
