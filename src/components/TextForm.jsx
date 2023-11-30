import React from 'react';
import { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');

    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleOnChange(event) {
        console.log("on change");
        setText(event.target.value)
    }
    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function handleClearText() {
        setText('');
    }
    function handleCopy() {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }
    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
            <div className='container' style={{
                backgroundColor: (props.mode === 'dark') ? '#495057' : '#ffffff',
                color: (props.mode === 'dark') ? '#ffffff' : '#000000'
            }}>
                <div className='container'>
                    <div className='mb-3'>
                        <h1>{props.heading}</h1>
                        <textarea value={text} onChange={handleOnChange}
                            style={{
                                backgroundColor: (props.mode === 'dark') ? '#6c757d' : '#ffffff',
                                color: (props.mode === 'dark') ? '#ffffff' : '#000000'
                            }}
                            className='form-control' id='myBox' rows="8" >
                        </textarea>
                    </div>
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
                    <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                </div>

                <div className='container my-3'>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").length} words & {text.length} characters</p>
                    <p>{0.7 * text.split(" ").length}seconds to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default TextForm;