import { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`;
const Content = styled.p`
    font-size: 4rem;
    opacity: 0;
    font-weight: bold;
    &.ani{
        animation: ${FadeIn} 2s forwards ease-out;
    }
`;

export default function Question(){
    const [IsInViewport, setIsInViewport] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((e)=>{
            e.forEach((entry)=>{
                if (entry.isIntersecting){
                    setIsInViewport(true);
                } else {
                    setIsInViewport(false);
                }
            });
        }, {threshold:0.7});

        observer.observe(ref.current);
    });

    return(
        <div>
            <Content ref={ref} className={IsInViewport ? "ani": ""}>완자가 뭔가요?</Content>
        </div>
    );
}