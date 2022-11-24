import React from "react";
import Logo from "../components/icons/dk_logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../components/icons/home-icon.svg";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="nav-links">
					<img className="logo" src={Logo} alt="Daniel Kruger logo" />
					<div className="link-list">
						<Link to="/">
							<HomeIcon className="navicon" />
						</Link>
						<Link to="/notes">Notes</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
