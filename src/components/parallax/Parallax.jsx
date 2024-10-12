import React, { useEffect } from "react";
import "./Parallax.css"; 
import mount1 from '../parallax/assests/mount1.png';
import mount2 from '../parallax/assests/mount2.png';
import leaf1 from '../parallax/assests/leaf1.png';
import leaf2 from '../parallax/assests/leaf2.png';
import bush2 from '../parallax/assests/bush2.png';
import bush1 from '../parallax/assests/bush1.png';

const Parallax = () => {
    useEffect(() => {
      const title = document.querySelector('.title');
      const leaf1Element = document.querySelector('.leaf1');
      const leaf2Element = document.querySelector('.leaf2');
      const bush2Element = document.querySelector('.bush2');
      const mount1Element = document.querySelector('.mount1');
      const mount2Element = document.querySelector('.mount2');
  
      const handleScroll = () => {
        const value = window.scrollY;
        title.style.marginTop = value * 1.1 + 'px';
        leaf1Element.style.marginLeft = -value + 'px';
        leaf2Element.style.marginLeft = value + 'px';
        bush2Element.style.marginBottom = -value + 'px';
        mount1Element.style.marginBottom = -value * 1.1 + 'px';
        mount2Element.style.marginBottom = -value * 1.2 + 'px';
      };
  
      window.addEventListener('scroll', handleScroll);
  
     
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <section className="home">
        <img src={mount2} alt="Mount2" className="mount2" />
        <img src={mount1} alt="Mount1" className="mount1" />
        <img src={bush2} alt="Bush2" className="bush2" />
        <h1 className="title">Namaste!</h1>
        <img src={bush1} alt="Bush1" className="bush1" />
        <img src={leaf2} alt="Leaf2" className="leaf2" />
        <img src={leaf1} alt="Leaf1" className="leaf1" />
      </section>
    );
  };
  
  export default Parallax;