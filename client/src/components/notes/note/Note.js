import React from "react";

const Note = () => {
	return (
		<div className="note">
			<div className="note-header">
				<h1>Note</h1>
			</div>

			<div className="note-body">note body</div>

			<div className="note-footer">
				<span>date</span>
				<span>Delete</span>
			</div>
		</div>
	);
};

export default Note;
