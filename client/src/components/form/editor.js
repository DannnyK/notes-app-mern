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
			editorStyle={{ height: "400px", width: "100%", background: "white" }}
			toolbarStyle={{ height: "fit-content", widht: "100%", background: "white" }}
			onChange={contentState => contentStateChanged(contentState)}
		/>
	);
};

export default EditorComponent;
