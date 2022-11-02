import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = () => {
	function contentStateChanged(payload) {
		var data = JSON.stringify(payload);
		// console.log(data);

		getContentStateObject(data);
	}

	function getContentStateObject(jsonData) {
		var obj = JSON.parse(jsonData);
		console.log("contentState object", obj.blocks[0].text);
	}

	return (
		<Editor
			placeholder="Text"
			wrapperClassName="editor-wrapper"
			editorClassName="editor-component"
			wrapperStyle={{
				height: "90%"
				// borderRadius: "25px",
				// background: "#7083a9",
				// padding: "10px",
				// boxShadow: "5px 5px 10px #586786, -5px -5px 10px #889fcc"
			}}
			editorStyle={{
				padding: "10px",
				height: "86%",
				width: "100%",
				borderRadius: "25px",
				background: "#7083a9",
				boxShadow: "inset 5px 5px 10px #586786,	inset -5px -5px 10px #889fcc",
				marginTop: "10px"
			}}
			toolbarStyle={{
				height: "fit-content",
				widht: "100%",
				borderRadius: "25px",
				background: "#7083a9",
				boxShadow: "inset 5px 5px 10px #586786,	inset -5px -5px 10px #889fcc"
			}}
			onChange={contentState => contentStateChanged(contentState)}
		/>
	);
};

export default EditorComponent;
