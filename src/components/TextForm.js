import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleDownClick = () => {
    // console.log("Button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("String Reversed", "success");
  };

  const Clear = () => {
    // console.log("On Change");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#272727" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          Example text area
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#272727" : "white",
              color: props.mode === "dark" ? "white" : "#272727",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverse}>
          Reverse
        </button>
        <button className="btn btn-primary mx-1" onClick={Clear}>
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#272727" }}
      >
        <h1>Your Text Summary</h1>
        <p>Number Of Words = {text.split(" ").length}</p>
        <p>Number Of Characters = {text.length}</p>
        <p>Avg Time to Read = {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview Text</h2>
        <p>
          {text.length > 0 ? text : "Enter Something in the TextBox to Preview"}
        </p>
      </div>
    </>
  );
}
