import React from "react";

const FormRow = ({ type, name, iref }) => {
  return (
    <div className="form-row">
      <label htmlFor="" className="form-label">
        {name}
      </label>
      <input type={type} name={name} ref={iref} className="form-input" />
    </div>
  );
};

export default FormRow;
