import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { createNote, updateNote } from "../../actions/note-actions";
import "react-quill/dist/quill.snow.css";

//remove
import { ReactComponent as SubmitIcon } from "../icons/update.svg";
import { ReactComponent as SaveIcon } from "../icons/save.svg";

export default function QuillEditor({ currentId, setCurrentId }) {
	const [noteData, setNoteData] = useState({
		title: "",
		body: ""
	});
	const note = useSelector(state => (currentId ? state.notes.find(p => p._id === currentId) : null));
	const dispatch = useDispatch();

	useEffect(() => {
		if (note) setNoteData(note);
	}, [note]);

	const handleSubmit = () => {
		if (currentId) {
			dispatch(updateNote(currentId, noteData));
		} else {
			dispatch(createNote(noteData));
		}
	};

	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }, { font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
			["link", "image", "video"],
			["clean"]
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false
		}
	};

	const formats = [
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video"
	];

	function handleChange(html) {
		setNoteData({ ...noteData, body: html });
		handleSubmit();
	}

	return (
		<>
			<ReactQuill
				className=""
				theme={"snow"}
				onChange={handleChange}
				value={noteData.body}
				modules={modules}
				formats={formats}
				bounds={".app"}
				placeholder={"whatever"}
			/>
			<div className="form-footer">
				{currentId ? (
					<SubmitIcon className="submit-btn" onClick={handleSubmit} />
				) : (
					<SaveIcon className="submit-btn" onClick={handleSubmit} />
				)}
			</div>
		</>
	);
}
