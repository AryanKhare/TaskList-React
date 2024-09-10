import { FC } from "react";
import { IconsData } from "../data/IconData";
import "../styles/Icons.css"

export const Icons: FC = () => {
    return (
        <>  
            {IconsData.map((item) => (
                <div className="icon" key={item.id}>
                    <p>{item.icon}</p>
                </div>
            ))}
        </>
    )
}