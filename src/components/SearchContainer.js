import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FormRow, FormRowSelect } from "../components";
import { handleInput } from "../features/Search/searchJobSlice";

const SearchContainer = () => {
  const search = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const {
    searchText,
    status,
    jobType,
    jobTypeOptions,
    statusOptions,
    sort,
    // page,
    sortOptions,
    // numOfPages,
  } = search;

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    dispatch(handleInput({ name, value }));
  };

  return (
    <div>
      <form>
        <div className="form-rows-container">
          <FormRow
            id="searchText"
            name="searchText"
            labelText="Search"
            type="text"
            value={searchText}
            handleChange={handleChange}
          ></FormRow>

          <FormRowSelect
            id="status"
            name="status"
            labelText="Status"
            type="text"
            value={status}
            options={["all", ...statusOptions]}
            handleChange={handleChange}
          ></FormRowSelect>

          <FormRowSelect
            id="type"
            name="jobType"
            labelText="Type"
            type="text"
            value={jobType}
            options={["all", ...jobTypeOptions]}
            handleChange={handleChange}
          ></FormRowSelect>

          <FormRowSelect
            id="sort"
            name="sort"
            labelText="Sort"
            type="text"
            value={sort}
            options={sortOptions}
            handleChange={handleChange}
          ></FormRowSelect>
        </div>
      </form>
    </div>
  );
};

export default SearchContainer;

const Wrapper = styled.div`
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
