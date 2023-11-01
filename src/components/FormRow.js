import React from "react";

const FormRow = ({ labelText, type, name, value, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        // onChange={(event) => handleChange(name, event)}
        onChange={(event) => handleChange(event)}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
