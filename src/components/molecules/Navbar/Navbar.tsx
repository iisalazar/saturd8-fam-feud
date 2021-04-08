import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
				<Link to="/" className="item">
					Dashboard
				</Link>
				<Link to="/answers" className="item">
					Answers
				</Link>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	logoText: PropTypes.string,
};

export default Navbar;
