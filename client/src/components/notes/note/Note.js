import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteNote } from "../../../actions/notes";

const Note = ({ note, setCurrentId }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="note-header">
				<h1>{note.title}</h1>
			</div>

			<div className="note-body" onClick={() => setCurrentId(note._id)}>
				{note.body}
			</div>

			<div className="note-footer">
				<span>{moment(note.createdAt).fromNow()}</span>
				<button onClick={() => dispatch(deleteNote(note._id))}>Delete</button>
			</div>
		</>
	);
};

export default Note;
