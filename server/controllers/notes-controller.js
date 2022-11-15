import NoteModel from "../models/note-model.js";
import mongoose from "mongoose";

export const getNotes = async (req, res) => {
	try {
		const notes = await NoteModel.find();

		res.status(200).json(notes);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createNote = async (req, res) => {
	const note = req.body;

	const newNote = new NoteModel(note);
	try {
		await newNote.save();

		res.status(201).json(newNote);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateNote = async (req, res) => {
	const { id: _id } = req.params;
	const note = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Note with that ID!");

	const updateNote = await NoteModel.findByIdAndUpdate(_id, { ...note, _id }, { new: true });

	res.json(updateNote);
};

export const deleteNote = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Note with that ID!");

	await NoteModel.findByIdAndRemove(id);
	res.json({ message: "Note deleted successfully" });
};
