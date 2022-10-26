import React from "react";

import { useSelector } from "react-redux";
import Note from "./note/Note";

const Notes = ({ setCurrentId }) => {
	const notes = useSelector((state) => state.notes);
	// console.log(notes);
	return !notes.length ? (
		<h1>no notes</h1>
	) : (
		<div className="note-list">
			{notes.map((note) => (
				<div className="note" key={note._id}>
					<Note note={note} setCurrentId={setCurrentId} />
				</div>
			))}
		</div>
	);
};

export default Notes;
