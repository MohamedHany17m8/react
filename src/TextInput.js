import React from "react";

function TextInput({ label, value, onChange, required }) {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default TextInput;
