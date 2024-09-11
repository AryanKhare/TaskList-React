import { ChangeEvent, FC } from "react";
import "../styles/Form.css";
import { FormProp } from "../types/FormProps.model";

export const Form: FC<FormProp> = ({data, setModalData}) => {

  const handleInputs = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setModalData({...data, [name]: value});
  }

  return (
    <>
      <form className="task-form" autoComplete="off">
        <div className="fields">
          <label htmlFor="title">Taskt title</label>
          <input type="text" placeholder="Enter task title" id="title" name="title" value={data.title} onChange={handleInputs}/>
        </div>

        <div className="fields">
          <label htmlFor="description">Task description</label>
          <textarea
            placeholder="Enter task description"
            id="description"
            name="description"
            value={data.description}
            onChange={handleInputs}
          />
        </div>
      </form>
    </>
  );
};
