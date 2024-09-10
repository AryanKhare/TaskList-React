import { FC, useState } from "react";
import { Form } from "./Form";
import { Icons } from "./Icons";
import { Type } from "./Type";
import { TypeData } from "../data/TypeData";
import { IconsData } from "../data/IconData";
import { Icon } from "../types/Icon.model";
import { ModalProps } from "../types/ModalProps.model";
import closeLogo from "../assets/close_ring_duotone.svg";
import trashLogo from "../assets/Trash.svg";
import tickLogo from "../assets/Done_round.svg";
import "../styles/Modal.css";

export const Modal: FC<ModalProps> = ({ setModalOpen }) => {
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  // do I have to put this function in useEffect?
  const handleSaveDisable = () => {
    if (selectedIcon?.id) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  return (
    <>
      <div className="modal-extra-container" onClick={() => setModalOpen(false)}></div>

      <div className="modal">
        <div className="modal-heading">
          <p>Task Details</p>
          <img src={closeLogo} onClick={() => setModalOpen(false)} />
        </div>

        <div className="modal-components">
          <div className="modal-form"> <Form /> </div>
          <div className="modal-icons"> <Icons data={IconsData} selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} /> </div>
          <div className="modal-type">
            {TypeData.map((item) => (
              <Type {...item} key={item.id} />
            ))}
          </div>
        </div>

        <div className="modal-save">
          <button onClick={() => setModalOpen(false)}>
            <img src={trashLogo} />
            <span>Delete</span>
          </button>

          <button onClick={() => setModalOpen(false)} disabled={isDisable}>
            <img src={tickLogo} />
            <span>Save</span>
          </button>
        </div>

      </div>
    </>
  );
};
