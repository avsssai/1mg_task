import * as api from "../api.js";
import { ADD_TODO, CURRENT_TODO, DELETE_TODO, GET_ALL, UPDATE_TODO } from "../constants/actionTypes.js";

export const getAllTodos = () => async (dispatch) => {
	try {
		const { data } = await api.getAllTodos();
		dispatch({ type: GET_ALL, payload: data.todos });
	} catch (error) {
		console.log(error);
	}
};

export const getCurrentTodo = (id) => async (dispatch) => {
	try {
		const { data } = await api.getOneTodo(id);
		dispatch({ type: CURRENT_TODO, payload: data.todo });
	} catch (error) {
		console.log(error);
	}
};

export const addTodo = (newTodo) => async (dispatch) => {
	try {
		const { data } = await api.addTodo(newTodo);
		dispatch({ type: ADD_TODO, payload: data.todo });
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodo = () => async (dispatch) => {
	try {
		const { data } = await api.deleteTodo();
		dispatch({ type: DELETE_TODO });
	} catch (error) {
		console.log(error);
	}
};

export const updateTodo = () => async (dispatch) => {
	try {
		const { data } = await api.updateTodo();
		dispatch({ type: UPDATE_TODO, payload: data.todo });
	} catch (error) {
		console.log(error);
	}
};
