import { ITask } from "./Task.model";

export interface ITaskList {
    tasks: ITask[],
    setModalOpen?: (val: boolean) => void;
}