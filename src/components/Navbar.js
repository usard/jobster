import React, { useState } from "react";
import styled from "styled-components";
// import Wrapper from "../assets/wrappers/Navbar";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { BiSolidChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";

const Navbar = ({ handleSidebar, toggleDropdown, isDropdownOpen }) => {
  return (
    <Wrapper>
      <div className="nav-center nav-layout">
        <RxHamburgerMenu className="menu-icon" onClick={handleSidebar} />
        <h2>DashBoard</h2>
        <div className="user-actions">
          <div>
            <span>
              <RxAvatar className="avatar" />
            </span>
            <p>
              Welcome user
              <span>
                <BiSolidChevronDown
                  className="dropdown-btn"
                  onClick={toggleDropdown}
                />
              </span>
            </p>
            <div>
              {isDropdownOpen && (
                <Dropdown
                  list={[
                    { key: "logout", action: "" },
                    { key: "lkahkgkl", action: "" },
                    { key: "logout", action: "" },
                    { key: "logoutlk", action: "" },
                    { key: "logout", action: "" },
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  .nav-center {
    width: 95%;
    margin: 0 auto;
  }
  .nav-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menu-icon {
    font-size: 2rem;
    cursor: pointer;
  }
  .avatar {
    font-size: 2rem;
  }
  .dropdown-btn {
    cursor: pointer;
    padding: 1px;
  }
`;
