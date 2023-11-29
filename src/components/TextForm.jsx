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

    return (
        <>
            <div className='container'>
                <div className='mb-3'>
                    <h1>{props.heading}</h1>
                    <textarea value={text} onChange={handleOnChange}
                        className='form-control' id='myBox' rows="8" >
                    </textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            </div>

            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.7 * text.split(" ").length}seconds to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;