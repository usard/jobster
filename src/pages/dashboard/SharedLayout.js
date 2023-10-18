import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar } from "../../components";
import styled from "styled-components";
// import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <Wrapper>
      <main>
        <div className={showSidebar ? "default-layout" : null}>
          {showSidebar && <BigSidebar />}
          {/* <BigSidebar className={showSidebar ? null : "hide-sidebar"} /> */}
          <div id="dashboard-page">
            <Navbar
              handleSidebar={handleSidebar}
              toggleDropdown={toggleDropdown}
              isDropdownOpen={isDropdownOpen}
            />
            <div>
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
`;
