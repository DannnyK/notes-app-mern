import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { ReactComponent as TrashIcon } from "../../icons/trash-solid.svg";
import { deleteNote } from "../../../actions/note-actions";

const Note = ({ note, setCurrentId }) => {
	const dispatch = useDispatch();

	const deleteNoteTest = () => {
		dispatch(deleteNote(note._id));
	};

	function deleteNoteConfirm() {
		let confirm = prompt("are you sure? (y/n)");
		if (confirm.toLowerCase() === "y") {
			dispatch(deleteNote(note._id));
		} else {
			alert(`Ok, ${note.title} won't be deleted :)`);
		}
	}

	const regex = /(<([^>]+)>)/gi;

	return (
		<>
			<div className="note-body" onClick={() => setCurrentId(note._id)}>
				{note.body?.replace(regex, "")}
			</div>
			<div className="note-footer">
				<span>{moment(note.createdAt).fromNow()}</span>
				<TrashIcon onClick={deleteNoteTest} />
			</div>
		</>
	);
};

export default Note;
