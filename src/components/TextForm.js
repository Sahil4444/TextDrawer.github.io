import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpper = () => {
    console.log("Upper Clicked!");
    setText(text.toUpperCase());
  };

  const handleChange = (event) => {
    console.log("Change Clicked!");
    setText(event.target.value);
  };

  const handleLower = () => {
    console.log("Lower Clicked!");
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    console.log("Clr Clicked!");
    setText("");
  };

  const handleItalic = () => {
    console.log("Italic Clicked!");
    document.getElementById("textArea").style.fontStyle = "italic";
  };

  const handlenonItalic = () => {
    console.log("Non - Italic Clicked!");
    document.getElementById("textArea").style.fontStyle = "";
  };

  // const textAreaStyle = {
  //   boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  // };

  let bsp = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px';

  return (
    <>
      <div className="mb-4" style={{color: props.mode==='light'?'black':'#fff'}}>
        <h2>Enter text below</h2>
        <textarea
          className={`form-control mb-3 text-${props.mode==='dark'?'light':'dark'}`}
          id="textArea"
          rows="9"
          onChange={handleChange}
          value={text}
          placeholder="Type here..."
          style={{backgroundColor: props.mode==='dark'?'black':'white', boxShadow: bsp}}
        ></textarea>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpper}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleLower}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleItalic}
          >
            <i>Convert to Italic</i>
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handlenonItalic}
          >
            <i>Remove Italic</i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClear}
          >
            Clear Textarea
          </button>
        </div>
      </div>

      <div id="analytics" className="mt-3">
        <h2>Text Analytics</h2>
        <div className="mt-3 p-2">
          <p>Word Count: <span id="word-count">{text.length===0?'0':text.split(" ").length}</span></p>
          <p>Char Count: <span id="char-count">{text.length===0?'0':text.length}</span> </p>
          <p>White Space Count: <span id="w-s-count">{text.length===0?'0':text.split(" ").length-1}</span> </p>
          <p>Sentence Count: <span id="sen-count">{text.length===0?'0':text.split(".").length}</span> </p>
        </div>
      </div>
    </>
  );
}
