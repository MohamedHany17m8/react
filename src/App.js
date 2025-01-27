// App.js
import React, { createContext, useState } from "react";
import MyComponent from "./MyComponent";

// Create a context
export const MyContext = createContext();

function App() {
  const [value, setValue] = useState("Hello from Context!");

  return (
    // Provide the context value to the entire component tree
    <MyContext.Provider value={{ value, setValue }}>
      <div>
        <h1>App Component</h1>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
