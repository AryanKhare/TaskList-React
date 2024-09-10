import { FC, useState } from "react";
import logo from "../assets/Logo.svg";
import editIcon from "../assets/Edit_duotone.svg";
import doneIcon from "../assets/Done_round.svg";
import { HeaderProps } from "../types/HeaderProps.model";
import "../styles/Header.css";

export const Header: FC<HeaderProps> = ({ title, description, setHeader }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [content, setContent] = useState<HeaderProps>({title, description});

  const saveHeader = () => {
    setHeader ? setHeader({
      title: content.title,
      description: content.description
    }) : console.error("setHeader not defined");
    setEditMode(!editMode);
  }

  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="App-Logo" />
      </div>
      <div className="content">
        {editMode ? (
          <>
            <div className="title">
              <input type="text" value={content.title} className="edit-title" onChange={(e) => setContent((prev) => ({...prev, title: e.target.value}))}/>
              <img src={doneIcon} onClick={saveHeader}/>
            </div>
            <input type="text" value={content.description} className="edit-description" onChange={(e) => setContent((prev) => ({...prev, description: e.target.value}))}/>
          </>
        ) : (
          <>
            <div className="title">
              <p>{title}</p>
              <img src={editIcon} onClick={() => setEditMode(!editMode)}/>
            </div>
            <p>{description}</p>
          </>
        )}
      </div>
    </div>
  );
};
