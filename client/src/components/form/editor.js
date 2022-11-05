/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../actions/note-actions";

//TODO complete implementation, figure out how to save data to backend, remove consolelogs
//also remove comments

const EditorComponent = ({ currentId, setCurrentId }) => {
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
	function contentStateChanged(payload) {
		var data = JSON.stringify(payload);
		// console.log(data);

		getContentStateObject(data);
	}

	function getContentStateObject(jsonData) {
		var obj = JSON.parse(jsonData);
		console.log("contentState object", obj.blocks[0].text);
	}

	return (
		<Editor
			placeholder="Text"
			wrapperClassName="editor-wrapper"
			editorClassName="editor-component"
			wrapperStyle={{
				height: "90%"
				// borderRadius: "25px",
				// background: "#7083a9",
				// padding: "10px",
				// boxShadow: "5px 5px 10px #586786, -5px -5px 10px #889fcc"
			}}
			editorStyle={{
				padding: "10px",
				height: "86%",
				width: "100%",
				borderRadius: "25px",
				background: "#7083a9",
				boxShadow: "inset 5px 5px 10px #586786,	inset -5px -5px 10px #889fcc",
				marginTop: "10px"
			}}
			toolbarStyle={{
				height: "fit-content",
				widht: "100%",
				borderRadius: "25px",
				background: "#7083a9",
				boxShadow: "inset 5px 5px 10px #586786,	inset -5px -5px 10px #889fcc"
			}}
			onChange={handleSubmit}
		/>
	);
};

export default EditorComponent;
