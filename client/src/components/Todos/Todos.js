import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo/Todo";
import styles from "./Todos.module.css";

const Todos = ({ loading }) => {
	const todos = useSelector((state) => state.todos);
	console.log(todos);

	if (!todos.todos.length) {
		return <h2>Add a todo!</h2>;
	}
	return (
		<div className={styles.TodosContainer}>
			{loading ? "Fetching your todos..." : todos.todos.map((todo) => <Todo todo={todo} key={todo._id} />)}
		</div>
	);
};

export default Todos;
