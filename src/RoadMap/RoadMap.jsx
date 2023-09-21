import ToggleButton from "./ToggleButton";

function RoadMap(){
    const roadList = [
        {id:1,
            date:'9월',
            content:'팀 결성'
        },
        {id:2,
            date:'10월',
            content:''}
    ]

    return (
        <>
        <div>
            <h1>프로젝트</h1>
        </div>
        <div>
            {roadList.map((roadList,index)=>(<ToggleButton key={index} title={roadList.title} content={roadList.content}/>))}
        </div>
        </>
    );
}

export default RoadMap;