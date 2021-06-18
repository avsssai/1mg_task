import Todo from "../models/TodoModel.js";

export const getAllTodos = async (req, res) => {
	try {
		// GET ALL TODOS
		const allTodos = await Todo.find();
		return res.status(200).json({
			message: "All todos",
			todos: allTodos,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: "Could not get Todos",
		});
	}
};
export const getTodo = async (req, res) => {
	try {
		// GET A SINGLE TODO
		const todoId = req.params.id;
		const todo = await Todo.findById(todoId);
		res.status(200).json({
			message: "todo found",
			todo,
		});
	} catch (error) {
		res.status(400).json({
			message: "Could not get Todo",
		});

		console.log(error);
	}
};
export const addTodo = async (req, res) => {
	try {
		// ADD A TODO
		const todo = req.body;
		const newTodo = new Todo(todo);
		await newTodo.save();
		res.status(201).json({
			message: "New Todo added successfully.",
			todo: newTodo,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: "Could not create a new Todo",
		});
	}
};
export const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;
		await Todo.findByIdAndRemove(id);
		res.status(200).json({
			message: "Deleted Todo",
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: "Could not delete Todo",
		});
	}
};
export const updateTodo = async (req, res) => {
	try {
		// UPDATE TODO
		const { id } = req.params;
		const data = req.body;
		const updatedTodo = await Todo.findByIdAndUpdate(id, { ...data }, { new: true });
		res.status(201).json({
			message: "Todo updated successfully.",
			todo: updatedTodo,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: "Could not delete Todo",
		});
	}
};
