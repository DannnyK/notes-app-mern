import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../actions/note-actions";

import { ReactComponent as SubmitIcon } from "../icons/update.svg";
import { ReactComponent as SaveIcon } from "../icons/save.svg";

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
		setCurrentId(false);
		setNoteData({ title: "", body: "" });
	};

	return (
		<>
			<form autoComplete="off" noValidate onSubmit={handleSubmit} className="form">
				<input
					type="text"
					label="title"
					name="title"
					value={noteData.title}
					placeholder="What do you want your note to be called?"
					onChange={e => setNoteData({ ...noteData, title: e.target.value })}
				/>
				<textarea
					cols="30"
					label="body"
					rows="10"
					name="body"
					value={noteData.body}
					placeholder="Type your note..."
					onChange={e => setNoteData({ ...noteData, body: e.target.value })}
				/>
				<div className="form-footer">
					{currentId ? (
						<SaveIcon className="submit-btn" onClick={handleSubmit} />
					) : (
						<SubmitIcon className="submit-btn" onClick={handleSubmit} />
					)}
				</div>
			</form>
		</>
	);
};

export default Form;
