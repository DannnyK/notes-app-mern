import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
	title: String,
	body: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
