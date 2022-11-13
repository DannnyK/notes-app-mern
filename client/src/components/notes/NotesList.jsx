import React from "react";

import { useSelector } from "react-redux";
import Triangle from "../triangle/Triangle";
import NoteListItemComponent from "./note/NoteListItemComponent";

const NotesList = ({ setCurrentId }) => {
	const notesCollection = useSelector(state => state.notes);

	function clear() {
		setCurrentId(false);
	}

	return !notesCollection.length ? (
		<div className="note-list">
			{/* <div className="no-notes">
				<Triangle />
			</div> */}
			<i className="info">no notes</i>
		</div>
	) : (
		<div className="note-list">
			{notesCollection.map(note => (
				<div className="note" key={note._id}>
					<NoteListItemComponent note={note} setCurrentId={setCurrentId} />
				</div>
			))}
			<i className="info" onClick={clear}>
				Click on a note to edit it!
			</i>
		</div>
	);
};

export default NotesList;
