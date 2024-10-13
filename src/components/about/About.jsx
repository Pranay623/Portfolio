import React from "react";
import './About.css';
import Pfp from '../intro/images/pfp new.png'; 

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={Pfp}></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Pranay Srivastava from Kanpur, Uttar Pradesh. Currently, I’m a trainee at the Big Data Center of Excellence at AKGEC, where I’m gaining valuable experience in data technologies. Alongside, I work as a graphic designer and video editor at Horizon AKGEC. I’m passionate about creativity and technology, with a competitive spirit and strong leadership skills. In my free time, I enjoy playing the guitar, a hobby that brings balance to my busy schedule</p>
                    </div>
                    <div className="about-ach">
                        <div className="ach">
                            <h3>TownHall Winner</h3>   
                            <p>2023-24</p> 
                        </div>     
                        <hr/>
                        <div className="ach">
                            <h3>Startup Conclave Winner</h3>    
                            <p>2023-24</p>
                        </div>          
                        <hr/>
                        <div className="ach">
                            <h3>Hackathons</h3>    
                            <p>SIH , ANVESHNA , ABES....</p>
                        </div> 

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
