import React from "react";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";

const Logo = ({ position }) => {
  return (
    <Wrapper>
      <img className={position} src={logo} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .center {
    display: block;
    margin: 0 auto;
  }
`;

export default Logo;
