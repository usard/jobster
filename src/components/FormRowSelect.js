import React from "react";
import styled from "styled-components";

const FormRowSelect = ({ name, value, options, labelText, handleChange }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText}
      </label>
      <select
        className="form-select"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((item, index) => {
          return (
            <option id={item} key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;

const Wrapper = styled.div``;
