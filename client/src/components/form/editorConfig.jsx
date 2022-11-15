export const editorModules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
		["link", "image", "video"],
		["clean"]
	],
	clipboard: {
		matchVisual: false
	}
};

export const editorFormats = [
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
