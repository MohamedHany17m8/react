import React from "react";

function CheckboxInput({ label, checked, onChange }) {
  return (
    <div className="form-group">
      <label>
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
}

export default CheckboxInput;
