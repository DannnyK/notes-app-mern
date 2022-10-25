import React from "react";

import { useSelector } from "react-redux";
import Note from "./note/Note";

const Notes = () => {
	const notes = useSelector((state) => state.notes);
	console.log(notes);
	return (
		<>
			<Note />
			<Note />
			<Note />
			<Note />
			<Note />
		</>
	);
};

export default Notes;
