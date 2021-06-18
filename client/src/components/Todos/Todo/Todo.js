import React from "react";
import styles from "./Todo.module.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getCurrentTodo } from "../../../actions/todoActions";

const Todo = ({ todo }) => {
	const dispatch = useDispatch();
	const selectTodo = () => {
		dispatch(getCurrentTodo(todo._id));
		console.log(todo._id);
	};
	return (
		<div className={styles.TodoContainer}>
			<div className={styles.heading} onClick={selectTodo}>
				{todo.todo}
			</div>
			<div className={styles.subHeading}>
				<i>last updated </i> {moment(todo.updatedAt).fromNow()}
			</div>
		</div>
	);
};

export default Todo;
