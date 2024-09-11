import { ITask } from "./Task.model";

interface TypeData {
    id: number;
    text: string;
    icon: string;
}

export interface TypeProps {
    data: TypeData[];
    modalData: ITask,
    setModalData: (val: ITask) => void;
}

