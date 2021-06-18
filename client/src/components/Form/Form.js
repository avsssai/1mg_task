import React, { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions/todoActions";

const Form = () => {
	const dispatch = useDispatch();
	const currentTodo = useSelector((state) => state.todo);
	const handleChange = (e) => setData(e.target.value);
	const currentState = currentTodo.todo.length === 0 ? "" : currentTodo.todo.todo;
	const [data, setData] = useState(currentState);
	console.log(currentTodo.todo.todo);
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = data.split("\n")[0];
		const content = data.split("\n").splice(1).join("\n");
		dispatch(addTodo({ todo: title, content }));
		setData("");
		// dispatch({ type: ADD_TODO, payload: { todo: title, content } });
	};
	return (
		<div className={styles.formContainer}>
			{currentTodo.todo.length ? (
				<form onSubmit={handleSubmit}>
					<textarea
						name='notes'
						id='notes'
						className={styles.textarea}
						cols='70'
						rows='10'
						onChange={handleChange}
						value={data}></textarea>
					<input type='submit' value='Add' />
				</form>
			) : (
				<form onSubmit={handleSubmit}>
					<textarea
						name='notes'
						id='notes'
						className={styles.textarea}
						cols='70'
						rows='10'
						onChange={handleChange}
						value={data}></textarea>
					<div>
						<input type='submit' value={currentTodo.todo.length === 0 ? "Add" : "Edit"} />
					</div>
				</form>
			)}
		</div>
	);
};

export default Form;
