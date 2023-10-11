import React from "react";

const FormRow = ({ type, name, ref }) => {
  return (
    <div className="form-row">
      <label htmlFor="" className="form-label">
        {name}
      </label>
      <input type={type} name={name} className="form-input" ref={ref} />
    </div>
  );
};

export default FormRow;
