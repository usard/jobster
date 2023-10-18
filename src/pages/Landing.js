import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import main from "../assets/images/main.svg";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>{<Logo />}</nav>
      <div className="page container">
        <div className="article">
          <h1>Job Tracking App</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            autem natus nobis ab, nostrum perferendis sapiente, est, odio enim
            temporibus atque earum. Eos accusantium laborum, expedita itaque
            deserunt totam corrupti!.
          </p>
          <Link to="/register" className="btn">
            Login/Register
          </Link>
        </div>
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
    display: grid;
    min-height: calc(100vh - var(--nav-height));

    img {
      width: 100%;
      object-fit: cover;
      display: none;
    }
    .main-logo {
      display: none;
    }
    p {
      line-height: 1.5rem;
      letter-spacing: 0.5px;
      color: grey;
    }
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      align-items: center;

      .article {
        margin-top: -7rem;
      }
      img {
        display: block;
      }
    }
  }
`;
