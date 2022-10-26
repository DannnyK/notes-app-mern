import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getNotes } from "./actions/notes";
import Notes from "./components/notes/Notes";
import Form from "./components/form/Form";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);

	return (
		<div className="main">
			<nav className="menu-bar">
				<h1>Menu Bar</h1>
			</nav>
			<div className="view-panel">
				<Notes setCurrentId={setCurrentId} />
				<div className="edit-panel">
					<Form currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			</div>
		</div>
	);
};

export default App;
