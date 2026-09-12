const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value)
  }

  return(
    <div id="color-picker-container" style={{backgroundColor:color}}>
      <input id="color-input" type="color" onChange={handleColorChange} value={color}></input>
    </div>
  );
};