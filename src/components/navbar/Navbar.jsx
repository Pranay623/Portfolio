import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <div className="n-sides">
            <div className="n-left">
                <div className="n-name">Pranay</div>
                {/* <span>toggle</span> */}
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><a href="#Parallax">Home</a></li>
                        <li><a href="#Intro">Skills</a></li>
                        <li><a href="#About">About</a></li>
                        
                    </ul><a href="#Footer"><button className="button">
                        Contact Us
                    </button></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;