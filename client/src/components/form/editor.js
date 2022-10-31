import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const EditorComponent = () => {
	// function contentStateChanged(payload) {
	// var data = JSON.stringify(payload);
	// console.log(data);

	// getContentStateObject(data);
	// }

	// function getContentStateObject(jsonData) {
	// 	var obj = JSON.parse(jsonData);
	// 	console.log("contentState object", obj);
	// }

	return (
		<Editor
			wrapperClassName="editor-wrapper"
			editorClassName="editor-component"
			// editorStyle={{ height: "100%", width: "100%", background: "white" }}
			// toolbarStyle={{ height: 50, widht: "100%", background: "white" }}
			// wrapperStyle={{}}

			// onContentStateChange={contentState => contentStateChanged(contentState)}
		/>
	);
};

export default EditorComponent;
