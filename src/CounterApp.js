import React, { useState, useEffect } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // useEffect to update the document title only when counter changes
  useEffect(() => {
    document.title = `Counter: ${counter}`;
    console.log("useEffect called");
  }, [counter]); // Dependency array ensures this runs only when `counter` changes

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleIncrement}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default CounterApp;
