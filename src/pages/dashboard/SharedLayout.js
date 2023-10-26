import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import styled from "styled-components";
// import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSmallSidebarOpen, setIsSmallSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
    setIsSmallSidebarOpen(!isSmallSidebarOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <Wrapper>
      <main>
        {isSmallSidebarOpen && <SmallSidebar handleSidebar={handleSidebar} />}
        <div
          className={showSidebar ? "default-layout smallscreen-layout" : null}
        >
          {showSidebar && <BigSidebar className="bigsidebar" />}

          {/* <BigSidebar className={showSidebar ? null : "hide-sidebar"} /> */}
          <div id="dashboard-page">
            <Navbar
              handleSidebar={handleSidebar}
              toggleDropdown={toggleDropdown}
              isDropdownOpen={isDropdownOpen}
            />
            <div className="page-center">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  width: 100%;
  .default-layout {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
  }
  .nosidebar-layout {
  }
  #dashboard-page {
    width: 95%;
    margin: 0 auto;
  }
  @media screen and (max-width: 900px) {
    .default-layout {
      display: block;
    }
  }
`;
