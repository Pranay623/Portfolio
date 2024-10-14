
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Parallax from './components/parallax/Parallax';
import About from './components/about/About';
import Footer from './components/footer/Footer';

import './App.css'

function App() {
  

  return (
    <>
      
    <div className="app">
            <Navbar />
            <section id="Parallax"><Parallax /> </section>
            
      </div>
        <div>
          <section id="Intro"> <Intro /></section>
         
          
        </div>
        
        <div><section id="About"><About/></section></div>
        <div><section id="Footer"><Footer/></section></div>
    </>
  ) 
}

export default App
