
import './App.css';
import Alert from './compoinents/Alert';
// import About from './compoinents/About';
import Navbar from './compoinents/Navbar';
import TextForm from './compoinents/TextForm';
import React, {useState} from 'react';

function App() {
  // Create a function toggle mode listeral in App.js
  //use useState
  const [mode, setMode] = useState("light")//intinizalie for mode is false ("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode have been enabled", "success")
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode have been enabled", "success")
    }
  }
  return (
    
    <>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
    {/* <Navbar /> */}
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert= {alert}/>
    <div className="container my-3">
     <TextForm showAlert = {showAlert} heading="Enter the text to analyze bellow" mode={mode}/> 
     {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
