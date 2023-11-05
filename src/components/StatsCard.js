import React from "react";
import styled from "styled-components";

const StatsCard = ({ count, icon, text, color, bgc }) => {
  return (
    <Wrapper style={{ borderBottom: `5px solid ${color}` }}>
      <header>
        <span className="count" style={{ color: color }}>
          {count || 0}
        </span>
        <span className="icon" style={{ backgroundColor: bgc, color: color }}>
          {icon}
        </span>
      </header>
      <h5>{text}</h5>
    </Wrapper>
  );
};

export default StatsCard;
const Wrapper = styled.div`
  border-radius: 8px;
  padding: 30px 15px;
  width: 90%;
  height: 160px;
  color: rgba(0, 0, 0, 0.8);
  background-color: white;
  header {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .count {
    font-size: 3rem;
  }
  .icon {
    padding: 5px 10px;
    font-size: 2rem;
  }
  h5 {
    margin-top: 25px;
    font-size: 20px;
  }
`;
