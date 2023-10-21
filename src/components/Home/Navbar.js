import React from "react";
import "../styles/Navbar.css";
import logo from "../../assets/quin logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="quin logo" />
      </div>
      <div className="navbar-text">User List</div>
    </nav>
  );
};

export default Navbar;
