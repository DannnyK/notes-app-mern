import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/Styles/homePage.css";


const Home = () => {
	return (
		<div>
			<div className="home-panel">
				<div className="card" id="home-nav-block">
					<h1 className="display">Welcome</h1>
					<div className="link-list">
						<Link to="/notes">
							<h2 className="display-link">notes</h2>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
