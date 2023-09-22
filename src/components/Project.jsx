import React from "react";
import ProImg from "../assets/images/project.png";
import Foot from "./Foot";

function Project(){
    return(
        <div style={{paddingTop: "4rem"}}>
            <img style={{marginBottom: "0rem", padding: "0rem"}} 
            alt="" src={ProImg} height="400px" width="750px"/>
            <Foot/>
        </div>
    );  
}

export default Project;