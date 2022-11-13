import React from "react";

import { useSelector } from "react-redux";
import Triangle from "../triangle/Triangle";
import Note from "./note/Note";

const Notes = ({ setCurrentId }) => {
	const notes = useSelector(state => state.notes);

	function clear() {
		setCurrentId(false);
	}

	return !notes.length ? (
		<div className="note-list">
			<div className="no-notes">
				<Triangle />
			</div>
			<i className="info">no notes</i>
		</div>
	) : (
		<div className="note-list">
			{notes.map(note => (
				<div className="note" key={note._id}>
					<Note note={note} setCurrentId={setCurrentId} />
				</div>
			))}
			<i className="info" onClick={clear}>
				Click on a note to edit it!
			</i>
		</div>
	);
};

export default Notes;
