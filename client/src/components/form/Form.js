import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../actions/note-actions";
import EditorComponent from "./editor";

const Form = ({ currentId, setCurrentId }) => {
	const [noteData, setNoteData] = useState({
		title: "",
		body: ""
	});
	const note = useSelector(state => (currentId ? state.notes.find(p => p._id === currentId) : null));
	const dispatch = useDispatch();

	useEffect(() => {
		if (note) setNoteData(note);
	}, [note]);

	const handleSubmit = e => {
		e.preventDefault();

		if (currentId) {
			dispatch(updateNote(currentId, noteData));
		} else {
			dispatch(createNote(noteData));
		}
		clear();
	};

	const clear = () => {
		setCurrentId(null);
		setNoteData({ title: "", body: "" });
	};

	console.log(noteData);

	return (
		<form autoComplete="off" noValidate onSubmit={handleSubmit} className="form">
			{/* <h2>{currentId ? "Edit" : "Create"} a Note</h2> */}
			{/* <input
				type="text"
				label="title"
				name="title"
				value={noteData.title}
				placeholder="Title"
				onChange={e => setNoteData({ ...noteData, title: e.target.value })}
			/> */}
			<EditorComponent />
			{/* <textarea
				cols="30"
				label="body"
				rows="10"
				name="body"
				value={noteData.body}
				placeholder="note"
				onChange={e => setNoteData({ ...noteData, body: e.target.value })}
			/> */}
			<button type="submit">submit</button>
		</form>
	);
};

export default Form;
