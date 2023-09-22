import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/images/logo_wanza.png";

function Navbar(){
    return(
        <div className="Navbar">
        <nav className="NavbarItems">
            <span className="navbar-logo">
                <a href="/" className="nav-links">
                <img className="logo" src={Logo} alt="wanzaLogo"></img>
                </a>
            </span>
            <div className="nav-links">
                <a className="nav-link" href="#Wanza" >팀소개</a>
                <a className="nav-link" href="#Vision" >비전</a>
                <a className="nav-link" href="#Member" >팀원</a>
                <a className="nav-link" href="#Project" >프로젝트</a>
            </div>
        </nav>
        </div>
        
    );
}

export default Navbar;