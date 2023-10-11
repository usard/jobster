import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper className="container">
      <div>
        <h1>404</h1>
        <p>page cannot be found</p>
      </div>
    </Wrapper>
  );
};

export default Error;
const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    text-align: center;
  }
`;
