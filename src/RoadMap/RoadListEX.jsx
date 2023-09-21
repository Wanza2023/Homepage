import React, { useState } from "react";

function RoadListEX({items}){
    const [isActive,setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };


    return (
        <ul className={isActive ? 'active': 'nonactive'} onClick={handleClick}>
            {items.map((item, index) => (
                <li key={index}>{item.date}</li>
                ))}
        </ul>
    )
}

export default RoadListEX;