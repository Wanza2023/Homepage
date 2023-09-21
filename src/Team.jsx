import "./styles/Team.css";
import result from "./assets/images/result.png"
import { useState, useEffect, useRef } from "react";

export default function Team(){
    const [IsInViewport, setIsInViewport] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const callback = (entries)=>{
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // 요소가 뷰포트에 나타났을 경우
                    setIsInViewport(true);
                } else {
                  // 요소가 뷰포트를 벗어난 경우
                    setIsInViewport(false);
                    }
            });
        }

        const observer = new IntersectionObserver((callback), {threshold: 0.7});
        observer.observe(ref.current)
    });
    return (
        <div className="container" ref={ref}>
            {console.log(IsInViewport)}
            <img className={IsInViewport ? "slide-after" : "slide-before"} src={result} alt=""/>
            <div className={IsInViewport? "wrapper-after":"wrapper-before"}>
                <div className="logo-description">
                    <p className="logo">wanza</p>
                    <p className="description"><span>완</span>벽한 결과를 내보<span>자</span></p>
                </div>
                <br/>
                <div className="contents">
                    <p>완자는 여러 재료가 똘똘 뭉쳐 하나의 맛있는 음식을 만들어 냅니다.</p>
                    <p>저희도 모든 구성원이 똘똘 뭉쳐 완벽한 결과를 내고자 합니다.</p>
                </div>
            </div>
        </div>
    )
}