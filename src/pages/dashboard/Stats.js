import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStats } from "../../features/Search/searchJobSlice";
import { StatsContainer, ChartsContainer } from "../../components";

const Stats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(" i am in useEffect stats");
    dispatch(showStats());
  }, []);
  return (
    <div className="page-center">
      <StatsContainer></StatsContainer>
      <ChartsContainer></ChartsContainer>
    </div>
  );
};

export default Stats;
