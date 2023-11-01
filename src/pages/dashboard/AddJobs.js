import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  newJob,
  clearJob,
  handleInput,
  editJob,
} from "../../features/Job/jobSlice";

import { FormRow, FormRowSelect } from "../../components";

const AddJobs = () => {
  console.log("render in add jobs");
  const dispatch = useDispatch();
  console.log(
    "job slice in add job :",
    useSelector((store) => store.job)
  );
  const job = useSelector((store) => store.job);
  const {
    position,
    company,
    jobLocation,
    jobTypeOptions,
    statusOptions,
    status,
    jobType,
    editJobId,
  } = job;
  console.log("editJobId :", editJobId);
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("selected name value :", name, "   ", value);
    dispatch(handleInput({ name, value }));
  };

  return (
    <Wrapper>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!editJobId) {
            dispatch(newJob(job));
          } else {
            dispatch(editJob({ editJobId }));
          }
        }}
      >
        <h1>{!editJobId ? "Add Job" : "Edit Job"}</h1>
        <div className="form-rows-container">
          <FormRow
            id="1"
            name="position"
            labelText="Position"
            type="text"
            value={position}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            id="2"
            name="company"
            labelText="Company"
            type="text"
            value={company}
            handleChange={handleChange}
          ></FormRow>
          <FormRow
            id="3"
            name="jobLocation"
            labelText="Job Location"
            type="text"
            value={jobLocation}
            handleChange={handleChange}
          ></FormRow>
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            options={jobTypeOptions}
            value={jobType}
            handleChange={handleChange}
          ></FormRowSelect>
          <FormRowSelect
            name="status"
            labelText="Status"
            options={statusOptions}
            value={status}
            handleChange={handleChange}
          ></FormRowSelect>
        </div>
        <div className="form-btn-container">
          <button
            type="button"
            onClick={() => {
              dispatch(clearJob());
            }}
            className="btn act-btn"
          >
            clear
          </button>
          <button type="submit" className="btn act-btn">
            {!editJobId ? "Add job" : "Edit Job"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;

const Wrapper = styled.div`
  .form-rows-container {
    display: flex;
    flex-wrap: wrap;
  }
  .form-row {
    padding: 1rem 1rem;
    min-width: 30%;
  }
  .form-input {
    width: 100%;
  }
  .form-label {
    display: block;
  }
  .form-select {
    width: 100%;
  }
  .form-btn-container {
    display: flex;
    min-width: 30%;
  }
  @media (max-width: 850px) {
    .form-row {
      width: 100%;
    }
  }
`;
