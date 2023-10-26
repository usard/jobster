import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaWpforms } from "react-icons/fa";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = ({ handleSidebar }) => {
  const data = [
    { id: 1, icon: <IoStatsChartSharp />, name: "Stats", path: "/dashboard" },
    {
      id: 2,
      icon: <MdQueryStats />,
      name: "All Jobs",
      path: "/dashboard/all-jobs",
    },
    {
      id: 3,
      icon: <FaWpforms />,
      name: "Add Jobs",
      path: "/dashboard/add-jobs",
    },
    { id: 4, icon: <ImProfile />, name: "Profile", path: "/dashboard/profile" },
  ];
  return (
    <Wrapper>
      <IoCloseSharp className="close-btn" onClick={handleSidebar} />
      <div>
        <Logo position="center" />
        <div className="nav-center">
          <NavLinks toggleSidebar={handleSidebar} data={data} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;

const Wrapper = styled.div`
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    display: block;
  }
  .close-btn {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .center-logo {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
