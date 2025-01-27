// MyComponent.js
import React, { useContext } from "react";
import { MyContext } from "./App";

function MyComponent() {
  // Consume the context
  const { value, setValue } = useContext(MyContext);

  const handleChange = () => {
    setValue((prevValue) =>
      prevValue === "Hello from Context!"
        ? "Updated Value from MyComponent!"
        : "Hello from Context!"
    );
  };

  return (
    <div>
      <h2>MyComponent</h2>
      <p>Context Value: {value}</p>
      <button onClick={handleChange}>Update Context</button>
    </div>
  );
}

export default MyComponent;
