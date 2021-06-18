import axios from "axios";

const url = "http://localhost:5000";

const API = axios.create({
	baseURL: url,
});

export const getAllTodos = () => API.get("/todos/all-todos");
export const addTodo = (newTodo) => API.post("/todos/add", newTodo);
export const deleteTodo = (todoId) => API.delete(`/todos/delete/${todoId}`);
export const updateTodo = (todoId) => API.patch(`/todos/update/${todoId}`);
