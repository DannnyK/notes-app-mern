/* eslint-disable no-console */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import noteRoutes from "./routes/note-routes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 5000;

// LOCALDB_URL left in to swap between cloud and local during dev
// eslint-disable-next-line no-unused-vars
const LOCALDB_URL = "mongodb://localhost:27017/notes-app";
const CONNECTION_URL = "mongodb+srv://Admin:9kDdv8sGG7pb97H@cluster0.esrb9kx.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
	.catch(error => console.log(error.message));
