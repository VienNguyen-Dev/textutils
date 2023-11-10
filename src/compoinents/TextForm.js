import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=> {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }
  const handleClearClick = () => {
    let newText = ''
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const [text, setText] = useState('')
  // text ='new text here' //Wrong way to change the state
  //setText("new text") //Correct way to change the state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{ 0.008 *(text.split(" ").length) } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  )
}

