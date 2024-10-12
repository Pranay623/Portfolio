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
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        
                    </ul>
                    <button className="button">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;