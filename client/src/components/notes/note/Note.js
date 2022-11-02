import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";

import { ReactComponent as Trash } from "../../icons/trash-solid.svg";

import { deleteNote } from "../../../actions/note-actions";

const Note = ({ note, setCurrentId }) => {
	const dispatch = useDispatch();

	return (
		<>
			<div className="note-body" onClick={() => setCurrentId(note._id)}>
				<p>{note.title}</p>
				{note.body}
			</div>
			<div className="note-footer">
				<span>{moment(note.createdAt).fromNow()}</span>
				<Trash onClick={() => dispatch(deleteNote(note._id))} />
			</div>
		</>
	);
};

export default Note;
