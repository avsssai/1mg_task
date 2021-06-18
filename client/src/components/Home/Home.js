import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../Todos/Todos";
import { FETCHING_BEGIN, GET_ALL } from "../../constants/actionTypes";
import { getAllTodos } from "../../actions/todoActions";

const Home = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.todos.loading);
	useEffect(() => {
		dispatch({ type: FETCHING_BEGIN });
		dispatch(getAllTodos());
	}, [dispatch]);

	return (
		<div>
			<h1>Home component</h1>
			<Todos loading={loading} />
		</div>
	);
};

export default Home;
