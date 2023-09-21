import React, { useState } from 'react';

function ToggleButton({ title, content }) {
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <label>{title}</label>
            <button onClick={toggle}>{isActive ? 'ON' : 'OFF'}</button>
            {isActive && <div>{content}</div>}
        </div>
    );
}

export default ToggleButton;