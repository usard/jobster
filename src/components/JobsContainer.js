import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findJobs } from "../features/Search/searchJobSlice";

import { JobCard } from "../components";
const JobsContainer = () => {
  const dispatch = useDispatch();
  console.log("render in jobsContainer");
  const search = useSelector((store) => store.search);
  const { searchText, status, jobType, sort, jobs, page, isLoading } = search;

  useEffect(() => {
    console.log("  useeffect  invoked  : find Jobs  ");
    dispatch(findJobs());
  }, [searchText, status, jobType, sort, page]);

  const arr = [];
  arr.length = 4;
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    if (jobs.length <= 0) {
      return <div> No jobs to display</div>;
    }
  }
  return (
    <Wrapper>
      {jobs.map((job, index) => {
        const { _id: id } = job;
        return <JobCard key={id} {...job} />;
      })}
    </Wrapper>
  );
};

export default JobsContainer;

const Wrapper = styled.section`
  background: #f0f4f8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 710px) {
    grid-template-columns: 1fr;
  }
`;
