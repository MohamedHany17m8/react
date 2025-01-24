import React from "react";
import "./NewComponent.css";
const NewComponent = ({ id, title, children }) => {
  return (
    <div className="new-component">
      <h3>ID: {id}</h3>
      <h4>Title: {title}</h4>
      <div className="content">{children}</div> {/* Render children as JSX */}
    </div>
  );
};

// Default props for NewComponent
NewComponent.defaultProps = {
  id: "N/A", // Default ID
  title: "No Title Provided", // Default title
  children: <p>No content available</p>, // Default children as JSX
};

export default NewComponent;
