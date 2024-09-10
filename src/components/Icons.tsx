import { FC } from "react";
import "../styles/Icons.css"
import { IconProps } from "../types/IconProps.model";

export const Icons: FC<IconProps> = ({data, selectedIcon, setSelectedIcon}) => {
    return (
        <>  
            { data.map((item) => (
                <div 
                    className={`icon ${selectedIcon?.id === item.id ? 'selected' : ''}`} 
                    key={item.id} 
                    onClick={() => setSelectedIcon(item)}>
                    <p>{item.icon}</p>
                </div>
            ))}
        </>
    )
}