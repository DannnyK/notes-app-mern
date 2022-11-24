import React from "react";
import Loader from "../components/Loader/Loader";
import "../App.css";

const Loading = () => {
	return (
		<>
			<div className="home-panel">
				<div className="disp">
					<Loader />
				</div>
			</div>
		</>
	);
};

export default Loading;
