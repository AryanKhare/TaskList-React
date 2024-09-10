import { FC } from "react";
import "../styles/Form.css";

export const Form: FC = () => {
  return (
    <>
      <form className="task-form">
        <div className="fields">
          <label htmlFor="title">Taskt title</label>
          <input type="text" placeholder="Enter task title" id="title" />
        </div>

        <div className="fields">
          <label htmlFor="description">Task description</label>
          <textarea
            placeholder="Enter task description"
            id="description"
          />
        </div>
      </form>
    </>
  );
};
