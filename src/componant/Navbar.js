import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <h1>USER TABLE</h1>
      <p>Add user using redux toolkit</p>
      <div className="list">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CODE</li>
        <li>CONTACT</li>
      </div>
    </div>
  );
};

export default Navbar;
