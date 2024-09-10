import { FC } from "react";
import { TypeProps } from "../types/TypeProps.model";
import "../styles/Type.css"

export const Type: FC<TypeProps> = ({id, icon, text}) => {
    return (
        <>
            <button className="type" key={id}>
                <img src={icon} />
                <p>{text}</p>
            </button>
        </>
    )
}