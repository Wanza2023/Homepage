import React from "react";
import RoadListEX from "./RoadListEX";

function RoadMapEX(){

    const roadLists = [
        {
            id: 1,
            date: "9월",
            content: ['팀 결성','홈페이지 제작']
        },
        {
            id:2,
            date: "10월",
            content: ['미정']
        }
    ]
    return (
        <div>
            <RoadListEX items={roadLists}/>
        </div>
    );
}

export default RoadMapEX;