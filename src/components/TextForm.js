import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: '#042743'
      });
      setBtnText('Disable Dark Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText('Enable Dark Mode');
    }
  };

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
      <div className='container' style={myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={myStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to Lowercase
        </button>

        
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button type="submit" onClick={speak} className="btn btn-warning mx-2">
          Speak
        </button>

        <button className="btn btn-dark mx-2" onClick={toggleStyle}>
          {btnText}
        </button>
      </div>

      <div className="container my-3" style={myStyle}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
