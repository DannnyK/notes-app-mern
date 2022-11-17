import React from "react";

import { useSelector } from "react-redux";
import Note from "./noteComponent/NoteComponent";

const Notes = ({ setCurrentId }) => {
	const notes = useSelector(state => state.notes);

	return !notes.length ? (
		<div className="note-list">
			<div className="no-notes">
				<i className="info">
					<h2>No Notes</h2>
				</i>
			</div>
		</div>
	) : (
		<div className="note-list">
			{notes.map(note => (
				<div className="note" key={note._id}>
					<Note note={note} setCurrentId={setCurrentId} />
				</div>
			))}
			<i className="info">Click on a note to edit it!</i>
		</div>
	);
};

export default Notes;
