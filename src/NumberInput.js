import React from "react";

function NumberInput({ label, value, onChange, required }) {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default NumberInput;
