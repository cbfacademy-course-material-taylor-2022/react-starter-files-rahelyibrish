import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

function Header(props) {
  return (
    <>
      <h1>My Bookcase</h1>
      <div className="navbar">
        {" "}
        <Link to="/"> Home </Link>
        <Link to="/bookcase" className="Book Case">
          <Link to="/about" className="About"></Link> Bookcase
        </Link>
      </div>
    </>
  );
}

export default Header;
