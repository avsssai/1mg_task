import mongoose from "mongoose";

const todosSchema = mongoose.Schema({
	todo: String,
	content: String,
	done: Boolean,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const todoModel = mongoose.model("Todo", todosSchema);

export default todoModel;
