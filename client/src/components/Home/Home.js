import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../Todos/Todos";
import Navbar from "../Navbar/Navbar";
import { FETCHING_BEGIN, GET_ALL } from "../../constants/actionTypes";
import { getAllTodos } from "../../actions/todoActions";
import styles from "./Home.module.css";
import Form from "../Form/Form";

const Home = () => {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.todos.loading);
	useEffect(() => {
		dispatch({ type: FETCHING_BEGIN });
		dispatch(getAllTodos());
	}, [dispatch]);

	return (
		<div className={styles.HomeContainer}>
			<Navbar />
			<div className={styles.ContentContainer}>
				<div className={styles.TodosContainer}>
					<div className={styles.TodosHeader}>Todos</div>
					<div>
						<Todos loading={loading} />
					</div>
				</div>
				<div className={styles.EditContainer}>
					<div className={styles.EditHeader}>Edit</div>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Home;
