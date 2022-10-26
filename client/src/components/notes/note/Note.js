import React from "react";
import moment from "moment";
const Note = ({ note, setCurrentId }) => {
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
				<button onClick={() => {}}>Delete</button>
				{/* <button onClick={() => setCurrentId(note._id)}>edit</button> */}
			</div>
		</>
	);
};

export default Note;
