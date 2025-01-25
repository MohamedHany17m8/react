import React, { useState } from "react";

const InputComponent = () => {
  // Initialize state to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="inputField">Enter something: </label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default InputComponent;
