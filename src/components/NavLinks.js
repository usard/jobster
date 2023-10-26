import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLinks = ({ data, toggleSidebar }) => {
  return (
    <Wrapper className="nav-links">
      {data.map((item) => {
        const { id, icon, name, path } = item;
        return (
          <NavLink className="link" onClick={toggleSidebar} key={id} to={path}>
            <span>{icon}</span> {name}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  .link {
    color: blue;
    padding-bottom: 1rem;
    text-decoration: none;
  }
`;
