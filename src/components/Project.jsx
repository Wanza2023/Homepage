import { useState } from "react";
import Foot from "./Foot";
import "../styles/Project.css";

const Data = [
    {
        month: 9,
        content: [
            '팀 결성',
            '홈페이지 제작',
        ],
    },
    {
        month: 10,
        content: [
            '블로그 개발 예정'
        ],
    },
    {
        month: 11,
        content: [
            
        ],
    },
    {
        month: 12,
        content: [
            
        ],
    },
    {
        month: 1,
        content: [
            
        ],
    },
    {
        month: 2,
        content: [
            
        ],
    },
];

function Project(){
    const [selectedMonth, setSelectedMonth] = useState(9);
    
    const handleMonthChange = (month) => {
        setSelectedMonth(month);
    };

    return (
        <div style={{paddingTop: "4rem"}}>
            <div className="projectContainer">
                <h2>프로젝트</h2>
                <div className="monthSelector">
                    <ul>
                    {Data.map((item) => (
                        <li
                        key={item.month}
                        onClick={() => handleMonthChange(item.month)}
                        className={selectedMonth === item.month ? 'active' : ''}
                        >
                        {item.month}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className={`projectContent ${selectedMonth === 9 || selectedMonth === 10 ? 'horizontal' : ''}`}>
                    <h3>{selectedMonth}월</h3>
                    <ul>
                    {Data.find((item) => item.month === selectedMonth)?.content.map((event, index) => (
                        <li key={index}>
                        {event}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            <div>
                <Foot/>

            </div>
        </div>
    );
}

export default Project;