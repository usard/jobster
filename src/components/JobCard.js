import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteJob } from "../features/Job/jobSlice";
import { showLoading, hideLoading } from "../features/Search/searchJobSlice";

const JobCard = ({
  _id: jobID,
  jobLocation,
  company,
  position,
  jobType,
  status,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (jobID) => {
    dispatch(deleteJob(jobID));
  };
  console.log("card :", company, position);
  return (
    <Wrapper className="card jobcard">
      <header>
        <div className="logo"></div>
        <div className="position-company">
          <h2>{position}</h2>
          <h4>{company}</h4>
        </div>
      </header>
      <div className="info-grid">
        <div className="info">
          <span></span>
          <span>{jobLocation}</span>
        </div>
        <div className="info">
          <span></span>
          <span> {moment().format("MMM Do YY")}</span>
        </div>
        <div className="info">
          <span></span>
          <span>{jobType}</span>
        </div>
        <div className="info">
          <span></span>
          <span>{status}</span>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            Edit
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              handleDelete(jobID);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobCard;

const Wrapper = styled.article`
  text-overflow: ellipsis;
  max-width: 600px;
  background: white;
  border-radius: 10px;
  border-bottom: 0 4px 6px -1px;
  margin-bottom: 2px;
  .logo {
    width: 40px;
    height: 40px;
    background: blue;
    margin-right: 1rem;
  }
  header {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
  }
  .info-grid {
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .info {
    margin-bottom: 10px;
  }
  span {
    font-size: 1.15rem;
  }
`;
