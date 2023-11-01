import React, { useEffect } from "react";
import styled from "styled-components";
import { SearchContainer, JobsContainer } from "../../components";
// import { useSelector, useDispatch } from "react-redux";
import { findJobs, handleInput } from "../../features/Search/searchJobSlice";

const AllJobs = () => {
  console.log(" render in alljobs");
  return (
    <Wrapper>
      <SearchContainer></SearchContainer>
      <JobsContainer></JobsContainer>
    </Wrapper>
  );
};

export default AllJobs;

const Wrapper = styled.div`
  height: 100%;
  form {
    height: 40%;
    min-height: 200px;
    overflow: scroll;
    // background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-rows-container {
    width: 100%;
    display: flex;
    // justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .form-row {
    min-width: 30%;
  }
  .form-label {
    display: block;
  }
  .form-input,
  .form-select {
    padding: 0.1rem 0.5rem;
    width: 100%;
  }

  @media (max-width: 900px) {
    .form-row {
      width: 100%;
    }
  }
`;
