import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
const BigSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <Logo />
        <br />
        <br />
        <br />
        <div className="nav-links">
          <Link className="link" to="/dashboard">
            Stats
          </Link>
          <Link className="link" to="/dashboard/all-jobs">
            All Jobs
          </Link>
          <Link className="link" to="/dashboard/add-jobs">
            Add Jobs
          </Link>
          <Link className="link" to="/dashboard/profile">
            Profile
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

const Wrapper = styled.aside`
  @media screen and (max-width: 900px) {
    display: none;
  }
  width: 270px;
  height: 100vh;
  border: 1px solid grey;
  border-radius: 3px;
  .sidebar-container {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    .link {
      display: block;
    }
  }
  .link {
    padding: 1rem 0;
    text-decoration: none;
    font-size: 1.2rem;
  }
  .link:hover {
    pointer: cursor;
    padding: 1rem 1rem;
    transition: 0.5s;
    background-color: grey;
  }
`;
