import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNotes } from "../actions/note-actions";
import NotesList from "../components/notesList/NotesList";
import QuillEditor from "../components/form/QuillEditor";
import "../App.css";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNotes());
	}, [dispatch]);

	return (
		<div className="main">
			<div className="view-panel">
				<NotesList setCurrentId={setCurrentId} />
				<div className="edit-panel">
					<QuillEditor currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			</div>
		</div>
	);
};

export default App;
