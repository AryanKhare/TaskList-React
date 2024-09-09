import { FC } from "react";
import logo from "../assets/Logo.svg";
import editIcon from "../assets/Edit_duotone.svg";
import { HeaderProps } from "../types/HeaderProps.model";
import "../styles/Header.css";

export const Header: FC<HeaderProps> = ({title, description}) => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt="App-Logo" />
      </div>
      <div className="content">
        <div className="title">
          <p>{title}</p>
          <img src={editIcon} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
