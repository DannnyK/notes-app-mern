import React from "react";
import Logo from "../components/icons/dk_logo.png";

const Home = () => {
	return (
		<div className="home-panel">
			<div className="card">
				<h1>Home Page</h1>
				{/* <img className="logo" src={Logo} alt="logo" /> */}
				<div className="link-list">
					<a href="/notes">Notes</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
