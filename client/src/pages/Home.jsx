import React from "react";

const Home = () => {
	return (
		<div className="home-panel">
			<div className="card" id="home-nav-block">
				<h1>Home Page</h1>
				<div className="link-list">
					<a href="/notes">
						<h2>NOTES</h2>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
