import React from "react";
import Github from "../assets/images/github.png";
import Notion from "../assets/images/notion.png";
import '../styles/Foot.css';
import Logo from "../assets/images/logo_wanza_w.png";

function Foot() {
    return (
        <div className='footer-container'>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <img className="main-logo" alt="" src={Logo}/><i className="fab fa-typo3"></i>
                    </div>
                    <div>
                        <a href="https://github.com/Wanza2023">
                            <img className="social-logo" alt="" src={Github}/>
                        </a>
                        <a href="https://www.notion.so/wanza-7a2bfa1d984347f28f9a4dd8964a9df9">
                            <img className="social-logo" alt="" src={Notion}/>
                        </a>
                    </div>
                    <div className="text-container">
                        <small className="website-rights">Contact:&nbsp; tnwls5792@gachon.ac.kr</small>
                        <small style={{color: "#a5a5a5"}} className="website-rights">wanza © 2023</small>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Foot;