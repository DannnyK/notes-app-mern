export default (notes = [], action) => {
	switch (action.type) {
		case "UPDATE":
			return notes.map((note) =>
				note._id === action.payload._id ? action.payload : note
			);
		case "FETCH_ALL":
			return action.payload;
		case "CREATE":
			return [...notes, action.payload];
		default:
			return notes;
	}
};
