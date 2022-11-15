import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { ReactComponent as TrashIcon } from "../../icons/trash-solid.svg";
import { deleteNote } from "../../../actions/note-actions";

const Note = ({ note, setCurrentId }) => {
	const dispatch = useDispatch();
	const regex = /(<([^>]+)>)/gi;

	function deleteNoteConfirm() {
		let confirm = prompt("are you sure? (y/n)");
		if (confirm.toLowerCase() === "y") {
			dispatch(deleteNote(note._id));
		} else {
			alert(`Your note was not deleted`);
		}
	}

	return (
		<>
			<div className="note-body" onClick={() => setCurrentId(note._id)}>
				{note.body?.replace(regex, "")}
			</div>
			<div className="note-footer">
				<span>{moment(note.createdAt).fromNow()}</span>
				<TrashIcon onClick={deleteNoteConfirm} />
			</div>
		</>
	);
};

export default Note;
