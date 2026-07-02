import React, { useState } from 'react'

export default function TextForm(props) {
    // State ko khali string ('') rakhein taaki count shuruat mein 0 rahe
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCaClick = () => {
        let words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
        }
        let newText = words.join(" ");
        setText(newText);
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyText = () => {
        var textElem = document.getElementById("myBox");
        textElem.select();
        navigator.clipboard.writeText(textElem.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
            <div className="container">
                {/* FIX: mb-4 ko className ke andar dala */}
                <h3 className="mb-4">{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                {/* Buttons list (Duplicate button removed) */}
                <button className="key mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="key mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="key mx-2 my-2" onClick={handleCaClick}>Capitalize Words</button>
                <button className="key mx-2 my-2" onClick={handleClearText}>Clear Text</button>
                <button className="key mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
                <button className="key mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            
            <div className="container my-3">
                <h3>Your text summary</h3>
                {/* Words accurately count honge, khali spaces ko filter out karke */}
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}