import React from "react";
import NewComponent from "./NewComponent";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("Mohamed");
  const handleClick = () => {
    setName("Hany"); // Change the name to "Hany"
  };
  const items = [
    {
      id: 1,
      title: "Item 1",
      children: (
        <div>
          <h1>Name: {name}</h1>
          <button onClick={handleClick}>Change Name</button>
        </div>
      ),
    },
    {
      id: 2,
      title: "Item 2",
      children: (
        <div>
          <p>This is the content for Item 2.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Item 3",
      children: <p>This is a simple paragraph for Item 3.</p>,
    },
    {}, // Empty object (no props provided)
  ];

  return (
    <div>
      <h1>Rendering NewComponent with JSX Children</h1>
      {items.map((item, index) => (
        <NewComponent
          key={item.id || index} // Use index as fallback key if id is missing
          id={item.id}
          title={item.title}
        >
          {item.children}
        </NewComponent>
      ))}
    </div>
  );
};

export default App;
