import { useState } from 'react'
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Parallax from './components/parallax/Parallax';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div style={{ fontFamily: 'MyCustomFont, sans-serif' }}>
  Hello, this is a custom font loaded from CDN!
</div> */}
    <div className="app">
            <Navbar />
            <Parallax /> 
      </div>
        <div><Intro /></div>
    </>
  )
}

export default App
