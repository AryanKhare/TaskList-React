import { FC, useEffect, useState } from "react";
import { Form } from "./Form";
import { Icons } from "./Icons";
import { Types } from "./Type";
import { IconsData } from "../data/IconData";
import { ModalProps } from "../types/ModalProps.model";
import { TypeData } from "../data/TypeData";
import { ITask } from "../types/Task.model";
import closeLogo from "../assets/close_ring_duotone.svg";
import trashLogo from "../assets/Trash.svg";
import tickLogo from "../assets/Done_round.svg";
import "../styles/Modal.css";

export const Modal: FC<ModalProps> = ({ setModalOpen, setTasks, tasks, editMode, setEditMode, selectedTask, setSelectedTask }) => {
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ITask>(selectedTask || {
    id: Date.now(),
    title: '',
    description: '',
    createdOn: new Date(),
    icon: '',
    iconId: -1,
    type: ''
  });

  useEffect(() => {
    const {title, iconId} = modalData;
    (title && iconId !== -1) ? setIsDisable(false) : setIsDisable(true);
  }, [modalData]);

  const saveAndEdit = () => {
    editMode ? ( tasks.forEach((item, index) => {item.id === modalData.id ? tasks[index] = {...item, ...modalData} : item})) : (tasks.push(modalData));
    localStorage.setItem('taskList', JSON.stringify(tasks));
    setTasks(tasks);
  }

  const handleEditMode = () => {
    setModalOpen(false);
    setEditMode(false);
    setSelectedTask?.(null);
  }

  const handleSave = () => {
    saveAndEdit();
    handleEditMode();
  }

  const handleDelete = () => {
    tasks = tasks.filter((item) => item.id !== modalData.id);
    saveAndEdit();
    handleEditMode();
  }

  return (
    <>
      <div 
        className="modal-extra-container" 
        onClick={handleEditMode}></div>

      <div className="modal">
        <div className="modal-heading">
          <p>Task Details</p>
          <img 
            src={closeLogo} 
            onClick={handleEditMode} />
        </div>

        <div className="modal-components">
          <div className="modal-form"> <Form data={modalData} setModalData={setModalData}/> </div>
          <div className="modal-icons"> <Icons data={IconsData} modalData={modalData} setModalData={setModalData} /> </div>
          <div className="modal-type"> <Types data={TypeData} modalData={modalData} setModalData={setModalData}/> </div>
        </div>

        <div className="modal-save">
          {editMode && <button onClick={handleDelete} className="delete">
            <img src={trashLogo} />
            <span>Delete</span>
          </button> }

          <button onClick={handleSave} disabled={isDisable}>
            <img src={tickLogo} />
            <span>Save</span>
          </button>
        </div>

      </div>
    </>
  );
};
