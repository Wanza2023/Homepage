import React from "react";
import styled,{keyframes} from "styled-components";
import Wanzas from "../assets/images/wanzas_2.png";

const HomeWrap = styled.div`
    width: 50%;
    margin: 1rem auto;
    position: relative;
`;
const FadeIn = keyframes`
    0%{
        opacity:0;
        transform: translat(0,0);
    }
    100%{
        opacity:1;
        transform: translate(1,1);
    }
`;
const Catch = styled.div`
    padding: 0.5rem 1rem;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #2e2e2e;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    font-size: 4rem;
    font-weight: 700;
    line-height: normal;
    overflow: hidden;
    animation: ${FadeIn} 2s ease-out;
`;
//transform: translateY(20px);
const ImageDiv = styled.div`
    width: 100%;
    vertical-align: middle;
`;
const Wanzaz = styled.img`
    width: 100%;
    height: 100%;
`;

function Home(){
    return(
        <div>
            <HomeWrap>
            <Catch>
                <h3 style={{whiteSpaceCollapse: "preserve", textWrap: "wrap", wordBreak: "keep-all"}}>모두 모여 하나로</h3><p style={{fontSize: "3rem"}}>wanza</p>
            </Catch>
            <ImageDiv><Wanzaz src={Wanzas} alt=""/></ImageDiv>
            </HomeWrap>
        </div>
    );
}

export default Home;
