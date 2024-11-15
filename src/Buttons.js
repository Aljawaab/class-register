import React, { useState } from "react";

function Buttons() {
  const [clickedButton, setClickedButton] = useState(null); 

  const handleButtonClick = (label) => {
    setClickedButton(label);
  };

  return (
    <div>
      <button
        onClick={() => handleButtonClick("A")}
        style={{
          backgroundColor: clickedButton === "A" ? "red" : "white", 
          color: "black", 
        }}
      >
        A
      </button>
      <button
        onClick={() => handleButtonClick("P")}
        style={{
          backgroundColor: clickedButton === "P" ? "green" : "white", 
          color: "black", 
        }}
      >
        P
      </button>
    </div>
  );
}

export default Buttons;
 