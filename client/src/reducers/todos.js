import {
	GET_ALL,
	FETCHING_BEGIN,
	FETCHING_END,
	FETCHING_ERROR,
	ADD_TODO,
	UPDATE_TODO,
	DELETE_TODO,
} from "../constants/actionTypes.js";

const initialState = {
	todos: [],
	loading: true,
	error: null,
};

export default function todos(state = initialState, action) {
	switch (action.type) {
		case FETCHING_BEGIN:
			return {
				...state,
				loading: true,
			};
		case GET_ALL:
			return {
				loading: false,
				todos: action.payload,
				error: null,
			};
		case ADD_TODO:
			return {
				...state,
				loading: false,
				todos: [...state.todos, action.payload],
			};
		case DELETE_TODO:
			const list_after_delete = [...state.todos].filter((todo) => todo._id !== action.payload._id);
			return {
				...state,
				loading: false,
				todos: list_after_delete,
			};
		case UPDATE_TODO:
			const updatedTodos = [...state.todos].map((todo) =>
				todo._id === action.payload._id ? action.payload : todo
			);
			return {
				...state,
				todos: updatedTodos,
			};

		case FETCHING_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
