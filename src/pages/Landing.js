import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="" />
      </nav>
      <div className="page container">
        <article>
          <h1>Job Tracking App</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            autem natus nobis ab, nostrum perferendis sapiente, est, odio enim
            temporibus atque earum. Eos accusantium laborum, expedita itaque
            deserunt totam corrupti!.
          </p>
          <button>Login/Register</button>
        </article>
        <img src={main} alt="" />
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .page {
    display: flex;
    min-height: calc(100vh - var(--nav-height));
    align-items: center;
  }
`;
