import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../actions/note-actions";
import "react-quill/dist/quill.snow.css";
import { editorFormats, editorModules } from "./editorConfig";

export default function QuillEditor({ currentId }) {
	const [noteData, setNoteData] = useState(undefined);
	const dispatch = useDispatch();
	const currentNote = useSelector(state => (currentId ? state.notes.find(p => p._id === currentId) : null));

	const countDownMilliseconds = 10000;

	useEffect(() => {
		if (currentNote) setNoteData(currentNote); //currentNote === null means it is a new note
	}, [currentNote]);

	function startUpdateTimer() {
		setTimeout(() => {
			handleSubmit();
			startUpdateTimer();
		}, countDownMilliseconds);
	}

	function handleSubmit() {
		if (currentId) {
			dispatch(updateNote(currentId, { body: noteData }));
		} else {
			dispatch(createNote({ body: noteData }));
		}
	}

	function handleChange(value) {
		setNoteData(value);

		if (!currentId) {
			//new note
		}
	}

	return (
		<ReactQuill
			className="form"
			theme={"snow"}
			onChange={value => handleChange(value)}
			value={noteData}
			modules={editorModules}
			formats={editorFormats}
		/>
	);
}
