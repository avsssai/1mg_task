import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Todos = ({ loading }) => {
	const todos = useSelector((state) => state.todos);
	console.log(todos);
	return (
		<div>
			<h1>all todos</h1>
			{loading ? "loading" : "loaded"}
		</div>
	);
};

export default Todos;
