import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

interface Props {
  logoText: string;
}

function Navbar(props: Props) {
  return (
    <nav className="navbar">
      <div className="left">
        <span className="logo-text">{props.logoText || "Logo"}</span>
      </div>
      <div className="right">
        <NavLink exact to="/" className="item" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink exact to="/answers" className="item" activeClassName="active">
          Answers
        </NavLink>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoText: PropTypes.string,
};

export default Navbar;
