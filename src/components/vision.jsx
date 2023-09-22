import { useState } from 'react';
import '../styles/Vision.css';

function Vision() {
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);

    const handleMouseOver = (boxNumber) => {
    if (boxNumber === 1) {
        setIsHover1(true);
        setIsHover2(false);
        setIsHover3(false);
    } else if (boxNumber === 2) {
        setIsHover1(false);
        setIsHover2(true);
        setIsHover3(false);
    } else if (boxNumber === 3) {
        setIsHover1(false);
        setIsHover2(false);
        setIsHover3(true);
        }
    };

    const handleMouseOut = () => {
    setIsHover1(false);
    setIsHover2(false);
    setIsHover3(false);
    };

    return (
    <div style={{paddingTop:"3rem"}}>
        <h1 className="title">VISION</h1>
        <div className="container">
        <div
            className={isHover1 ? 'grow' : 'box'}
            onMouseOver={() => handleMouseOver(1)}
            onMouseOut={handleMouseOut}
            style={{ background: 'rgb(247, 247, 247)' }}
        >
            <h1 className='contentTitle'><br />'PASSION'</h1>
            <div className="content">{isHover1 ? (
            <>
                우리는 끊임없는 열정으로
                <br />
                새로운 가치를 창출합니다.
            </>
            ) : (
                '열정과 함께하는 협력'
            )}</div>
        </div>
        <div
            className={isHover2 ? 'grow' : 'box'}
            onMouseOver={() => handleMouseOver(2)}
            onMouseOut={handleMouseOut}
            style={{ background: 'rgb(228, 252, 228)' }}
        >
            <h1 className='contentTitle'><br />'GROWTH'</h1>
            <div className="content">{isHover2 ? (
            <>
                우리는 팀원 모두의
                <br />
                성장을 추구합니다.
            </>
            ) : (
                '모두 함께 성장'
            )}</div>
        </div>
        <div
            className={isHover3 ? 'grow' : 'box'}
            onMouseOver={() => handleMouseOver(3)}
            onMouseOut={handleMouseOut}
            style={{ background: 'rgb(228, 239, 251)' }}
        >
            <h1 className='contentTitle'><br />'EXCELLENT'</h1>
            <div className="content">{isHover3 ? (
            <>
                저희 완자는 이름처럼,
                <br />
                항상 완벽한 결과물을
                <br />
                만들어냅니다.
            </>
            ) : (
                '완벽한 결과물'
            )}</div>
            </div>
        </div>
    </div>
    );
}

export default Vision;