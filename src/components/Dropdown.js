import React from "react";
import styled from "styled-components";
const Dropdown = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item) => {
        return (
          <li
          // // onClick={(item) => {
          // //   item.action;
          // }}
          >
            {item.key}
          </li>
        );
      })}
    </Wrapper>
  );
};

export default Dropdown;
const Wrapper = styled.ul`
  width: 90px;
  position: absolute;
  border: 1px solid grey;
  border-radius: 2px;
`;
