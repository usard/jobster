import React from "react";
import { useSelector } from "react-redux";
import StatsCard from "./StatsCard";
import styled from "styled-components";
import { FaCalendarCheck, FaBug, FaSuitcaseRolling } from "react-icons/fa";

const StatsContainer = () => {
  const {
    stats: { pending, interviewed, rejected },
    monthlyApplications,
  } = useSelector((store) => store.search);
  //   console.log("stats state :", stats);
  const statsData = [
    {
      id: 1,
      text: "Applications interviewed",
      count: interviewed,
      icon: <FaSuitcaseRolling />,
      color: "#8080ff",
      bgc: "#b3b3ff",
    },
    {
      id: 2,
      text: "Applications pending",
      count: pending,
      icon: <FaCalendarCheck />,
      color: "#ffc04d",
      bgc: "#ffe4b3",
    },
    {
      id: 3,
      text: "Applications rejected",
      count: rejected,
      icon: <FaBug />,
      color: "#ff8080",
      bgc: "#ffb3b3",
    },
  ];
  return (
    <Wrapper className="stats-container">
      <div className="cards-container">
        {statsData.map((item, index) => {
          return <StatsCard key={item.id} {...item}></StatsCard>;
        })}
      </div>
    </Wrapper>
  );
};

export default StatsContainer;

const Wrapper = styled.div`
  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  }
`;
