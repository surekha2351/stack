// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FaRegLifeRing } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="left-section">
            <div className="stackoverflow-icon">
              <img
                src="https://th.bing.com/th/id/OIP.dKsCms0C9qktPUSrneMyRwHaHa?rs=1&pid=ImgDetMain"
                alt=""
                className="logo"
              />{" "}
              Stack<span className="logoName">Overflow</span>
            </div>
            <div className="hamberger-menu">&#9776;</div>
            <div>
            <HiMiniMagnifyingGlass className="help2" />
              <input
                type="text"
                placeholder="Search..."
                className="search-bar"
              />
            </div>
          </div>
          <div className="middle-section">
            <div className="help hi">
            <FaRegLifeRing className="help1"/>Help</div>
            <div className="tour hi"><HiMiniComputerDesktop className="help1"/>Tour</div>
            <div className="profile hi">
              <div className="profile-picture">
                {/* Replace 'profile.jpg' with the actual path to your profile picture */}
                <img
                  src="https://res.cloudinary.com/drdjty87p/image/upload/v1692382686/OIP_10_ocfupm.jpg"
                  alt="Profile"
                />
              </div>
              <div className="down-arrow">
                <FontAwesomeIcon icon={faCaretDown} className="dropdown" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
