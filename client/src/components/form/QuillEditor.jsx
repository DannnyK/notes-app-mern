import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuillEditor() {
	const [editorHtml, setEditorHtml] = useState("");

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
		setEditorHtml(html);
	}

	return (
		<ReactQuill
			className=""
			theme={"snow"}
			onChange={handleChange}
			value={editorHtml}
			modules={modules}
			formats={formats}
			bounds={".app"}
			placeholder={"whatever"}
		/>
	);
}
