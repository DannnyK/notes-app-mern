import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const NoPage = () => {
	return (
		<>
			<div className="home-panel">
				<Navbar />
				<h1 className="disp">404 </h1>
				<h2>Page not found</h2>
			</div>
		</>
	);
};

export default NoPage;
