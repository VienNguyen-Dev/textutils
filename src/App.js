
import './App.css';
// import About from './compoinents/About';
import Navbar from './compoinents/Navbar';
import TextForm from './compoinents/TextForm';
import React, {useState} from 'react';

function App() {
  // Create a function toggle mode listeral in App.js
  //use useState
  const [mode, setMode] = useState("light")//intinizalie for mode is false ("light")
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    
    <>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
    {/* <Navbar /> */}
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container my-3">
     <TextForm heading="Enter the text to analyze bellow" mode={mode}/> 
     {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
