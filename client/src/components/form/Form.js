import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, updateNote } from '../../actions/note-actions';

const Form = ({ currentId, setCurrentId }) => {
	const [noteData, setNoteData] = useState({
		title: '',
		body: ''
	});
	const note = useSelector((state) =>
		currentId ? state.notes.find((p) => p._id === currentId) : null
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (note) setNoteData(note);
	}, [note]);

	const handleSubmit = (e) => {
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
		setNoteData({ title: '', body: '' });
	};

	return (
		<form
			autoComplete="off"
			noValidate
			onSubmit={handleSubmit}
			className="form"
		>
			<h6>{currentId ? 'Edit' : 'Create'} a Note</h6>
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
