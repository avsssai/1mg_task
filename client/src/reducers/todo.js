import { CURRENT_TODO } from "../constants/actionTypes.js";

const initialState = {
	todo: {},
	loading: false,
	error: null,
};

// to add a variable to  track current todo

export default function todos(state = initialState, action) {
	switch (action.type) {
		case CURRENT_TODO:
			return {
				...state,
				loading: true,
				todo: action.payload,
			};
		default:
			return state;
	}
}
