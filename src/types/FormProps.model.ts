import { ITask } from "./Task.model";

export interface FormProp {
    data: ITask,
    setModalData: (val: ITask) => void;
  }