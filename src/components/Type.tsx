import { FC } from "react";
import { TypeProps } from "../types/TypeProps.model";
import "../styles/Type.css"

export const Types: FC<TypeProps> = ({data, modalData, setModalData}) => {
    const handleClick = (text: string) => {
        setModalData({...modalData, type: text});
    }
    return (
        <>
            {data.map((item) => (
                <button 
                    className={`type ${modalData.type === item.text ? 'selected' : ''}`} 
                    key={item.id}
                    onClick={() => handleClick(item.text)}>
                    <img src={item.icon} />
                    <p>{item.text}</p>
                </button>
            ))}
        </>
    )
}