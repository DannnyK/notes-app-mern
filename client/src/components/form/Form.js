import React from "react";

import { TextField, Button, Typography, Paper } from "@mui/material";

const Form = () => {
	const handleSubmit = () => {};
	return (
		<form autoComplete="off" noValidate onSubmit={handleSubmit}>
			<h6>Create a Note</h6>
			<input type="text" name="title" />
			<textarea cols="30" rows="10" name="body"></textarea>
		</form>
	);
};

export default Form;
