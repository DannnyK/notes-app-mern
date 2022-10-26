import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
	title: String,
	body: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const NoteModel = mongoose.model('Note', noteSchema);

export default NoteModel;
