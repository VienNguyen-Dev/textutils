import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=> {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upperCase!", "success")
  }
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }
  const handleClearClick = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text Cleared!", "success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowerCase!", "success")
  } 
// Credit: A
  const handleCopy = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("Text copied to clipboard!", "success")

  }

  // Credit: Code raha
  const handleExtraSpace = () => {
    let newText = text.split(/ [ ] + /)
    setText(newText.join(" "))
    props.showAlert("Extra Space Remove!", "success")
  }

  //Credit: shift
  const [theme, setTheme] = useState("light")

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const [text, setText] = useState('')
  // text ='new text here' //Wrong way to change the state
  //setText("new text") //Correct way to change the state
  
  return (
    <>
    <div className='container' data-bs-theme = {theme} style={{color: props.mode==="dark" ? "white" : "#042743"}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark" ?'gray':'white', color: props.mode==='dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
          <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
           <button className='btn btn-primary mx-1' onClick={handleTheme}>Toggle Theme</button>
        </div>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{ 0.008 *(text.split(" ").length) } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text : "Your enter something in the texbox above to preview it here" }</p>
    </div>
    </>
    
  )
}

