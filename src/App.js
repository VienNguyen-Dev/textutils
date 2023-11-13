
import './App.css';
import Alert from './compoinents/Alert';
import About from './compoinents/About';
import Navbar from './compoinents/Navbar';
import TextForm from './compoinents/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // Create a function toggle mode listeral in App.js
  //use useState
  const [mode, setMode] = useState("light")//intinizalie for mode is false ("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)  =>  {
    setAlert({
      msg: message,
      type: type
    })
  }
    const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark have been enabled!", "success") 
      document.title = `TextUtils - Dark Mode`
      setTimeout(() => {
        setAlert(null)
      }, 2000);
      // setInterval(() => {
      //   document.title = `TextUtils is Amazing Mode`
      // }, 2000);
      // setInterval(() => {
      //   document.title = `Install TextUtils Now`
      // }, 1500);
    
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light havebeen enabled!", "success")
      document.title = `TextUtils - Light Mode`
      setTimeout(() => {
        setAlert(null)
      }, 2000);
      
    }
  }
  return (
    
    <>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
    {/* <Navbar /> */}
    <BrowserRouter>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} aboutText="About" />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            {/* /users ---> compoinent 1
            /users/home ---? compoiments 2 */}
              <Route exact path="/about" element={<About/>}>
              </Route>
              <Route exact path="/"  element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze bellow" mode={mode}/>}>     
              </Route>
          </Routes>
      </div>
    </BrowserRouter>
      
  </>
  );
}

export default App;
