import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../actions/notes";

// import { TextField, Button, Typography, Paper } from "@mui/material";

const Form = () => {
	const [noteData, setNoteData] = useState({
		title: "",
		body: "",
	});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createNote(noteData));
	};

	const clear = () => {};
	return (
		<form
			autoComplete="off"
			noValidate
			onSubmit={handleSubmit}
			className="form"
		>
			<h6>Create a Note</h6>
			<textarea
				cols="30"
				label="title"
				rows="1"
				name="title"
				value={noteData.title}
				placeholder="Title"
				onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
			/>
			<textarea
				cols="30"
				label="body"
				rows="10"
				name="body"
				value={noteData.body}
				placeholder="note"
				onChange={(e) => setNoteData({ ...noteData, body: e.target.value })}
			/>
			<button type="submit">submit</button>
			<button type="submit" onClick={clear}>
				clear
			</button>
		</form>
	);
};

export default Form;
