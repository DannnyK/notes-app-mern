import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getNotes } from "./actions/notes";
import Notes from "./components/notes/Notes";
import Form from "./components/form/Form";

const App = () => {
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
				<div className="note-list">
					<Notes />
				</div>
				<div className="edit-panel">edit</div>
			</div>
		</div>
	);
};

export default App;
