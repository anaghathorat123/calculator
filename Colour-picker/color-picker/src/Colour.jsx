import React, { useState } from "react";

function Colour() {
  const [color, setColor] = useState("#7b1441");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="colour-div">
      <h1>Colour Picker</h1>
      <div className="colour-box" style={{ backgroundColor: color }}>
        <p>Selected color : {color}</p>
      </div>

      <label>Select a color : </label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default Colour
