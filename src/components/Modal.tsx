import { FC } from "react";
import { Form } from "./Form";
import { Icons } from "./Icons";
import { Type } from "./Type";
import { TypeData } from "../data/TypeData";
import closeLogo from "../assets/close_ring_duotone.svg";
import trashLogo from "../assets/Trash.svg";
import tickLogo from "../assets/Done_round.svg";
import "../styles/Modal.css";

interface ModalProps {
  setModalOpen: (val: boolean) => void;
}

export const Modal: FC<ModalProps> = ({setModalOpen}) => {
  return (
    <div className="modal">
      <div className="modal-heading">
        <p>Task Details</p>
        <img src={closeLogo} onClick={() => setModalOpen(false)}/>
      </div>

      <div className="modal-components">
        <div className="modal-form"> <Form /> </div>
        <div className="modal-icons"> <Icons /> </div>
        <div className="modal-type">
          {TypeData.map((item) => (
            <Type {...item} key={item.id}/>
          ))}
        </div>
      </div>

      <div className="modal-save">
        <button>
          <img src={trashLogo} />
          <span>Delete</span>
        </button>

        <button>
          <img src={tickLogo} />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};
