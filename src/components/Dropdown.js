import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const Dropdown = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {list.map((item) => {
        return (
          <li className='btn'
          onClick={()=> {console.log('list btn clicked ' ); return dispatch(item.action())}}
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
