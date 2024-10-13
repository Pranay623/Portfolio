import React from "react";
import "./Intro.css";
import Pfp from '../intro/images/pfp new.png'; 

const Intro = () => {
    
    return(
        <div className="intro">
            <section id="hero">
            <div className="img">
            <img src={Pfp} alt="Profile" className="pfp-img" />
            </div>
            </section>
            <div className="i-left">
                <div className="i-name">
                    <h1>Pranay Srivastava</h1>
                    <br/>
                    <h2>Web-Developer</h2>
                    <br/>
                    <br/>
                    <div class="icons">
                    <a href="https://www.instagram.com/_srivastava_pranay_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram Icon" /></a>
                    <a href="https://www.linkedin.com/in/pranay-srivastava-95b839296/"><img src="https://img.icons8.com/color/48/linkedin.png" alt="Instagram Icon" /></a>
                    <a href="https://github.com/Pranay623"><img src="https://img.icons8.com/glyph-neue/48/github.png" alt="Instagram Icon" /></a></div>
                </div>
                <br/>
                <a href="#Footer"><button className="button" id="but-1">
                        Hire Me
                    </button></a>
                
            </div>
            <div className="i-swipe">
    <h1 className="tech">Technical Skills</h1>
    <section className="container">
        <div className="card-row">
            <div className="card">
                <img src="https://img.icons8.com/color/96/html-5--v1.png" alt="React" />
                <p>HTML 5</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/color/96/javascript.png" alt="JavaScript" />
                <p>JavaScript</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/fluency/48/css3.png" alt="Python" />
                <p>CSS 3</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/color/96/mongodb.png" alt="MongoDB" />
                <p>MongoDB</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/dusk/64/postman-api.png" alt="MongoDB" />
                <p>Postman</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="MongoDB" />
                <p>Bootstrap</p>
            </div>
        </div>
        <div className="card-row">
            <div className="card">
                <img src="https://img.icons8.com/color/96/nodejs.png" alt="React" />
                <p>Node Js</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/nolan/64/express-js.png" alt="JavaScript" />
                <p>Express Js</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/color/96/adobe-after-effects.png" alt="Python" />
                <p>After Effects</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/color/96/adobe-illustrator--v1.png" alt="MongoDB" />
                <p>Illustrator</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/color-glass/48/adobe-photoshop.png" alt="MongoDB" />
                <p>Photoshop</p>
            </div>  
        </div>
        <div className="card-row">
            <div className="card">
                <img src="https://img.icons8.com/color/96/adobe-premiere-pro--v1.png" alt="React" />
                <p>Premier Pro </p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/fluency/48/figma.png" alt="JavaScript" />
                <p>Figma</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/ios-filled/50/arduino.png" alt="Python" />
                <p>Ardurino</p>
            </div>
            <div className="card">
                <img src="https://img.icons8.com/material-outlined/24/notion--v1.png" alt="MongoDB" />
                <p>Notion</p>
            </div>
            
        </div>
        
    </section>
</div>

        </div>
    )
}

export default Intro;