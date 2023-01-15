import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

function Header(props) {
  return (
    <>
      <div className="header">
        <div>
          <h1>My Bookcase</h1>
        </div>

        <div className="menu">
          <Link to="/"> Home </Link>
          <Link to="/bookcase" className="Book Case">
            <Link to="/about" className="About"></Link> Bookcase
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
