import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getNotes } from "./actions/note-actions";
import Notes from "./components/notes/NotesList";
import Form from "./components/form/Form";
import Logo from "./components/icons/dk_logo.png";
import QuillEditor from "./components/form/QuillEditor";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);

	return (
		<div className="main">
			<nav className="navbar">
				<h2 className="unselectable">
					<img className="logo" src={Logo} alt="Daniel Kruger logo" />
					Notes App
				</h2>

				<h2 className="unselectable">{currentId ? currentId : "no note selected"}</h2>
			</nav>
			<div className="view-panel">
				<Notes setCurrentId={setCurrentId} />
				<div className="edit-panel">
					{/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
					<QuillEditor currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			</div>
		</div>
	);
};

export default App;
