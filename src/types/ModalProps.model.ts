import { ITask } from "./Task.model";

export interface ModalProps {
  setModalOpen: (val: boolean) => void;
  setTasks: (val: ITask[]) => void;
  tasks: ITask[];
  editMode: boolean;
  setEditMode: (val: boolean) => void;
  selectedTask?: ITask | null;
  setSelectedTask?: (val: ITask | null) => void;
}
