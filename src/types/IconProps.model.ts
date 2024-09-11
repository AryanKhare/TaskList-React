import { Icon } from "./Icon.model";
import { ITask } from "./Task.model";

export interface IconProps {
    data: Icon[];
    modalData: ITask,
    setModalData: (val: ITask) => void;
}