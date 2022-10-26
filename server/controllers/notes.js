import Note from "../models/note.js";
import mongoose from "mongoose";

export const getNotes = async (req, res) => {
	try {
		const notes = await Note.find();

		res.status(200).json(notes);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const createNote = async (req, res) => {
	const note = req.body;

	const newNote = new Note(note);
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

	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.status(404).send("No Note with that ID!");

	const updateNote = await Note.findByIdAndUpdate(
		_id,
		{ ...note, _id },
		{ new: true }
	);

	res.json(updateNote);
};
