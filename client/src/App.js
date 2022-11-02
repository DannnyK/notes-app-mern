import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getNotes } from "./actions/note-actions";
import Notes from "./components/notes/NotesList";
import Form from "./components/form/Form";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);

	return (
		<div className="main">
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
