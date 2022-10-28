import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const EditorComponent = () => {
	return (
		<Editor
			wrapperClassName="wrapper-class"
			editorClassName="editor-class"
			toolbarClassName="toolbar-class"
			wrapperStyle={<wrapperStyleObject>}
		/>
	);
};

export default EditorComponent;
