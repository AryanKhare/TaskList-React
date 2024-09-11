export interface ITask {
    id: number;
    title: string;
    description?: string;
    type?: string;
    icon: string;
    iconId: number;
    createdOn: Date;
    lastUpdated?: Date;
    setEditMode?: (val: boolean) => void;
    setSelectedTask?: (val: ITask) => void;
    setModalOpen?: (val: boolean) => void;
    item?: ITask;
}