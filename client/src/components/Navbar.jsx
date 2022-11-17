import React from "react";
import Logo from "../components/icons/dk_logo.png";

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
				<div className="nav-links">
					<img className="logo" src={Logo} alt="Daniel Kruger logo" />
					<div className="link-list">
						<a href="/">Home</a>
						<a href="/notes">Notes</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
