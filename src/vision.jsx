import { useState } from 'react';
import './styles/Vision.css';

function Vision() {

    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = (p) => {
        setIsHover(true);
    };

    const handleMouseOut = (p) => {
        setIsHover(false);
    };

    return (
        <div className="container">
            <div className={isHover ? "grow" : "box"} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ background: "red" }}>
                <h3>제목</h3><div>도와주세요</div>
            </div>
            <div className={isHover ? "grow" : "box"} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ background: "grey" }}>
                <h3>제목</h3><div>본문</div>
            </div>
            <div className={isHover ? "grow" : "box"} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ background: "pink" }}>
                <h3>제목</h3><div>본문</div>
            </div>
        </div>
    );
}

export default Vision;
