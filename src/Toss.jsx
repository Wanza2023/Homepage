import React, { useState } from "react";
import "./Toss.css"; // 스타일 파일을 불러옵니다.

function Toss() {
    const ItemList = [
        {
        id: 1,
        date: "9월",
        content: ["팀 결성", "팀 홈페이지 제작"],
        },
        {
        id: 2,
        date: "10월",
        content: ["미정", "아직 정해지지 않음", "123"],
        },
    ];

    const [selectedItem, setSelectedItem] = useState(1); // 9월을 기본으로 선택합니다.

    const handleDateClick = (id) => {
        // 클릭한 아이템의 ID를 상태에 설정
        setSelectedItem(id);
    };

    return (
        <div className="container"> {/* 컨테이너를 추가하여 가운데 정렬합니다. */}
        <ul className="date-list">
            {ItemList.map((item) => (
            <li
                // 아이템의 date를 클릭했을 때 해당 아이템의 content를 보여줍니다.
                onClick={() => handleDateClick(item.id)}
                className={selectedItem === item.id ? "active" : ""}
                key={item.id}
            >
                {item.date}
            </li>
            ))}
        </ul>
        <div className="content-container">
            {/* 선택한 아이템의 content를 옆으로 출력합니다. */}
            <div className="content">
            {ItemList.find((item) => item.id === selectedItem)?.content.join(" ")}
            </div>
        </div>
        </div>
    );
}

export default Toss;