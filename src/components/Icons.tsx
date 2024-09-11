import { FC } from "react";
import "../styles/Icons.css"
import { IconProps } from "../types/IconProps.model";

export const Icons: FC<IconProps> = ({data, modalData, setModalData}) => {
    const handleClick = (icon: string, iconId: number) => {
        setModalData({...modalData, icon: icon, iconId: iconId});
    }

    return (
        <>  
            { data.map((item) => (
                <div 
                    className={`icon ${modalData?.iconId === item.id ? 'selected' : ''}`} 
                    key={item.id} 
                    onClick={() => handleClick(item.icon, item.id)}>
                    <p>{item.icon}</p>
                </div>
            ))}
        </>
    )
}